carritoPruebaSINjson = JSON.parse(localStorage.getItem('carritoPruebaSINjson')) || [];
// FETCH;
let traerCabanas = () => {
  fetch('./data.json')
    .then((res) => res.json())
    .then((mostrarDias) => {
      let html = '';
      for (let i = 0; i < mostrarDias.length; i++) {
        html += `
        <p>${mostrarDias[i].nombre}</p>
      `;
      }
      document.getElementById('piscinasList').innerHTML = html;
      console.log(mostrarDias[0].nombre);
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

function emailJS() {
  const btn = document.getElementById('submitbtn');

  document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_gkagy8i';

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.value = 'Enviar';
      },
      (err) => {
        btn.value = 'Error 404! Ingrese';
      }
    );
  });
}

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
      timer: 2000,
    });
    emailJS();
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
    emailJS();
  } else {
    document.getElementById('inputResponse').innerHTML = 'Ingrese fechas validas';
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Las fechas estan ocupadas!',
    });
  }
}

// EMAILJS
