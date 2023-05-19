const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu ul');

menuToggle.addEventListener('click', function() {
  menu.classList.toggle('show');
});

const PlANSEPARE = document.querySelector('#Plan-Separe');
const imgdescarga = document.querySelector('#img-descarga');

mediosdepago.addEventListener('click', function(){
    img-descarga.classList.toggle('show')
})

const COMPRAR = document.querySelector('#comprar-ya');
const imgcomprar = document.querySelector('#img-comprar');

comprar.addEventListener('click', function(){
    img-comprar.classList.toggle('show')
})

const MEDIOSDEPAGO = document.querySelector('#img-medios-de-pago');
const imgmediosdepago = document.querySelector('#img-medios-de-pago');

comprar.addEventListener('click', function(){
    img-medios-de-pagos.classList.toggle('show')
})