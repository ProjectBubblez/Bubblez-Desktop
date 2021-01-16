const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    resizable: true,
    minimizable: true,
    maximizable: true,
    fullscreenable: true,
    autoHideMenuBar: true,
    useContentSize: true,
    width: 1910,//800,
    height: 1070,//600,
    backgroundColor: '#282c34',
    transparent: true,
    frame: true,
    icon: path.join(__dirname, 'bubblez.ico')
  });

  //const contents = mainWindow.webContents

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  //mainWindow.loadURL('https://bubblez.app/home');

  // Open the DevTools.
  //mainWindow.webContents.openDevTools();

   //const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

   //Menu.setApplicationMenu(mainMenu);
  mainWindow.setIcon(path.join(__dirname, 'bubblez.ico'));
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

 //const mainMenuTemplate = [
   //{
     //label: '<--',
      //role: 'undo',
      //click: function(){
        //contents.goBack()
        //window.history.back();
     //}
   //},
   //{
     //label: '-->',
      //role: 'redo',
      //click: function(){
        //contents.goForward()
        //window.history.forward();
     //}
   //}
   //];