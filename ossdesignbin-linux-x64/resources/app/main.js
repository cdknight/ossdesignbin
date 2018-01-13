const electron = require("electron");
const app = electron.app; 
const {ipcMain} = require('electron');
const path = require('path');
const url = require('url');
const shell = require('shelljs')
const BrowserWindow = electron.BrowserWindow;
var dirname = "~/ossdesignbin_bin"
shell.config.execPath = "/usr/bin/node"
shell.exec("mkdir -p " + dirname);
var mainWindow; 
app.on('ready', function(){
    mainWindow = new BrowserWindow({width: 400, height:768, backgroundcolor:'#344598'})
    //mainWindow.loadURL("https://github.com")
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    ipcMain.on('send_msg', (event,arg) =>{
        console.log("User has requested an install of the following software: " + arg);
        if (arg == "darktable"){
            shell.exec('bash install_scripts/darktable.sh')
            event.sender.send("darktable_success", "done");
        }
    })
});

