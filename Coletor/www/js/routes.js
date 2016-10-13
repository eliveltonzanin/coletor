angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('atualizaEs', {
    url: '/atualizacoes',
    templateUrl: 'templates/atualizaEs.html',
    controller: 'atualizaEsCtrl'
  })

  .state('adcIncomisa', {
    url: '/adcincomisa',
    templateUrl: 'templates/adcIncomisa.html',
    controller: 'adcIncomisaCtrl'
  })

  .state('baixaDeVolume', {
    url: '/baixavolume',
    templateUrl: 'templates/baixaDeVolume.html',
    controller: 'baixaDeVolumeCtrl'
  })

  .state('adicionarVolAConDeEmba', {
    url: '/adicionarvolemba',
    templateUrl: 'templates/adicionarVolAConDeEmba.html',
    controller: 'adicionarVolAConDeEmbaCtrl'
  })

  .state('boxParaVolume', {
    url: '/boxvolume',
    templateUrl: 'templates/boxParaVolume.html',
    controller: 'boxParaVolumeCtrl'
  })

  .state('consultaBox', {
    url: '/consultabox',
    templateUrl: 'templates/consultaBox.html',
    controller: 'consultaBoxCtrl'
  })

  .state('aOConfirmada', {
    url: '/acaoConfirmada',
    templateUrl: 'templates/aOConfirmada.html',
    controller: 'aOConfirmadaCtrl'
  })

$urlRouterProvider.otherwise('/login')



});
