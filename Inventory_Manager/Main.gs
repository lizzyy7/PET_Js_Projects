function onOpen() {
  createMenu();
}

function createMenu() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('📦Inventory Menu')
    .addItem('1. Add product', 'addRows')
    .addItem('2. Check Stock', 'calculateStock')
    .addItem('3. Generate report', 'sendReportMenu')
    .addToUi();
}

function addRows() { // creates empty product in list
  const sheet = SpreadsheetApp.getActiveSheet();
  const lastRow = sheet.getLastRow();

  for (let i = 2; i <= lastRow + 1; i++) {
    // const isEmptyCell = sheet.getRange(i, 1).getValue();
    const dropdownRule = selectableProduct()
    sheet.getRange(i, 1).setDataValidation(dropdownRule)

  }

}

function selectableProduct() { // creates dropdown list
  const categories = ['Gears', 'Bolts', 'Nails', 'Screws']

  return SpreadsheetApp.newDataValidation()
    .requireValueInList(categories)
    .setAllowInvalid(false)
    .build()
}

function calculateStock() { // calculate inventory and show result
  const sheet = SpreadsheetApp.getActiveSheet();
  const lastRow = sheet.getLastRow();

  for (let j = 2; j <= lastRow; j++) { // get the values
    const stockLevel = sheet.getRange(j, 2).getValue();
    const restockNeed = sheet.getRange(j, 3).getValue();

    if (!isNaN(stockLevel) && !isNaN(restockNeed)) { // stock calculation
      if (stockLevel < restockNeed) {
        sheet.getRange(j, 4).setValue('Low supply').setBackground('#F54927')
      }
      else {
        sheet.getRange(j, 4).setValue('Ok').setBackground('#27F535')
      }
      continue
    }
    else {
      SpreadsheetApp.getUi().alert('Check your values!') // if value is wrong
      return
    }
  }
}

function sendReportMenu() { // Interact with the user before sending email
  const sheet = SpreadsheetApp.getUi();
  const userMenu = sheet.prompt('Recipient email: ', 'Input: ', sheet.ButtonSet.OK_CANCEL)
  const userEmail = userMenu.getResponseText().trim().toLowerCase()
  const selection = userMenu.getSelectedButton()

  if (selection == SpreadsheetApp.getUi().Button.OK) {
    const exportedTable = sendReportHelper()
    sendEmailHelper(userEmail, exportedTable)
  }
  else{
    SpreadsheetApp.getUi().alert('Report canceled. No email was sent')
  }
}

function sendEmailHelper(emailRecipient, tableReport) { // generate the email and send
  const subject = "Inventory checkout"
  const body = "Dont forget to check which items are low on supplies"

  MailApp.sendEmail({
    to: emailRecipient,
    subject: subject,
    body: body,
    attachments: [tableReport]
  })
  SpreadsheetApp.getUi().alert('Report sent!')
}

function sendReportHelper(){ // generate the report from the table
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const id = spreadsheet.getId();
  const url = `https://docs.google.com/spreadsheets/d/${id}/export?`;

  const exportOptions = {
    exportFormat: 'pdf',
    format: 'pdf',
    size: 'A4',
    portrait: true,
    fitw: true,
    sheetnames: false,
    printtitle: false,
    pagenumbers: false,
    gridlines: false,
    fzr: false,
  };

  const params = Object.entries(exportOptions)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  const token = ScriptApp.getOAuthToken();

  const response = UrlFetchApp.fetch(url + params, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    muteHttpExceptions: true,
  });

  return response.getBlob().setName('Inventory_Report.pdf');
}

