// UI part

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('🔐 Password Tools')
    .addItem('Generate Passwords', 'generatePasswordPerUser')
    .addToUi();
}


// Part 1, Assembly of the password

//main part, declares the values used to generate and gives the input in the sheet
function generatePasswordPerUser(){
  const sheet = SpreadsheetApp.getActiveSheet();
  const lastRow = sheet.getLastRow();
  const variableForPass = 'abcdefghijklmnopqrstuvwxyzABCDEFHIJKLMNOPQRSTUVWXYZ0123456789'; // -> values used to generate



// logic behind the extraction and concatenations of the password

  for(let i = 2; i <= lastRow; i++){
    const username = sheet.getRange(i, 1).getValue() // username column -> A
    const existingPassword = sheet.getRange(i, 2).getValue() // sees if there's a password


    if(username && !existingPassword){
      let passStoredValues = [] // premade form of password, from this we build the final form of password       
      let passCreated; // stores the result of password


      for(let j = 0; j < 4; j++){
        let preStoredPass = '' //  temp holder of 3-char chunk

        for(let l = 0; l < 3; l++ ){
          const selectChar = Math.floor(Math.random() * variableForPass.length); // char selection in lenght of constant with every character



          preStoredPass += variableForPass[selectChar] // adds character to chunk
        }

        passStoredValues.push(preStoredPass) // passes the chunk blocks to the array
      }

    passCreated = passStoredValues.join("-"); // adds the spec of yandex passwords
    sheet.getRange(i, 2).setValue(passCreated);
    }
  }


// Part 2, defining an automatic checkbox
// the goal is giving the user the possibility of track which things they copied


// getting range and defining a rule
const checkboxRange = sheet.getRange(2, 3, lastRow - 1);
const ruleCheckbox = SpreadsheetApp.newDataValidation()
      .requireCheckbox()
      .build();

// applying rule to the entire range
checkboxRange.setDataValidation(ruleCheckbox);

}





