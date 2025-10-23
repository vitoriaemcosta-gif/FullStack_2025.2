let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

const CANVAS_WIDTH = 300; 
const CANVAS_HEIGHT = 300; 

let carrinho = {
    x: CANVAS_WIDTH / 2,   // Posição inicial no centro do canvas (150)
    y: CANVAS_HEIGHT / 2,  // Posição inicial no centro do canvas (150)
    raio: 50, // Raio = 50
    img: new Image(),
    pronta: false, 
    
    desenhe: function(){
        if (this.pronta) {
            // Desenha a imagem centralizada em (this.x, this.y)
            let x_canto = this.x - this.raio;
            let y_canto = this.y - this.raio;
            let largura_e_altura = 2 * this.raio;
            
            ctx.drawImage(this.img, x_canto, y_canto, largura_e_altura, largura_e_altura);
        }
    }
}

// -----------------------------------------------------
// FUNÇÃO DE CARREGAMENTO E INICIALIZAÇÃO
// -----------------------------------------------------
carrinho.img.onload = function() {
    carrinho.pronta = true;
    // Inicia a animação *somente* depois que a imagem estiver pronta
    requestAnimationFrame(animacao); 
};
carrinho.img.src = 'carrinho.png';


function animacao(){
    // Limpa o canvas para o novo frame
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    // Desenha o carrinho (só desenha se 'pronta' for true)
    carrinho.desenhe();
    
    // Chama o próximo frame, garantindo que o desenho continue
    requestAnimationFrame(animacao) 
}


// -----------------------------------------------------
// FUNÇÃO DE MOVIMENTO COM LIMITE DE BORDAS
// -----------------------------------------------------
document.addEventListener("mousemove", function(evento){
    let rect = canvas.getBoundingClientRect();
    
    // Posição bruta do mouse dentro do canvas
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;

    const R = carrinho.raio;
    
    // NOVOS LIMITES (300 - 50 = 250)
    const MAX_X = CANVAS_WIDTH - R; 
    const MAX_Y = CANVAS_HEIGHT - R; 
    const MIN = R;                   // 50
    
    // Limita o X entre 50 e 250
    carrinho.x = Math.max(MIN, Math.min(x_mouse, MAX_X));
    
    // Limita o Y entre 50 e 250
    carrinho.y = Math.max(MIN, Math.min(y_mouse, MAX_Y));
});