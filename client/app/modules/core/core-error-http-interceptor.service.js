'use strict';
angular.module('rbt.core').factory('coreErrorHttpInterceptor', /*@ngInject*/function ($q, toaster) {
  return {
    responseError: function responseError(rejection) {
      toaster.pop('error', rejection.statusText);
      return $q.reject(rejection);
    }
  };
});