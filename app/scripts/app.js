'use strict';

/**
 * @ngdoc overview
 * @name acmWebsiteApp
 * @description
 * # acmWebsiteApp
 *
 * Main module of the application.
 */
angular
  .module('acmWebsiteApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        //controller: 'ProjectsCtrl',
        //controllerAs: 'projects'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/calendar', {
        templateUrl: 'views/calendar.html',
        //controller: 'CalendarCtrl',
        //controllerAs: 'calendar'
      })
      .when('/documents', {
        templateUrl: 'views/documents.html',
        //controller: 'DocumentsCtrl',
        //controllerAs: 'documents'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
