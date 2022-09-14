carritoPruebaSINjson = JSON.parse(localStorage.getItem('carritoPruebaSINjson')) || [];
// FETCH
let traerCabanas = () => {
  fetch('./data.json')
    .then((res) => res.json())
    .then((cabanas) => {
      let html = '';
      for (let i = 0; cabanas.lenght; i++) {
        html += `<p> Las cabañas disponibles con piscina son ${cabanas[i].nombre}, ubicada en ${cabanas[i].direccion} </p>`;
        document.getElementById('piscinasList').innerHTML = html;
      }
    })
    .catch((e) => {
      console.log(e);
    });
};
traerCabanas();

let dia;
let cantidadDeNoches;
let costoXnoche1 = 6000;
let costoXnoche2 = 3000;
let costoFinal;

function alojamientoElegido() {
  dia = document.getElementById('dayType').value; // dia seleccionado por el usuario
  cantidadDeNoches = document.getElementById('dayQuantity').value; // cantidad de noches seleccionada por el usuario
  if (dia === 'viernes' || dia === 'sabado' || dia === 'domingo') {
    costoFinal = costoXnoche1 * cantidadDeNoches;
    document.getElementById('inputResponse').innerHTML = 'el costo de alojamiento por ' + cantidadDeNoches + ' noche/s es de ' + costoFinal;
    Swal.fire({
      position: 'middle',
      icon: 'success',
      title: 'Tu estadia ha sido guardada',
      showConfirmButton: false,
      timer: 1500,
    });
  } else if (dia === 'lunes' || dia === 'martes' || dia === 'miercoles' || dia === 'jueves') {
    costoFinal = costoXnoche2 * cantidadDeNoches; // costo por noche de la cabana seleccionada
    document.getElementById('inputResponse').innerHTML = 'el costo de alojamiento por ' + cantidadDeNoches + ' noche/s es de ' + costoFinal; // innerHTML para el costo de alojamiento por noches
    Swal.fire({
      position: 'middle',
      icon: 'success',
      title: 'Tu estadia ha sido guardada',
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    document.getElementById('inputResponse').innerHTML = 'Ingrese fechas validas';
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Las fechas estan ocupadas!',
    });
  }
}
