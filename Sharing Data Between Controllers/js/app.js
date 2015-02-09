(function(){
 var app = angular.module("app", ["ui.router"]);

 // router
 app.config(function config($stateProvider) {
  $stateProvider.state("index", {
    url : "/",
    controller: "FirstCtrl as first",
    templateUrl: "templates/first.html"
  });

  $stateProvider.state("second", {
    url : "/second",
    controller: "SecondCtrl as second",
    templateUrl: "templates/second.html"
  });
 });

 // controllers

  app.controller("FirstCtrl", function FirstCtrl(greeting) {
    var first = this;
    first.greeting = greeting;
   });

  app.controller("SecondCtrl", function SecondCtrl($window, greeting) {
    var second = this;
    second.greeting = greeting;
    second.goBack = function() {
      $window.history.back();
    };
   });

  //service
  app.service("greeting", function Greeting(){
    var greeting = this;
    greeting.message = "Default";
  });
})();