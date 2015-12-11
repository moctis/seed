/* global $eed */ 
var scriptLocalStore = (function() {
  var exec = function(txt) {
    var body = load(txt);
    $eed.scriptText("$eed." + txt + "=function(){"+body+"};");
  };
  
  var init = function() {    
    exec("init");
    $eed.init();
  };
  
  var save = function(key, txt) {
    localStorage.setItem(key, txt);
  }
  
  var load = function(key) {
    return localStorage.getItem(key);
  }
    
  return {
    "init": init,
    "save" : save,
    "load" : load,
    "exec" : exec,
  };
})();



var editor = function() {
  var div = document.createElement("div"),
    txt = document.createElement("textarea"),
    func = document.createElement("input"),
    save = document.createElement("input"),
    load = document.createElement("input"),
    exec = document.createElement("input");
    
    div.appendChild(func);
    div.appendChild(save);
    div.appendChild(load);
    div.appendChild(exec);
    div.insertAdjacentHTML("beforeend", "<br/>");
    div.appendChild(txt);
    
    div.id = "editor";
    func.id = "editName";
    txt.id = "editTxt";
    txt.cols = 40; 
    txt.rows = 10;
    save.value = "save"
    save.type = "button";
    save.onclick = function() { scriptLocalStore.save(func.value, txt.value);}
    load.value = "load"
    load.type = "button";
    load.onclick = function() { txt.value = scriptLocalStore.load(func.value);}
    exec.value = "exec"
    exec.type = "button";   
    exec.onclick = function() { scriptLocalStore.exec(func.value);}
    document.body.appendChild(div);    
};
editor();

scriptLocalStore.init();