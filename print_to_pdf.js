const ipc = require('electron').ipcRenderer;

const printPDFBtn = document.getElementById('print-pdf')

printPDFBtn.addEventListener('click', (event) => {
  ipc.send('print-to-pdf');

});

ipc.on('wrote-pdf', (event, path) => {
  const message = `Wrote PDF to: ${path}`
  document.getElementById('pdf-path').innerHTML = message
})

const app = require('electron').remote
const dialog = app.dialog;
const fs = require('fs');

document.getElementById('print-pdf').onclick = () => {
  dialog.showSaveDialog((fileName) => {
    if (fileName === undefined) {
      console.log("you didn't saved the file");
      return
    }

    var content = document.querySelector('.print-section').innerText;

    fs.writeFile(fileName, content, (err) => {
      if (err) {
        console.log(err);
      }
    })
  })
}
