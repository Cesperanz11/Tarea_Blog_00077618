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
if(cap=="Chapter 3: Minus Monocromo"){
    var info= `El segundo dia ya se nos cumplió el deseo de conocer a Ada jarvis, la <br>
    cual con su "fineza" nos puso mas en sintonía con lo que ocurría con el código <br>
     de las bombas, y nos retó a dar un step-up para poder mejorar nuestros métodos de <br>
     comunicación encriptado. Por cierto, no creo que a ella le guste mucho Kurt. <br>
     Por ultimo Kurt nos guió con Renacho Melgar, el cual era el encargado del mural <br>
     que se realizaba abajo del Edificio D, y con su ayuda conseguiriamos el nuevo mensaje.`
    document.getElementById("cap").innerHTML = `CHAPTER 2: O-O-O`;
    document.getElementById("info").innerHTML = info;
}
if(cap=="Chapter 4: Cumulonimbus"){
    var info= `El segundo dia ya se nos cumplió el deseo de conocer a Ada jarvis, la <br>
    cual con su "fineza" nos puso mas en sintonía con lo que ocurría con el código <br>
     de las bombas, y nos retó a dar un step-up para poder mejorar nuestros métodos de <br>
     comunicación encriptado. Por cierto, no creo que a ella le guste mucho Kurt. <br>
     Por ultimo Kurt nos guió con Renacho Melgar, el cual era el encargado del mural <br>
     que se realizaba abajo del Edificio D, y con su ayuda conseguiriamos el nuevo mensaje.`
    document.getElementById("cap").innerHTML = `CHAPTER 2: O-O-O`;
    document.getElementById("info").innerHTML = info;
}
if(cap=="Chapter 5: Commit"){
    var info= `El segundo dia ya se nos cumplió el deseo de conocer a Ada jarvis, la <br>
    cual con su "fineza" nos puso mas en sintonía con lo que ocurría con el código <br>
     de las bombas, y nos retó a dar un step-up para poder mejorar nuestros métodos de <br>
     comunicación encriptado. Por cierto, no creo que a ella le guste mucho Kurt. <br>
     Por ultimo Kurt nos guió con Renacho Melgar, el cual era el encargado del mural <br>
     que se realizaba abajo del Edificio D, y con su ayuda conseguiriamos el nuevo mensaje.`
    document.getElementById("cap").innerHTML = `CHAPTER 2: O-O-O`;
    document.getElementById("info").innerHTML = info;
}

}