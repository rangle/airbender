/* global angular, console */

angular.module('myAirbenderApp', ['airbender'])
  .run(
    function (airbender) {
      'use strict';
      airbender.init({
        domain: 'http://definibus.local.airbender.io:9000',
        apiToken: 'qMaE5nakCRMYJ4kN5y8qJKQmtAn4qC9DkZvUEApuuQVvqPHF',
        siteTitle: 'De Finibis Bonorum et Malorum'
      });
    }
  );