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
    var info= `Ahahhdhdchdc`
    document.getElementById("cap").innerHTML = `CHAPTER 1: BEGIN`;
    document.getElementById("info").innerHTML = info;
}
if(cap=="Chapter 2: O-O-O"){
    var info= `NBDBDBDDDN`
    document.getElementById("cap").innerHTML = cap;
    document.getElementById("info").innerHTML = info;
}

}