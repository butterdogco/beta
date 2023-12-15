const appDir = [
  {
    name: "Boogle Brome",
    type: "iframe",
    icon: "img/favicon.ico",
    defaultWidth: "40vw",
    defaultHeight: "50vh",
    other: `https://google.com/?igu=1`// "other" is the HTML, (if type is custom), text if the type is text, or the iframe url if iframe is selected.
  },
  {
    name: "Settings",
    type: "custom",
    icon: "",
    defaultWidth: "70vw",
    defaultHeight: "70vh",
    other: `<html><head><style>* {color:white;font-family:'Roboto',sans-serif}</style></head><body><h1>Settings</h1><p>Nothing's here yet!</p></body></html>` // "other" is the HTML, (if type is custom), text if the type is text, or the iframe url if iframe is selected.
  },
  {
    name: "Help",
    type: "text",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Question_mark_white_icon.svg/1024px-Question_mark_white_icon.svg.png",
    defaultWidth: "36vw",
    defaultHeight: "41vh",
    other: `
    ButterOS is just made to be like operating systems that you are used to, such as Windows 11, or macOS.<br>
    <br>
    <b>How to open an app:</b><br>
    - Method 1: Via the desktop there are app icons, click them to open them.<br>
    - Method 2: Via ButterHub, click the multiple butterdog images in the taskbar to open the ButterHub. This displays apps, files, and more.<br>
    - Method 3: Via the taskbar you will see app icons, click them to open them<br>
    <br>
    <b>How to resize a window:</b><br>
    - Method 1<br>
    1. At the bottom right of a window, there are 3 small black bars.<br>
    2. Click and hold those 3 bars to resize the window.<br>
    - Method 2<br>
    1. At the top right of a window, there is a button that says "R" (not on all apps).<br>
    2. Click the "R" button to make the window full screen.<br>
    <br>
    <b>Changelog:</b><br>
    - Updated help app to be more useful<br>
    - Added desktop icons<br>
    - Added full screen resize button to some types of windows<br>
    `
  },
  {
    name: "Welcome",
    type: "text",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Question_mark_white_icon.svg/1024px-Question_mark_white_icon.svg.png",
    defaultWidth: "25vw",
    defaultHeight: "11vh",
    other: `Welcome to ButterOS v0.1a. Please note that this is an unfinished prototype, and many bugs may occur.`
  },
  {
    name: "Minecraft",
    type: "iframe",
    icon: "img/icons/minecraft.png",
    defaultWidth: "100vw",
    defaultHeight: "94vh",
    other: `applications/minecraft-1.5.2.html`
  },
  {
    name: "App Store",
    type: "iframe",
    icon: "img/icons/appstore.png",
    defaultWidth: "100vw",
    defaultHeight: "94vh",
    other: `applications/OS/appstore.html`
  }
];