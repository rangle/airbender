/* global angular, console */

angular.module('myAirbenderApp', ['airbender'])
  .run(
    function (airbender) {
      'use strict';
      airbender.init({
        domain: 'http://localhost:8080',
        siteTitle: 'De Finibis Bonorum et Malorum'
      });
    }
  );