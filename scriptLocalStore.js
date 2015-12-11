var scriptLocalStore = function() {
  this.init = function() {
    console.log("init script local store");
  };
  
  return [
    init:init
  ];
};

scriptLocalStore.init();
