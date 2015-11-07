/* Script for < _.slugify(appname) %> */
$(document).ready(function(){
  var App = {
    config: null,
    Models: {},
    Controllers: {},
    Views: {},
    init: function(){
      console.log('<%= _.capitalize(siteTitle) %> is ready to rock and roll!');
      return this;
    }
  };

  window.App = App.init();
});