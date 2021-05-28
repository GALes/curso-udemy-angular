"use strict";
(function () {
    var auto = {
        marca: 'citroen',
        modelo: '3cv',
    };
    var marca = auto.marca, modelo = auto.modelo;
    console.log(marca);
    console.log(modelo);
    var mostrarAuto = function (_a) {
        var marca = _a.marca, modelo = _a.modelo;
        console.log(marca);
        console.log(modelo);
    };
    mostrarAuto(auto);
    var marcas = ['citroen', 'renault', 'ford'];
    var mostrarMarcas = function (_a) {
        var citroen = _a[0], renault = _a[1], ford = _a[2];
        console.log(citroen);
        console.log(renault);
        console.log(ford);
    };
    mostrarMarcas(marcas);
})();
