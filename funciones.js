

const ReyesBoton=document.getElementById("ReyesMagos");//Accedemos al elemento cuyo id es Reyes Magos y es el boton que envia la informacion
    ReyesBoton.addEventListener("click",reyesMagos,false);//le añadimos un evento al boton el cual cuando se haga un klick en el se acceda a la funcion  reyesMagos 

const botonDia=document.getElementById("diaDeHoy");
    botonDia.addEventListener("click",diaDeHoy,false);

const botonRadio=document.getElementById("RadioCalculo");  
    botonRadio.addEventListener("click",calculoArea,false);

const botonValor=document.getElementById("botonEntreDos");
    botonValor.addEventListener("click",calcularAleatorio,false);

const botonMitadCar=document.getElementById("MitadCadena");
    botonMitadCar.addEventListener("click",mitadCar,false);

const botonUltimoCaracter=document.getElementById("ultimoCaracter");
    botonUltimoCaracter.addEventListener("click",ultimoCaracter,false); 
const botonCadenaReves=document.getElementById("cadenaInvertida");
    botonCadenaReves.addEventListener("click",cadenaInversa,false);
const botonCadenaGuiones=document.getElementById("cadenaGuiones");
    botonCadenaGuiones.addEventListener("click",caenaGuiones,false);
const botonContarVocales=document.getElementById("conterVocales");
    botonContarVocales.addEventListener("click",contarVocales,false);

function reyesMagos(){
      //var dia_formato=moment("2016-01-01").format('dddd');
 var fecha1 = moment('2016-07-12');
var fecha2 = moment('2016-08-01');

console.log(fecha2.diff(fecha1, 'hours'), ' horas de diferencia');
    
}

function diaDeHoy(){
    let Fecha=new Date();
    let dia =Fecha.getDay();
    let mes =Fecha.getMonth();
    let año=Fecha.getFullYear(); 
    let hora=Fecha.getHours();
    let minurtos=Fecha.getMinutes();
    let DiaToString;
    let MesToString;
    switch (dia) {
        case 0:
            DiaToString="domingo";
            break;
        case 1:
             DiaToString="lunes";
            break;
        case 2:
             DiaToString="martes";
            break; 
        case 3:
            DiaToString="miercoles";
            break;
        case 4:
            DiaToString="jueves";
            break;
        case 5:
            DiaToString="viernes";
             break;
        case 6:
            DiaToString="Sabado";
            break;        
    }
    switch (mes) {
        case 1:
            MesToString="enero";
            break;
        case 2:
            MesToString="febrero";
            break;
        case 3:
            MesToString="marzo";
            break; 
        case 4:
            MesToString="abril";
            break;
        case 5:
            MesToString="mayo";
            break;
        case 6:
            MesToString="junio";
             break;
        case 7:
            MesToString="julio";
            break;        
        case 8:
            MesToString="agosto";
            break;
        case 9:
            MesToString="septiembre";
            break;
        case 10:
            MesToString="octubre";
            break; 
        case 11:
            MesToString="noviembre";
            break;
        case 12:
            MesToString="diciembre";
            break;        
    }
    
    alert("Hoy es "+dia+" "+DiaToString+" de "+mes+" "+MesToString+" del "+año+" a las "+hora+":"+minurtos);
    
}

function calculoArea(){
    let radio=document.getElementById("Radio").value;
    let rCalculo=Math.pow(radio,2)*Math.PI;
    alert("Radio :"+rCalculo.toFixed(2)+"cm2");
}

function calcularAleatorio(){
    let minimo=document.getElementById("valor1").value;
    let maximo=document.getElementById("valor2").value;
    let aleatorio=Math.random()*(maximo - minimo)+minimo

}


function mitadCar(){
    let  cadena=new String(document.getElementById("palabra").value);

    for(let i=0;i<cadena.length/2;i++){
        document.write(cadena[i]);
    }
}


function ultimoCaracter(){
    let cadena=new String(document.getElementById("palabra").value);
    
    alert(cadena.charAt(cadena.length-1));
}

function cadenaInversa(){
    let cadena=new String(document.getElementById("palabra").value);

    for(let i=cadena.length-1;i>-1;i--){
        document.write(cadena[i]);
    }
}

function caenaGuiones(){
    let  cadena=new String(document.getElementById("palabra").value);

    for(let i=0;i<cadena.length-1;i++){
        document.write(cadena[i]+"-");
    }
    document.write(cadena[cadena.length-1]);
}

function contarVocales(){
    let  cadena=new String(document.getElementById("palabra").value);
    let vocales=0;
    for(let i=0;i<cadena.length;i++){
        switch(cadena[i]){
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                vocales++;
                break;
        }
    }
    alert("Esta palabra contienev "+vocales+" vocales");
}
