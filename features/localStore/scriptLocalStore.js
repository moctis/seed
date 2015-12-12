/* global $eed */ 

$eed.store = (function() {
  var exec = function(txt) {
    var body = load(txt);
    $eed.scriptText(body);
  };
  
  var init = function() {    
    exec("main"); 
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
    save.onclick = function() { $eed.store.save(func.value, txt.value);}
    load.value = "load"
    load.type = "button";
    load.onclick = function() { txt.value = $eed.store.load(func.value);}
    exec.value = "exec"
    exec.type = "button";   
    exec.onclick = function() { $eed.store.exec(func.value);}
    document.body.appendChild(div);    
};
editor();

$eed.store.init();
