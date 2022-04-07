const $tiempo=document.querySelector(".tiempo"),
$fecha = document.querySelector(".fecha");

function digitalclock(){
    let hora =new Date(),

    dia= hora.getDate(),
    mes = hora.getMonth(),
    anio = hora.getSeconds(),
    diasemana = hora.getDay();

    let timeString=hora.toLocaleTimeString();
    $tiempo.innerHTML=timeString;

    $fecha.innerHTML="2021-11-12"
   
}
setInterval(() =>{
    digitalclock()
},1000);



    
    
