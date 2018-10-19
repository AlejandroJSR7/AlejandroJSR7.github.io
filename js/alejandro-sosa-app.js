angular.module('alejandroSosaApp', ["ngRoute"])
  .config(['$routeProvider', '$locationProvider', configApp])
  .controller('projectsListCtrl', projectsListCtrl);

  function configApp($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
    $routeProvider.when('/', {
      templateUrl: "index.html",
      controller: "projectsListCtrl",
      controllerAs : "projectsListVM"
    })
    .otherwise({
      redirectTo: '/'
    });
  }

  projectsListCtrl.$inject = ['$http'];
  function projectsListCtrl($http) {
    var projectsListVM = this;
    projectsListVM.title = "Hola MUndo";
    console.log('projectsListVM.title');
    projectsListVM.projects = [];
    $http({method: 'GET', url: 'data/projects.json'}).then(function(data) {
      projectsListVM.projects = data.data.projects;
    });
  }