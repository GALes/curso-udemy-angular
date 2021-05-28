(function () {

    const suma = (a: number, b:number) => console.log(`La suma de a + b es ${a + b}`);

    const hulk = {
        nombre: 'Hulk',
        smash() {
            setTimeout(() => {
                console.log(`${this.nombre} smash!!!`);
            }, 1000);
        }
    }

    suma(2, 3);
    hulk.smash();

})();


