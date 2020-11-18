var app = angular.module('app', []);
app.controller('mananciaisCtrl', function ($scope, $http) {
    var vm = this;
    vm.cantareira = [];
    vm.guarapiranga = [];
    vm.rioClaro = [];
    vm.altoTiete = [];
    vm.cotia = [];
    vm.saoLourenco = [];
    vm.rioGrande = [];

    $http.get('https://sabesp-api.herokuapp.com/')
        .then(function (response) {
            vm.cantareira = response.data[0];
            vm.guarapiranga = response.data[1];
            vm.rioClaro = response.data[2];
            vm.altoTiete = response.data[3];
            vm.cotia = response.data[4];
            vm.saoLourenco = response.data[5];
            vm.rioGrande = response.data[6];
        });
});
