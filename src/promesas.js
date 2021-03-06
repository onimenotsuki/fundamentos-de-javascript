let promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      nombre: 'Edgar',
      apellido: 'Talledos',
    });
  }, 500);
});

promesa.then(response => {
  console.log(response);
})
  .catch(error => {
    console.log(error);
  });


async function promesaAsincrona() {
  const respuesta = await promesa;
  console.log(respuesta);
}

promesaAsincrona();
