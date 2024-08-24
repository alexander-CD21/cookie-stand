'use strict';

const seattle={
    location: 'seattle',
    minConsumidoresPorHora:23,
    maxConsumidoresPorHora:65,
    promedioGalletaPorPersona:6.3,
    promedioGalletaPorHora:[],
    estimar:function(){
        this.promedioGalletaPorHora=estimarVentas(this);
    }
};

const horasDeAtencion=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
const tiendas=[seattle];

function random(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
function estimarVentas(tienda){
    const sales=[];
    for(let i=0;i<horasDeAtencion.length;i++){
        const numeroDeConsumidores= random(tienda.minConsumidoresPorHora,tienda.maxConsumidoresPorHora);
        const ventasPorHora=Math.ceil(numeroDeConsumidores*tienda.promedioGalletaPorPersona);
        sales.push(ventasPorHora);
        console.log(numeroDeConsumidores);
        console.log(sales);
    }
    return sales;

}

function mostrarVentas(tienda){
    let totalDeVentas=0;
    const root=document.getElementById('root');

    //crear un elemento seccion con un class llamado 'location'
    const location=document.createElement('section');
    location.classList.add('location');
    root.appendChild(location);

    const title=document.createElement('h2');
    title.textContent= tienda.location;
    location.appendChild(title);

    const lista=document.createElement('ul');
    location.appendChild(lista);

    for(let i=0;i<horasDeAtencion.length;i++){
        const listItem=document.createElement('li');
        listItem.textContent=horasDeAtencion[i]+':'+tienda.promedioGalletaPorHora[i]+'galletas';
        lista.appendChild(listItem);
    }
    const totalItem=document.createElement('li');
    totalItem.textContent='Total:' + 'galletas';
    lista.appendChild(totalItem);
}
seattle.estimar();
console.log(seattle);
mostrarVentas(seattle);

