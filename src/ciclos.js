let arreglo = [1, 2, 3, 4, 5, 6];

console.log(arreglo.map((element, index) => {
  return element * 10;
}));

console.log(arreglo.filter(element => {
  return element < 3;
}));

console.log(arreglo);

console.log("IN");

for (let index in arreglo) {
  console.log(index);
}

console.log("OF")
for (let element of arreglo) {
  console.log(element);
}
