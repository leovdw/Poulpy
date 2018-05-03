const fs = require('fs');
const {dialog} = require('electron').remote;


document.getElementById('open-file-manager').addEventListener('click', () => {
  let content = "file content";

  dialog.showSaveDialog( (filename) => {
    if (filename === undefined) {
      console.log("the user clicked the buton but didn't created any file");
      return;
    }
  })
}, false);
