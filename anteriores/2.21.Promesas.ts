(function () {

    const retirarDinero = (montoRetirar: number): Promise<number> => {
        let montoActual = 1000;

        return new Promise( (resolve, reject) => {
            if (montoRetirar > montoActual) {
                reject('No hay suficientes fondos');
            }
            else {
                montoActual -= montoRetirar;
                resolve(montoActual);
            }
        })
    }

    retirarDinero(500)
        .then(montoActual => console.log(`me queda ${montoActual}`))
        .catch(console.warn)

})();


