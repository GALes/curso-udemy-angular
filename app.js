"use strict";
(() => {
    // Uso de Let y Const
    const nombre = 'Ricardo Tapia';
    const edad = 23;
    const PERSONAJE = {
        nombre: nombre,
        edad: edad
    };
    // Cree una interfaz que sirva para validar el siguiente objeto
    const batman = {
        nombre: 'Bruno Díaz',
        artesMarciales: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu']
    };
    // Convertir esta funcion a una funcion de flecha
    const resultadoDoble = (a, b) => {
        return (a + b) * 2;
    };
    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = 'arco'
    const getAvenger = (nombre, poder, arma = 'arco') => {
        let mensaje;
        if (poder) {
            mensaje = `${nombre} tiene el poder de: ${poder} y un arma: ${arma}`;
        }
        else {
            mensaje = `${nombre} tiene un ${poder}`;
        }
    };
    // Cree una clase que permita manejar la siguiente estructura
    // La clase se debe de llamar rectangulo,
    // debe de tener dos propiedades:
    //   * base
    //   * altura
    // También un método que calcule el área  =  base * altura,
    // ese método debe de retornar un numero.
    class Rectangulo {
        constructor(base, altura) {
            this.base = base;
            this.altura = altura;
            this.area = () => this.base * this.altura;
            this.imprimirArea = () => console.log(this.area());
        }
    }
    const rectangulo = new Rectangulo(10, 20);
    rectangulo.imprimirArea();
})();
