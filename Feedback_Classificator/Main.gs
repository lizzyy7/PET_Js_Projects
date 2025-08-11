function onOpen(){
  createMenu()
}

const acceptedCategories = new Set(); // tracks sheet category per creation
const ignoredCategories = new Set();

function createMenu(){
  const newButton = SpreadsheetApp.getUi()
  newButton.createMenu('Sort feedback')
    .addItem('1. Sort feedback', 'executeAutoCreationForActiveSheet')
    .addToUi()

}


function executeAutoCreationForActiveSheet() { // get the ranges and sorter list
  const sheet = SpreadsheetApp.getActive();
  const mainSheet = sheet.findSheetByName("Form Responses")

  const rows = mainSheet.getDataRange().getValues();
  if (rows !== undefined && rows.length > 1) {
    const dataWithoutHeaderRow = rows.slice(1)
    dataWithoutHeaderRow.forEach(row => {
      const category = row[2]
      autoCreateSheet(category, sheet,row)
    })
  }
}

function copyRowToAnotherSheet(targetSheet, row) {
  if (targetSheet === undefined) {
    return
  }
  // todo apppend header names just once.
  // targetSheet.appendRow(["Timestamp", "Name", "Message"]);
  const [timestamp, name, _, message] = row
  targetSheet.appendRow([timestamp, name, message])
}

function wasCategoryProceesed(category) {
  return createdCategories.has(category) || ignoredCategories.has(category)
}

function autoCreateSheet(category, sheet, row){ // add sheet if not exists, or skip if opposite || autoappend the sorted message to correct sheet
  if (!wasCategoryProceesed(category)) {
    const ui = SpreadsheetApp.getUi()
    const userResponse = ui.alert('You will create a new sheet. Continue?', ui.ButtonSet.YES_NO)
    if (userResponse == ui.Button.YES) { // check with the user the need of adding sheets
      sheet.insertSheet(category)
      acceptedCategories.add(category)
    } else {
      ignoredCategories.add(category)
    }
  }

  if(acceptedCategories.has(category)) {
    const targetSheet = sheet.findSheetByName(category)
    copyRowToAnotherSheet(targetSheet, row)  
  }
}
