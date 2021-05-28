(function () {

    const auto = {
        marca   : 'citroen',
        modelo  : '3cv',
    }

    const { marca, modelo } = auto;

    console.log(marca);
    console.log(modelo);

    const mostrarAuto = ({marca, modelo}: any) => {
        console.log(marca);
        console.log(modelo);
    };
    mostrarAuto(auto);

    const marcas: string[] = ['citroen', 'renault', 'ford'];
    const mostrarMarcas = ([citroen, renault, ford]: string[]) => {
        console.log(citroen);
        console.log(renault);
        console.log(ford);
    };
    mostrarMarcas(marcas);

})();


