/*
CACHE MANIFEST (example)

NETWORK:
my_dynamic_script.cgi

FALLBACK:
my_offline_message.html

CACHE:
style.css
offlinescript.js
images/dreamweaver_logo.png
images/edge_logo.png
*/


function checkLocalStorageSupport() {
  try {
      return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
      return false;
  }
}

function onClick() {
     if(checkLocalStorageSupport)
     {
          window.localStorage.setItem("name",document.getElementById("name").value);
     }
}

function onLoad() {
     if(checkLocalStorageSupport)
     {
          var name = window.localStorage.getItem("name");
          if(name != null)
          {
               window.document.getElementById("divName").innerHTML = "Welcome back " + name;
          }

     }
}

function onReset() {
     if(checkLocalStorageSupport())
     {
          window.localStorage.clear();
     }
}

window.addEventListener("storage",onStorageChange);

function onStorageChange(e) {
     if(e.key == "name")
     {
          alert(e.newValue + ' just added their name to local storage');
     }
}

function onProgress(e) {
     var content = window.document.getElementById("loadedInfo").innerHTML;
     window.document.getElementById("loadedInfo").innerHTML = content + '<br /> Loaded file ' + e.loaded + ' of ' + e.total;
}

window.applicationCache.addEventListener("error",onError);

function onError(e) {
     window.document.getElementById("loadedInfo").innerHTML = "Something went wrong while saving the files for offline use.";
}
