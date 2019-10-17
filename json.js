function capitulo(){
var capitulo = document.getElementById("capitulo");
var cap= capitulo.options[capitulo.selectedIndex].text;

if(cap=="Inicio"){
    var info= `Ya que estamos aqui, te advierto que estas siendo testigo de un <br>
    gran evento que se desarrolló en la universidad e involucró a <br>
    todos los estudiantes de BD y PW contra el malvado Ale Rav <br>
    junto con la ayuda de otros agentes secretos tratamos de darle <br>
    fin a este duro golpe de maldad.

    Este es el inicio de nuestra aventura... <br>
    Avanza al siguiente capitulo.`
    document.getElementById("cap").innerHTML = `INICIO`;
    document.getElementById("info").innerHTML = info;
}
if(cap=="Chapter 1: Begin"){
    var info= `El primer dia fue una sorpresa absoluta!! Yo no sabia si era una <br>
    mala broma o una amenaza seria. No tenia ni idea de lo que se nos venia encima. <br>
    Conocimos a nuestro primer y mayor aliado en la lucha contra Ale Rav, el cual <br>
    se hacia llamar Kurt Rot. Despues de ver el mensaje amenazador de Ale Rav, <br>
    recibimos el mensaje salvador de Kurt, el cual nos dio una pizca de esperanza. <br>
    Al final de la mision Kurt nos hablo de Ada, su amor platonico que se unio a la lucha. <br>
    Por ultimo nos dijo que fueramos al Polideportivo, sin saber que misterio nos esperaba.`
    document.getElementById("cap").innerHTML = `CHAPTER 1: BEGIN`;
    document.getElementById("info").innerHTML = info;
}
if(cap=="Chapter 2: O-O-O"){
    var info= `El segundo dia ya se nos cumplió el deseo de conocer a Ada jarvis, la <br>
    cual con su "fineza" nos puso mas en sintonía con lo que ocurría con el código <br>
     de las bombas, y nos retó a dar un step-up para poder mejorar nuestros métodos de <br>
     comunicación encriptado. Por cierto, no creo que a ella le guste mucho Kurt. <br>
     Por ultimo Kurt nos guió con Renacho Melgar, el cual era el encargado del mural <br>
     que se realizaba abajo del Edificio D, y con su ayuda conseguiriamos el nuevo mensaje.`
    document.getElementById("cap").innerHTML = `CHAPTER 2: O-O-O`;
    document.getElementById("info").innerHTML = info;
}
if(cap=="Chapter 3: Minus monocromo"){
    var info= `Kurt este día nos contó la historia de como él, Ada y Ale rav se conocian, <br>
    y sinceramente pobre sujeto, primero sufre el abandono de parte de Ale Rav y luego <br>
    debe lidiar con el dolor de acusar a su mentor y ejemplo a seguir, ya que si no es <br>
    él, nadie mas lo podrá detener. En otras noticias, Ada ya descifró el codigo de detonación!! <br>
    Ella se embarcó en un mega viaje para alejarse de Ale Rav, solo faltaba que Kurt se pusiera <br>
    manos a la obra.`
    document.getElementById("cap").innerHTML = `CHAPTER 3:  MINUS MONOCROMOR`;
    document.getElementById("info").innerHTML = info;
}
if(cap=="Chapter 4: Cumulonimbus"){
    var info= `Ale Rav ya sabe que lo están saboteando!!! Y ahora Kurt corre un <br>
    gran peligro, espero se logre esconder muy bien. Este dia se vió una muestra de <br>
    la fuerza de este movimiento, ya que un dron vino volando desde quien sabe donde, <br>
    hasta la plaza de las Terrazas, el cual traía un codigo encriptado para nosotros! <br>
    Hoy si, ya se sabe de nuestro movimiento, y Ale Rav caerá. <br>
    Al final del dia Kurt nos ha dicho que ya no logra ver a Ale Rav cera, será que lo vencimos al fin??`
    document.getElementById("cap").innerHTML = `CHAPTER 4: CUMULONIMBUS`;
    document.getElementById("info").innerHTML = info;
}
if(cap=="Chapter 5: Commit"){
    var info= `KURT HA MUERTO!!! Esto es algo que nadie se esperaba!! Maldito Ale Rav, te juro que este <br>
    no será el fin, ya pagarás todos tus malos encontra de la humanidad!! <br>
    Espero el sacrificio de Kurt no sea en vano y nos unamos todos a denunciar a Ale rav ahora <br>
    que ppor fin sabemos su identidad real. Únete a Ada y a mi, en esta gran lucha. 
    <br>
    <br>
    <br>
    EL FIN...?`
    document.getElementById("cap").innerHTML = `CHAPTER 5: COMMIT   `;
    document.getElementById("info").innerHTML = info;
}

}