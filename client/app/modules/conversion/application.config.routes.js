'use strict';
angular.module('rbt.conversion').config(/*@ngInject*/function ($controllerProvider, $compileProvider, $filterProvider, $provide, $httpProvider) {
  //интерсепторы http
  $httpProvider.interceptors.push('coreErrorHttpInterceptor');

});