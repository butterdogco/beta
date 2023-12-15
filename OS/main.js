//Make the DIV element draggagle:
dragElement(document.getElementById("window"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function closeWindow(id) {
  document.getElementById(id).remove();
}

function fullSizeWindow(id) {
  const win = document.getElementById(id);
  
  win.style.width = "100vw";
  win.style.height = "94vh";
  win.style.top = "50%";
  win.style.left = "50%";
}

function createTaskbarApp(app) {
  try {
    const taskbar = document.getElementById('taskbarItems');
    const b = document.createElement('button');
    
    b.style.backgroundImage = `url(${app.icon})`;
    b.innerHTML = app.name;
    b.id = "taskbarApp";
    b.addEventListener('click', function() {
      openApp(app.name);
    });
    
    taskbar.appendChild(b);
  }
  catch (err) {
    alert(err);
  }
}

function createTaskbarApps() {
  appDir.forEach(app => {
    createTaskbarApp(app);
  });
}

function openApp(name) {
  closeStartMenu();
  
  let found = false;
  appDir.forEach(app => {
    if (app.name === name) {
      found = true;
      createWindow(app.name,app.type,app.other);
    }
  });
  if (found === false) {
    createWindow('Notice','alert','Sorry, this application cannot be found.');
  }
}

function createWindow(name,type,other) {
  const num = Math.floor(Math.random() * 100);
  const w = document.createElement('div');
  const wH = document.createElement('div');
  const cB = document.createElement('div');
  const rB = document.createElement('div');
  const wID = "window" + num.toString();

  w.id = wID;
  w.className = "window";
  w.style.top = 0;
  w.style.left = 0;
  
  wH.id = wID + "header";
  wH.className = "windowheader";
  wH.innerHTML = name;
  
  cB.id = "closeWindow";
  cB.className = "closeWindow";
  cB.setAttribute('onclick', "closeWindow('" + wID.toString() + "')");
  cB.innerHTML = "X";
  
  rB.id = "resizeWindow";
  rB.innerHTML = "R";
  rB.className = "fullSize";
  rB.setAttribute('onclick', "fullSizeWindow('" + wID.toString() + "')");
  
  appDir.forEach(app => {
    if (app.name === name) {
      w.style.width = app.defaultWidth;
      w.style.height = app.defaultHeight;
    }
  });
  
  w.addEventListener('mousedown', function() {
    const maxZIndex = Math.max(...Array.from(document.querySelectorAll('.window')).map(wnd => parseInt(wnd.style.zIndex) || 0));
    w.style.zIndex = maxZIndex + 1;
  });
  
  w.style.zIndex++;

  if (type === "iframe") {
    try {
      const iF = document.createElement('iframe');
      
      iF.src = other;
      
      document.body.appendChild(w);
      w.appendChild(cB);
      w.appendChild(rB);
      w.appendChild(wH);
      w.appendChild(iF);
      
    }
    catch (err) {
      alert(err);
    }
    
    dragElement(document.getElementById(wID));
  }
  else {
    if (type === "text") {
      const p = document.createElement('p');

      p.innerHTML = other;
      
      document.body.appendChild(w);
      w.appendChild(cB);
      w.appendChild(wH);
      w.appendChild(p);
      
      dragElement(document.getElementById(wID));
    } else {
      if (type === "custom") {
        try {
          const iF = document.createElement('iframe');
          iF.setAttribute('srcdoc',other);
          
          document.body.appendChild(w);
          w.appendChild(cB);
          w.appendChild(rB);
          w.appendChild(wH);
          w.appendChild(iF);
          
          dragElement(document.getElementById(wID));
        }
        catch (err) {
          alert(err);
        }
      } else if(type === "alert") {
        const p = document.createElement('p');
        const b1 = document.createElement('button');
        const sound = document.getElementById('alertSound');
        
        b1.id = "acceptButton";
        b1.innerHTML = "OK";
        b1.setAttribute('onclick', "closeWindow('" + wID.toString() + "')");
        p.innerHTML = other;
        
        w.style.maxWidth = "10vw";
        
        document.body.appendChild(w);
        // w.appendChild(cB);
        w.appendChild(wH);
        w.appendChild(p);
        w.appendChild(b1);
        
        dragElement(document.getElementById(wID));
        
        sound.currentTime = 0;
        sound.play();
      }
    }
  }
  
  w.style.top = "50%";
  w.style.left = "50%";
  w.style.transform = "translate(-50%,-50%)";
}

const windowElements = document.querySelectorAll('.window');

windowElements.forEach(windowElement => {
  windowElement.addEventListener('click', function() {
    const parentContainer = windowElement.parentNode;
    parentContainer.appendChild(windowElement);
  });
});

function toggleStart() {
  const start = document.getElementById('startMenu');
  
  if (start.style.display === "block") {
    start.style.opacity = 0;
    start.style.bottom = 0;
    
    setTimeout(function(){
      start.style.display = "none";
    }, 500);
  } else {
    start.style.display = "block";
    start.style.opacity = 1;
    start.style.bottom = "8vh";
  }
}

function closeStartMenu() {
  const start = document.getElementById('startMenu');
  
  if (start.style.display === "block") {
    toggleStart();
  }
}

function desktopClick() {
  closeStartMenu();
}

createTaskbarApps();