---
authorId: rwwagner90
categories:
  - electron
  - javascript
date: '2021-02-07'
slug: launch-electron-app-from-browser-custom-protocol
title: Launching Electron Apps From the Browser
---

Everyone has probably encountered this situation at least a few times in their lifetime:

You're browsing the web and come across a file or link you want to open in an app on your computer.
Your browser will prompt you to make sure it's okay with a nice message like this:

![Popup prompting user to open in app on their computer.](/img/blog/launch-electron-app-from-browser-custom-protocol/open-with.png)

This is incredibly useful, and allows users to have a seamless workflow of going straight to your app.

## Electron app -> browser

We have been working tirelessly on new features for [Swach](https://swach.io/), and one of those new features was the ability to share palettes with other users and view them online. 
The sharing aspect was trivial. We used Electron's `shell` module which provides an [openExternal](https://www.electronjs.org/docs/api/shell#shellopenexternalurl-options)
method that we used to generate a link with query params to pass the palette data to [swach.io](https://swach.io/).

## Browser -> Electron app

Going the other direction proved much harder, however. Electron does support using custom protocols out of the box with [setAsDefaultProtocolClient](https://www.electronjs.org/docs/api/app#appsetasdefaultprotocolclientprotocol-path-args), but opening these custom protocol links requires a much different setup for different platforms.

### macOS

On macOS there is a special [open-url](https://www.electronjs.org/docs/api/app#event-open-url-macos) event that is supported, which makes things fairly straightforward. 
We can set our app as the default protocol client, and then use `open-url` to handle importing our data.

**Note: You can replace `custom` with whatever you want to name your custom protocol.**

```js
let deeplinkingUrl;

app.setAsDefaultProtocolClient('custom');

app.on('open-url', function (event, url) {
  event.preventDefault();
  deeplinkingUrl = url;
});
```

We will also need to add these custom protocols to our `plist`. If you are using electron-forge or electron-builder, you can add this to your config.

#### electron-forge

```js
packagerConfig: {
  protocols: [
    {
      protocol: 'custom',
      name: 'custom',
      schemes: 'custom'
    }
  ]
}
```

#### electron-builder

```json
"build": {
  "protocols": [
    {
      "name": "custom",
      "schemes": [
        "custom"
      ]
    }
  ]
}
```

### Windows

On Windows, the `open-url` event is not supported, and instead Electron will try to open a new instance of your application. 
We will have to catch this and focus our existing application instead. We also have to modify `setAsDefaultProtocolClient` to support running in dev mode in Windows.

```js
if (isDev && process.platform === 'win32') {
  // Set the path of electron.exe and your app.
  // These two additional parameters are only available on windows.
  // Setting this is required to get this working in dev mode.
  app.setAsDefaultProtocolClient('custom', process.execPath, [
    resolve(process.argv[1])
  ]);
} else {
  app.setAsDefaultProtocolClient('custom');
}

// Force single application instance
const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  app.quit();
  return;
} else {
  app.on('second-instance', (e, argv) => {
    if (process.platform !== 'darwin') {
      // Find the arg that is our custom protocol url and store it
      deeplinkingUrl = argv.find((arg) => arg.startsWith('custom://'));
    }

    if (myWindow) {
      if (myWindow.isMinimized()) myWindow.restore();
      myWindow.focus();
    }
  });
}
```

## Final Result

Our final result is something like this:

```js
let deeplinkingUrl;

if (isDev && process.platform === 'win32') {
  // Set the path of electron.exe and your app.
  // These two additional parameters are only available on windows.
  // Setting this is required to get this working in dev mode.
  app.setAsDefaultProtocolClient('custom', process.execPath, [
    resolve(process.argv[1])
  ]);
} else {
  app.setAsDefaultProtocolClient('custom');
}

app.on('open-url', function (event, url) {
  event.preventDefault();
  deeplinkingUrl = url;
});

// Force single application instance
const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  app.quit();
  return;
} else {
  app.on('second-instance', (e, argv) => {
    if (process.platform !== 'darwin') {
      // Find the arg that is our custom protocol url and store it
      deeplinkingUrl = argv.find((arg) => arg.startsWith('custom://'));
    }

    if (myWindow) {
      if (myWindow.isMinimized()) myWindow.restore();
      myWindow.focus();
    }
  });
}
```

For a good example of supporting deep linking / custom protocols on both macOS and Windows, check out this [example app](https://github.com/oikonomopo/electron-deep-linking-mac-win).
