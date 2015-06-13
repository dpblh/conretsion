'use strict';
angular.module('rbt.single-conversion').factory('singleConversion', function($http) {

  return {
    convert: convert
  };

  function convert(data) {
    return $http.post('/convert', data);
  }

});