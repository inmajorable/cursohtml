// Función para sumar, restar, multiplicar dos números
function sumar(numero1, numero2) {
    return numero1 + numero2;
} 
function restar(numero1, numero2) {
    return numero1 - numero2;
}  
function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}
  
// Función para dividir dos números - comprobación no se divide entre 0
function dividir(numero1, numero2) {
    if (numero2 !== 0) {
      return numero1 / numero2;
    } else {
      return "No es posible dividir por cero";
    }
}
  
// Función principal para realizar operaciones
    // Obtener los valores de los campos de entrada
    //Parsefloat cambia el tipo de string a number
function calcular() {
    const num1 = parseFloat(document.getElementById("numero1").value);
    const num2 = parseFloat(document.getElementById("numero2").value);
  
// Obtener la operación seleccionada (suma, resta, multiplicación o división)
    const operacion = document.getElementById("operacion").value;
  
    let resultado;
  
    // Realizar la operación seleccionada
    if (operacion === "suma") {
      resultado = sumar(num1, num2);
    } else if (operacion === "resta") {
      resultado = restar(num1, num2);
    } else if (operacion === "multiplicacion") {
      resultado = multiplicar(num1, num2);
    } else if (operacion === "division") {
      resultado = dividir(num1, num2);
    }
  
    // Mostrar el resultado en el elemento con id "resultado"
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
  }
  
  // Asignar la función "calcular" al evento click del botón "Calcular"
  document.getElementById("calcularBtn").addEventListener("click", calcular);
  