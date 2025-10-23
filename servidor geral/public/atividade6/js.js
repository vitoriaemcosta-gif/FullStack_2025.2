var numero = Math.random()*100;
numero = Math.floor(numero);
console.log(numero);



function chute(){

    var num = document.getElementById("dn").value;

    if (num == numero){
        document.getElementById("acertou").innerHTML = "O número é igual !";
        document.getElementById("acertou").style.setProperty("background-color", "#a0ffa5ff");
        document.getElementById("acertou").style.setProperty("color", "#268633ff");
        document.getElementById("acertou").style.setProperty("font-size", "20px");
        document.getElementById("acertou").style.setProperty("justify-content", "space-around");
    }
        else{
        if (num < numero){
        document.getElementById("acertou").innerHTML = "Digite um número maior";
        document.getElementById("acertou").style.setProperty("background-color", "#3e6da7");
        document.getElementById("acertou").style.setProperty("color", "white");
        document.getElementById("acertou").style.setProperty("font-size", "20px");
        document.getElementById("acertou").style.setProperty("justify-content", "space-around");
        document.getElementById("menores").innerHTML += num + " , ";
        document.getElementById("menores").style.setProperty("background-color", "#3e6da7");
        document.getElementById("menores").style.setProperty("color", "white");
        document.getElementById("menores").style.setProperty("font-size", "20px");
        }
        else{
        document.getElementById("acertou").innerHTML = "Digite um número menor";
        document.getElementById("acertou").style.setProperty("background-color", "#3e6da7");
        document.getElementById("acertou").style.setProperty("color", "white");
        document.getElementById("maiores").innerHTML += num + " , ";
        document.getElementById("maiores").style.setProperty("background-color", "#3e6da7");
        document.getElementById("maiores").style.setProperty("color", "white");
        document.getElementById("maiores").style.setProperty("font-size", "20px");
        }
        }


}
