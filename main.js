  const {app, BrowserWindow} = require('electron')
  const path = require('path')
  const url = require('url')
  const {shell} = require('electron')
  const os = require('os')
  const {ipcMain, ipcRenderer} = require('electron')


  require("electron-reload")(__dirname, {
    app: require(`${__dirname}/node_modules/electron`)
  });


  let win

  function createWindow () {

    win = new BrowserWindow({
      width: 2500,
      height: 1623,
      frame: true
    });



    win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }))

    win.webContents.openDevTools()

    win.on('closed', () => {
      win = null
    })
  }

  app.on('ready', createWindow)

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })


  const fs = require('fs')
  const electron = require('electron')
  const ipc = require('electron').ipcMain;


  ipc.on('print-to-pdf', (event) => {
    const pdfPath = path.join(os.tmpdir(), 'print.pdf');
    const win = BrowserWindow.fromWebContents(event.sender);


    win.webContents.printToPDF({}, (error, data) => {
      if (error) return console.log(error.message);
      console.log(data);
      fs.writeFile(pdfPath, data, (error) => {

        if (error) console.log(error.message);
        shell.openExternal(`file://${pdfPath}`)
        event.sender.send('wrote-pdf', pdfPath)
      })
    })
  })

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow()
    }
  })

  // In this file you can include the rest of your app's specific main process
  // code. You can also put them in separate files and require them here.
