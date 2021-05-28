"use strict";
(function () {
    function saludar(nombre) {
        console.table('Hola ' + nombre); // Hola Logan
    }
    var wolverine = {
        nombre: 'LoganMan'
    };
    saludar(wolverine.nombre);
})();
