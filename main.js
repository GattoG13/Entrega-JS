// FETCH
function traerCabanas() {
  fetch('data.json')
    .then((res) => res.json())
    .then((json) => {
      let html = '';
      json.forEach((item) => {
        html += `<div> <p> Las cabañas disponibles con piscina son ${nombre[i]}, ubicada en ${direccion[i]} </p>
  </div> `;
      });
      document.getElementById('piscinasList').innerHTML = html;
    })
    .catch((e) => {
      console.log(e);
    });
}

// class Cabanas {
//   constructor(id, nombre, direccion) {
//     this.id = id;
//     this.nombre = nombre;
//     this.direccion = direccion;
//   }
// }

// // CABAnAS SENSEI -
// const sensei = new Cabanas(0, 'Sensei', 'FICT CMNO. AL PARADOR 0150 PAD 150');
// const serena = new Cabanas(1, 'Serena', 'CMNO CORONILLA 2311');
// const mandala = new Cabanas(2, 'Mandala', 'CMNO CORONILLA 2311');
// const mistica = new Cabanas(3, 'Mistica', 'CMNO BERNASCONI, ING. AGRIM. JUAN.');
// const mantra = new Cabanas(4, 'Mantra', 'CMNO ENVIRA PAD 2269');
// const dalai = new Cabanas(5, 'Dalai', 'CL ARUERA PAD 1300');

let dia;
let cantidadDeNoches;
let costoXnoche1;
let costoXnoche2;
let arrayJson;

// const arrayCabanas = [sensei, serena, mandala, mistica, mantra, dalai];

// const arrayCabanasNames = [sensei.nombre, serena.nombre, mandala.nombre, mistica.nombre, mantra.nombre, dalai.nombre];
localStorage.setItem(arrayCabanas, JSON.stringify(arrayCabanas));

function successAlert() {
  Swal.fire({
    position: 'middle',
    icon: 'success',
    title: 'Tu estadia ha sido guardada',
    showConfirmButton: false,
    timer: 1500,
  });
}

function failedAlert() {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Las fechas estan ocupadas!',
  });
}

boton = document.getElementById('submitbtn');
boton.addEventlitener('click', alojamientoElegido);

function alojamientoElegido() {
  dia = document.getElementById('dayType').value; // dia seleccionado por el usuario
  cantidadDeNoches = document.getElementById('dayQuantity').value; // cantidad de noches seleccionada por el usuario
  if (dia === 'viernes' || dia === 'sabado' || dia === 'domingo') {
    costoXnoche1 = 6000 * cantidadDeNoches;
    document.getElementById('inputResponse').innerHTML = 'el costo de alojamiento por ' + cantidadDeNoches + ' noche/s es de ' + costoXnoche1;
    successAlert();
  } else if (dia === 'lunes' || dia === 'martes' || dia === 'miercoles' || dia === 'jueves') {
    costoXnoche2 = 3000 * cantidadDeNoches; // costo por noche de la cabana seleccionada
    document.getElementById('inputResponse').innerHTML = 'el costo de alojamiento por ' + cantidadDeNoches + ' noche/s es de ' + costoXnoche2; // innerHTML para el costo de alojamiento por noches
    successAlert();
  } else {
    document.getElementById('inputResponse').innerHTML = 'Ingrese fechas validas';
    failedAlert();
  }
}
