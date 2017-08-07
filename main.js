const electron = require('electron')
// Module to control application life.
const app = electron.app
const globalShortcut = electron.globalShortcut
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    alwaysOnTop: true,
    fullscreen: false,
    kiosk: false,
    icon: path.join(__dirname, 'icons/png/64x64.png'),
    webPreferences: {
      nodeIntegration: false, plugins: true
    }
  })

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: 'pia-front.atnosapp.com',
    protocol: 'http:',
    slashes: true
  }))

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  // forbid any attempt to download a file
  const {session} = require('electron')
  session.defaultSession.on('will-download', (event, item, webContents) => {
    event.preventDefault();
  })

  const sc_reload = globalShortcut.register('CommandOrControl+R', () => {
    mainWindow.reload()
  })

  const sc_quit = globalShortcut.register('CommandOrControl+Alt+Shift+D', () => {
    mainWindow.close()
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
