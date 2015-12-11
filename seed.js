$eed.scriptText=function(txt,cb) {
    eval(txt); cb && cb();
    return this};  
    
$eed
  .append('Hello World<br/>') 
  .script('features/localStore/scriptLocalStore.js');
