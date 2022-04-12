let centesimas = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;

const iniciar=document.getElementById("inicio");
const parar=document.getElementById("parar");
const continuar=document.getElementById("continuar");
const reiniciar=document.getElementById("reinicio");

iniciar.addEventListener("click",() =>{
	control = setInterval(cronometro,10);
	iniciar.style.display="none";
	parar.style.display="";
	reiniciar.style.display="";
	parar.style.backgroundColor="blue";
})

parar.addEventListener("click", () =>{
	clearInterval(control);
	parar.style.display="none";
	continuar.style.display="";
})

continuar.addEventListener("click", () =>{
	control = setInterval(cronometro,10);
	parar.style.display="";
	continuar.style.display="none";
})

reiniciar.addEventListener("click", () =>{
	clearInterval(control);
	centesimas = 0;
	segundos = 0;
	minutos = 0;
	horas = 0;
	Centesimas.innerHTML = ":00";
	Segundos.innerHTML = ":00";
	Minutos.innerHTML = ":00";
	Horas.innerHTML = "00";
	iniciar.style.display="";
	parar.style.display="none";
	continuar.style.display="none";
	reiniciar.style.display="none";
})

	
function cronometro () {
	if (centesimas < 99) {
		centesimas++;
		if (centesimas < 10){ 
			centesimas = "0"+centesimas 
		}
		Centesimas.innerHTML = ":"+centesimas;
	}
	if (centesimas == 99) {
		centesimas = -1;
	}
	if (centesimas == 0) {
		segundos ++;
		if (segundos < 10) { 
			segundos = "0"+segundos 
		}
		Segundos.innerHTML = ":"+segundos;
	}
	if (segundos == 59) {
		segundos = -1;
	}
	if ((centesimas == 0)&&(segundos == 0)){
		minutos++;
		if (minutos < 10){
			minutos = "0"+minutos
		}
		Minutos.innerHTML = ":"+minutos;
	}
	if (minutos == 59) {
		minutos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
		horas ++;
		if (horas < 10){
			horas = "0"+horas
	}
		Horas.innerHTML = horas;
	}
}