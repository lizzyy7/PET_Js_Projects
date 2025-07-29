// Show menu when sheet opens
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('🔐 Password Tools')
    .addItem('Generate Passwords', 'generatePasswordPerUser')
    .addToUi();
}

// Main function: generate passwords and add checkboxes
function generatePasswordPerUser() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const lastRow = sheet.getLastRow();
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFHIJKLMNOPQRSTUVWXYZ0123456789';

  for (let i = 2; i <= lastRow; i++) {
    const username = sheet.getRange(i, 1).getValue(); // Column A
    const existingPassword = sheet.getRange(i, 2).getValue(); // Column B

    if (username && !existingPassword) {
      let parts = [];

      // Create 4 chunks of 3 characters each
      for (let j = 0; j < 4; j++) {
        let chunk = '';
        for (let k = 0; k < 3; k++) {
          const index = Math.floor(Math.random() * characters.length);
          chunk += characters[index];
        }
        parts.push(chunk);
      }

      const password = parts.join("-");
      sheet.getRange(i, 2).setValue(password); // Place in Column B
    }
  }

  // Add checkboxes in Column C
  const checkboxRange = sheet.getRange(2, 3, lastRow - 1);
  const rule = SpreadsheetApp.newDataValidation().requireCheckbox().build();
  checkboxRange.setDataValidation(rule);
}
