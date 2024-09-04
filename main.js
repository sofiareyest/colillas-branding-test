//* Cazar todo lo que vamos a necesitar
const btnToggle = document.querySelector('.toggle');
const sidebar = document.querySelector('.sidebar');
const toggleIcon = document.querySelector('.toggle-icon');

const iconClose = document.querySelector('.icon-close');



//* Creamos la función que se encargará del click
function handleOpenSidebar () {
  sidebar.classList.add('open');  


  // estos serían para hacer la versión de que el toggle se queda por encima
  // sidebar.classList.toggle('open');  
  // toggleIcon.classList.toggle('bi-list');
  // toggleIcon.classList.toggle('bi-x');
}

function handleCloseSidebar () {
  sidebar.classList.remove('open');
}

//* Escuchamos el evento click del botón
btnToggle.addEventListener('click', handleOpenSidebar);

iconClose.addEventListener('click', handleCloseSidebar)