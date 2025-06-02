//creamos una constante y agarramos el id 'number'
const num = document.getElementById("number");
const btn = document.getElementById("upload");
const form = document.getElementById("form");
const numeros = [];

// agrego al boton el evento click
btn.addEventListener("click", () => {
  const valor = Number(num.value);
  // si el valor es positivo entonces se ejecuta la siguiente condicional
  if (valor >= 0) {
    //si el array se pasa de 20 ya no se guardan mas
    if (numeros.length < 20) {
      numeros.push(valor);
      num.value = "";
      console.log(numeros);
    } else {
      alert("error al cargar los numero");
    }
  } else {
    alert("solo nuemeros positivos");
  }
});
