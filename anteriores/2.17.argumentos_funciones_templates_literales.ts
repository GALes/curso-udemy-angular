(function () {

    function activar (
        quien   : string,
        momento?: string,
        objeto  : string = 'la batiseñal'
    ){
        let mensaje = `${quien} activo ${objeto}${momento ? ` en ${momento}` : ''}.`;
        console.log(mensaje);
    }

    activar('Gordon', 'la noche');



})();


