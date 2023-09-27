let historialOperaciones = [];

function obtenerNumero(mensaje) {
    return parseFloat(prompt(mensaje));
}

function mostrarHistorial() {
    let historialList = document.getElementById("historial");
    historialList.innerHTML = "";

    historialOperaciones.forEach(operacion => {
        let li = document.createElement("li");
        li.textContent = operacion;
        historialList.appendChild(li);
    });
}

function realizarOperacion(operador, simbolo) {
    let num1 = obtenerNumero("Ingrese el primer número:");
    if (isNaN(num1)) {
        alert("La entrada no es un número válido.");
        return;
    }

    let num2 = obtenerNumero("Ingrese el segundo número:");
    if (isNaN(num2)) {
        alert("La entrada no es un número válido.");
        return;
    }

    let resultado = operador(num1, num2);
    historialOperaciones.push(`${num1} ${simbolo} ${num2} = ${resultado}`);
    mostrarHistorial();
}

function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    if (num2 === 0) {
        alert("No se puede dividir por cero.");
        return NaN;
    }
    return num1 / num2;
}

document.getElementById("suma").addEventListener("click", () => realizarOperacion(sumar, '+'));
document.getElementById("resta").addEventListener("click", () => realizarOperacion(restar, '-'));
document.getElementById("multiplicacion").addEventListener("click", () => realizarOperacion(multiplicar, 'x'));
document.getElementById("division").addEventListener("click", () => realizarOperacion(dividir, '/'));

let Calculadora = {
    historialOperaciones: [],
    memoria: 0,
    ultimaOperacion: null,
    ultimaOperacionSimbolo: null,
  
    obtenerNumero: function (mensaje) {
      const numero = parseFloat(prompt(mensaje));
      console.log(`Número ingresado: ${numero}`);
      return numero;
    },
  
    sumar: function (num1, num2) {
      const resultado = num1 + num2;
      this.registrarOperacion(num1, num2, '+', resultado);
      console.log(`Suma: ${num1} + ${num2} = ${resultado}`);
      return resultado;
    },
  
    restar: function (num1, num2) {
      const resultado = num1 - num2;
      this.registrarOperacion(num1, num2, '-', resultado);
      console.log(`Resta: ${num1} - ${num2} = ${resultado}`);
      return resultado;
    },
  
    multiplicar: function (num1, num2) {
      const resultado = num1 * num2;
      this.registrarOperacion(num1, num2, 'x', resultado);
      console.log(`Multiplicación: ${num1} x ${num2} = ${resultado}`);
      return resultado;
    },
  
    dividir: function (num1, num2) {
      if (num2 === 0) {
        console.log("Intento de división por cero");
        return NaN;
      }
      const resultado = num1 / num2;
      this.registrarOperacion(num1, num2, '/', resultado);
      console.log(`División: ${num1} / ${num2} = ${resultado}`);
      return resultado;
    },
  
    registrarOperacion: function (num1, num2, operador, resultado) {
      const operacion = `${num1} ${operador} ${num2} = ${resultado}`;
      this.historialOperaciones.push(operacion);
      console.log(`Operación registrada: ${operacion}`);
    },
  
    mostrarHistorial: function () {
      this.historialOperaciones.forEach(operacion => {
        console.log(operacion);
      });
    },
  
    limpiarHistorial: function () {
      this.historialOperaciones = [];
      console.log("Historial limpiado");
    }
  };

document.getElementById("limpiarHistorial").addEventListener("click", () => {
    Calculadora.limpiarHistorial();
  });
  
document.getElementById("limpiarHistorial").addEventListener("click", () => {
    Calculadora.limpiarHistorial();
    
    const historialHTML = document.getElementById("historial");
    historialHTML.innerHTML = "";
  });
  
  