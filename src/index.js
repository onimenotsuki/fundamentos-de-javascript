console.log(suma(11, 12));

// Notación de Javascript
// Funciones
function suma(a, b) {
  return a + b;
}

let sumaDos = function(a, b) {
  return a + b;
};

let sumaTres = (a, b) => {
  return a + b;
};

let sumaCuatro = (a, b) => a + b;

let sumaCinco = (a, b) => (
  a + b
);

console.log(sumaDos(12, 13));
console.log(sumaTres(12, 13));
console.log(sumaCuatro(12, 13));
console.log(sumaCinco(12, 13));
