$eed.scriptText=function(txt,cb) {
    eval(txt); cb && cb();
    return this};  
    
$eed
  .append('Hello World 1234<br/>') 
  .script('features/localStore/scriptLocalStore.js');
