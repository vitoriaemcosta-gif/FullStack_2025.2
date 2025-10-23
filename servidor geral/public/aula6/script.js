// let titulo = document.getElementById("titulo").innerHTML;
// console.log(titulo);

// document.getElementById("titulo").innerHTML = "Vitoria";


// var nome=prompt("Digite seu nome: ");
// var idade=prompt("Digite sua idade: ");
// var anoatual=prompt("Digite o ano atual: ");
// var anonasc=anoatual-idade;

// document.getElementById("resultado").innerHTML = "Seja bem vinda " + nome + ", você nasceu em " + anonasc + " e está no ano de " + anoatual;

function exibirMensagem(texto) {
    console.log(texto);
}

exibirMensagem("texto1");
exibirMensagem("texto2");
exibirMensagem("texto3");

function soma(a, b) {
    let c = a + b;
    return c;
    // console.log("a soma de " +a+ " + " +b+ " é igual a " +c); 
}


function subt(a, b) {
    let c = a - b;
    return c;
}


console.log("a soma de " +3+ " - " +8+ " é igual a " + subt(3, 8)); 


function imprimeTexto(){
    let texto = document.getElementById("input1").value;
    console.log(texto);
}

function imprimeIncrementos(){
    let x = parseInt(document.getElementById("in_e2").value)
    
        document.getElementById("resposta_e2").innerHTML = "";
    for (let i=1; i < x; i++){
        console.log(i);
        document.getElementById("resposta_e2").innerHTML += i + ",";
    }


}


function somar(){
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);

    let c = soma(a,b);
    document.getElementById("resultados").innerHTML = c;
}

// soma(2, 3);
// soma(5, 8);