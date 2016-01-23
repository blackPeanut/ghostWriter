(function () {
  this.GhostWriter = function () {
    debugger;
    
    this.method = null; //internal methods;
   
    var defaults = {
      str: "Hello, world!",
      speed: 100,
      fixedContainerSize: false,
      containerClass: "ghostWriter",
      color: null
    }

    if(arguments[0] && typeof arguments[0] === "object") {
      this.options = extendDefaults(defaults, arguments[0]);  
    }

    function extendDefaults(pluginDefaults, userOptions){
      var property;
      for (property in userOptions) {
        if(userOptions.hasOwnProperty(property)) {
          //проверка являются ли данные свойства собственными или унаследованны через прототип, если да, то презаписываю их в объект;
          pluginDefaults[property] = userOptions[property]; 
          //TODO поставить заглушку на проверку неправильно вписанных свойств throw new Error
        } 
      }
    }

  }
})();


var gw = new GhostWriter();
