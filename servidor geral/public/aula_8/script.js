let idades = [18,20];
console.log(idades);
idades.push(25);
console.log(idades);
let idade = idades.pop();
console.log(idade);
console.log(idades);
delete idades [0];
console.log(idades);



let carrro_1 = {
    posicao: 0,
    cor: "red",
    modelo: "Corola",
    buzina : function(){
        console.log("Biiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
    },

    andar: function(qtde){
        this.posicao += qtde
    }
};

carrro_1.buzina();
console.log(carrro_1.posicao);
carrro_1.andar(3);
console.log(carrro_1.posicao);

let carrro_2 = {
    posicao: 0,
    cor: "blue",
    modelo: "Fusca",
    buzina : function(){
        console.log("Bii bi");
    },

    andar: function(qtde){
        this.posicao += qtde
    }
};

carrro_2.buzina();
console.log(carrro_2.posicao);
carrro_2.andar(3);
console.log(carrro_2.posicao);

let carros = [carrro_1, carrro_2];
for(let i=0; i< carros.length; i++){
    let carro = carros [i];
    console.log(carro.modelo);
    carro.buzina();
}



let retangulo = {
    lw: 2,
    cor_preenchimento: "blue",
    cor_linha: "red",
    x: 10,
    y: 10,
    largura: 50,
    altura: 50,
    desenhe: function(){

        ctx.beginPath();
        ctx.lineWidth = this.lw;
        ctx.fillStyle = this.cor_preenchimento;
        ctx.strokeStyle = this.cor_linha;
        ctx.fillRect(this.x,this.y,this.largura,this.altura);
        ctx.strokeRect(this.x,this.y,this.largura,this.altura);
        ctx.closePath();
    }
}


let retangulo_2 = {
    lw: 2,
    cor_preenchimento: "blue",
    cor_linha: "red",
    x: 100,
    y: 100,
    largura: 100,
    altura: 100,
    desenhe: function(){
        
        ctx.beginPath();
        ctx.lineWidth = this.lw;
        ctx.fillStyle = this.cor_preenchimento;
        ctx.strokeStyle = this.cor_linha;
        ctx.fillRect(this.x,this.y,this.largura,this.altura);
        ctx.strokeRect(this.x,this.y,this.largura,this.altura);
        ctx.closePath();
    }
}

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

retangulo_2.desenhe();

// retangulo.x = 100;
// retangulo.y = 100;
// retangulo.largura = 200;
// retangulo.altura = 150;
// retangulo.cor_preenchimento = "green";
// retangulo.cor_linha = "black";
// retangulo.desenhe();

let bola = {
    x: 0,
    y: 100,
    raio: 50,
    img: new Image(),
    desenhe: function(){
        this.img.src = 'ball.png';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}


let aux = 1;

function animacao(){
    ctx.clearRect(0,0,400,400);
   
    if(retangulo.x == 350){
        aux = -1;
    }

    else if(retangulo.x == 0){
        aux = 1;
    }

    retangulo.x += aux;
    retangulo.desenhe();
    retangulo_2.desenhe();
    bola.desenhe();

    requestAnimationFrame(animacao)
}
animacao();


document.addEventListener("keydown", function(evento){
    let tecla = evento.key;
    console.log(tecla);


    let vel = 5;
    if (tecla == "ArrowUp"){
        retangulo.y -= vel;
    }
    if (tecla == "ArrowDown"){
        retangulo.y += vel;
    }
    if (tecla == "ArrowLeft"){
        retangulo.x -= vel;
    }
    if (tecla == "ArrowRight"){
        retangulo.x += vel;
    }

})


    document.addEventListener("mousemove", function(evento){
    let rect = canvas.getBoundingClientRect();
    x_mouse = evento.clientX - rect.left;
    y_mouse = evento.clientY - rect.top;

    console.log(x_mouse, y_mouse);

    retangulo_2.x = x_mouse;
    retangulo_2.y = y_mouse;
    bola.x = x_mouse;
    bola.y = y_mouse;
})


