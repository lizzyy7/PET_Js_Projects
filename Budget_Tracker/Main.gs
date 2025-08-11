function onOpen() {
  createExpensesMenu();
}

function createExpensesMenu(){
    const ui = SpreadsheetApp.getUi();
  ui.createMenu('🧭Expenses editor')
      .addItem('1. Add Expense', 'addExpenseRow')
      .addSeparator()
      .addItem('2. Calculate expenses', 'calculateTotalExpenses')
      .addToUi();
}

function addExpenseRow(){ // Create rows 
  const sheet = SpreadsheetApp.getActiveSheet();
  const lastRow = sheet.getLastRow();
  
  for(let i = 2; i <= lastRow + 1; i++){
    const cellValue = sheet.getRange(i, 1).getValue();

    if(cellValue === ""){ // Adds the row and sets the numeration
      let cellNumeration = i - 1;
      sheet.getRange(i, 1).setValue(cellNumeration);
      sheet.getRange(i, 3).setNumberFormat("0.00 \"$\"") // visual format for amount row
      sheet.getRange(i, 3).setValue(0.0); // real value behind 


      // creates a dropdown list
      const categories = ['entertainment', 'bus tickets', 'food', 'bills'];
      const listRule = SpreadsheetApp.newDataValidation()
        .requireValueInList(categories)
        .setAllowInvalid(false)
        .build()

      sheet.getRange(i, 2).setDataValidation(listRule);
      break;
    }


  }

}

function calculateTotalExpenses(){
  const sheet = SpreadsheetApp.getActiveSheet();
  const lastRow = sheet.getLastRow();

  if(lastRow < 2) return // avoid computing if there is no data in sheet

  const rangedValues = sheet.getRange(2, 3, lastRow - 1, 2).getValues();
  const deviation = rangedValues.map(([planned, actual]) => {
    const numPlanned = Number(String(planned).replace(/[^\d.-]/g, ''));
    const numActual = Number(String(actual).toString().replace(/[^\d.-]/g, ''));

  if (isNaN(numPlanned) || isNaN(numActual)) return null; // or 0 or "Invalid"
  return numActual - numPlanned;
});

  // write deviations in column 5
  sheet.getRange(2, 5, deviation.length, 1).setValues(deviation.map(value => [value]))
  
}


function buildPlannedByCategory(){
  const sheet = SpreadsheetApp.getActiveSheet();
  const lastRow = sheet.getLastRow()

  if(lastRow < 2) return {}

// Get categories and planned values from rows 2 to last
  const dataInCell = sheet.getRange(2, 2, lastRow -1, 2).getValues()
  const plannedByCategory = {};

  for(const [category, planned] of dataInCell){
    const numPlanned = Number(planned)

    if(category && !plannedByCategory[category] && !isNaN(numPlanned) && numPlanned > 0){
      plannedByCategory[category] = numPlanned
    }
  }
  return plannedByCategory
}

// computing the deviation
function onEdit(e) {
  const sheet = e.range.getSheet();
  const editedRow = e.range.getRow();
  const editedCol = e.range.getColumn();

  if (editedCol !== 2 || editedRow < 2) return;

  const category = e.range.getValue();
  if (!category) return;

  const lastRow = sheet.getLastRow();
  const categoryPlannedMap = {};

  const data = sheet.getRange(2, 2, lastRow - 1, 2).getValues(); // [Category, Planned]
  for (let i = 0; i < data.length; i++) {
    const [cat, planned] = data[i];
    const cleaned = Number(String(planned).replace(/[^\d.-]/g, ''));
    if (cat && cleaned > 0 && !categoryPlannedMap[cat]) {
      categoryPlannedMap[cat] = cleaned;
    }
  }

  const plannedCell = sheet.getRange(editedRow, 3); // Column C
  const plannedValueRaw = plannedCell.getValue();
  const plannedValue = Number(String(plannedValueRaw).replace(/[^\d.-]/g, ''));

  if ((isNaN(plannedValue) || plannedValue === 0) && categoryPlannedMap[category]) {
    plannedCell.setValue(categoryPlannedMap[category]);
    plannedCell.setNumberFormat("0.00 \"$\"");
  }
}
