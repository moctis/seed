/* global $eed */

var scriptLocalStore = (function() {
  var run = function(txt) {
    $eed.scriptText(txt)
  };
  
  var init = function() {    
    save("test1", "$eed.append('func test1<br/>')");
    run(load("test1"));    
  };
  
  var save = function(key, txt) {
    localStorage.setItem(key, txt);
  }
  
  var load = function(key, txt) {
    return localStorage.getItem(key);
  }

  
  return {
    "init": init,
    save : save,
    load : load,
    run : run,
  };
})();

scriptLocalStore.init();