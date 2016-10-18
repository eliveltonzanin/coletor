angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('LoginService', function($q, $http, Api, $httpParamSerializerJQLike) {
    return {
        loginUser: function(login, senha) {
          var deferred = $q.defer();
          return $http({
              method: 'POST',
              url: Api.url + '/WS_LOGIN.apw?WSDL',
              // --- change content-type if needed (default = application/json)
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              data: $httpParamSerializerJQLike({cUsuario: login, cSenha: senha})
          });
          // return deferred.promise;
        }
    }
})
