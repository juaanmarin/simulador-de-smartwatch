function iniciar() {
    /*se obtener la hora */
    hoy = new Date();
    let hr = hoy.getHours();
    let min = hoy.getMinutes();
    let sec = hoy.getSeconds();

    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;

    /*se llama a la funcion num*/
    hr = num(hr);
    min = num(min);
    sec = num(sec);
    document.getElementById("HORA").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
    /*se obtener la fecha */
    let mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    let dia = ['Dom','Lun','Mar','Mie','Jue','Vie','Sab'];
    let diaActual = dia[hoy.getDay()];
    let mesActual = mes[hoy.getMonth()];
    let añoActual = hoy.getFullYear();
    let fechaHoy = hoy.getDate();
    let fecha =`${diaActual}, ${fechaHoy} ${mesActual} ${añoActual}`;
    document.getElementById("FECHA").innerHTML = fecha;  
}

/*esta funcion permite que si el numero i es menor a 10, se le contatena un cero a la izquierda de lo cotrario no se hace nada */
function num(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

/*funcion que inboca a iniciar cada 1000_mls que equivale a 1_sg */
setInterval(() =>{
    iniciar()
},1000);

