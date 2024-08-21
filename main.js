const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 720
    })
  
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})

fetch('https://api.apify.com/v2/browser-info')
  .then(response => response.json())
  .then(data => {
    console.log('Your public IP address is:', data.clientIp);
  })
  .catch(error => {
    console.error('Error fetching IP address:', error);
  });