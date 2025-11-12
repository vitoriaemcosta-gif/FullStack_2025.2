    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    let canvas2 = document.getElementById("canvas2");
    let ctx2 = canvas2.getContext("2d");

    function quadrado (contexto, lw, corfundo, corborda, xf, yf, af, lf, xb, yb, ab, lb) {
    contexto.beginPath();
    contexto.lineWidth = lw;
    contexto.fillStyle = corfundo;
    contexto.strokeStyle = corborda;
    contexto.fillRect(xf, yf, af, lf);
    contexto.strokeRect(xb, yb, ab, lb);
    contexto.closePath();

    }

    quadrado(ctx, 2, 'white', 'black', 0, 0, 50, 50, 0, 0, 300, 300);
    
    quadrado(ctx, 2, 'blue', '', 1, 1, 50, 50, 0, 0, 0, 0);

    quadrado(ctx, 2, 'red', '', 249, 1, 50, 50, 0, 0, 0, 0);

    quadrado(ctx, 2, '#00FFFF', '', 1, 125, 25, 50, 0, 0, 0, 0);

    quadrado(ctx, 2, '#00FFFF', '', 274, 137, 25, 25, 0, 0, 0, 0);

    quadrado(ctx, 2, 'red', '', 110, 150, 40, 40, 0, 0, 0, 0);

    quadrado(ctx, 2, 'yellow', '', 1, 249, 25, 50, 0, 0, 0, 0);

    quadrado(ctx, 2, 'yellow', '', 2, 274, 50, 25, 0, 0, 0, 0);

    quadrado(ctx, 2, 'black', '', 275, 249, 25, 50, 0, 0, 0, 0);

    quadrado(ctx, 2, 'black', '', 250, 274, 50, 25, 0, 0, 0, 0);


    //Canvas2
    //chao
    quadrado(ctx2, 2, 'grey', '', 0, 300, 400, 100, 0, 0, 0, 0 );
    //casa
    quadrado(ctx2, 2, '#8d4925', '', 150, 200, 100, 100, 0, 0, 0, 0);
    //janelas
    quadrado(ctx2, 2, '#25baffff', '', 159, 220, 28, 28, 0, 0, 0, 0);
    quadrado(ctx2, 2, '#25baffff', '', 213, 220, 28, 28, 0, 0, 0, 0);
    //porta
    quadrado(ctx2, 2, '#5b2d0dff	', '', 188, 250, 24, 50, 0, 0, 0, 0);
    //troco da arvore
    quadrado(ctx2, 2, '#8d4925	', '', 50, 250, 20, 50, 0, 0, 0, 0);
    quadrado(ctx2, 2, '#8d4925	', '', 340, 310, 20,50, 0, 0, 0, 0);
    //lateral
    quadrado(ctx2, 2, '#1382f0ff', '', 0, 300, 50, 100, 0, 0, 0, 0);
    quadrado(ctx2, 2, '#1382f0ff', '', 2, 350, 160, 50, 0, 0, 0, 0);
    // quadrado(ctx2, 2, 'black', '', 275, 249, 25, 50, 0, 0, 0, 0);

    // quadrado(ctx2, 2, 'black', '', 250, 274, 50, 25, 0, 0, 0, 0);


    function arco (contexto, lw, corborda, corfundo, x, y, tam, com, fim) {
    contexto.beginPath();
    contexto.lineWidth = lw;
    contexto.fillStyle = corfundo;
    contexto.strokeStyle = corborda;
    contexto.arc(x,y,tam, com*Math.PI,fim*Math.PI);
    contexto.fill();
    contexto.stroke();
    contexto.closePath();
    }

    arco(ctx, 1, 'green', 'white', 150, 150, 90, 1, 1.25);
    arco(ctx, 1, 'green', 'white', 150, 150, 90, 1.75, 2);
    arco(ctx, 1, 'green', 'white', 150, 150, 70, 1, 2);
    arco(ctx, 1, 'blue', '#00FFFF', 150, 110, 15, 0, 2);
    arco(ctx, 1, 'green', 'yellow', 75, 225, 15, 0, 2);
    arco(ctx, 1, 'green', 'yellow', 225, 225, 15, 0, 2);
    arco(ctx, 1, 'green', 'white', 150, 300, 80, 1, 1.5);
    arco(ctx, 1, 'green', 'white', 150, 300, 60, 1.5, 2);

    
    //canvas2
    arco(ctx2, 1, '#1382f0ff', '#1382f0ff', 0, 300, 50, 1, 2);
    arco(ctx2, 1, '', '#1382f0ff', 160, 400, 49, 1, 2);
    //sol
    arco(ctx2, 1, 'yellow', 'yellow', 300, 100, 50, 0, 2);
    //arvores
    arco(ctx2, 1, '#006d0dff', '#006d0dff', 350, 282, 30, 0, 2);
    arco(ctx2, 1, '#006d0dff', '#006d0dff', 61, 222, 30, 0, 2);



    function linha (contexto, lw, corlinha, x1, y1, x2, y2) {
    contexto.beginPath();
    contexto.lineWidth = lw;
    contexto.strokeStyle = corlinha;
    contexto.moveTo(x1, y1);
    contexto.lineTo(x2, y2);
    contexto.stroke();
    contexto.closePath();
    }
    linha(ctx, 1, 'green', 0, 150, 300, 150);
    linha(ctx, 1, 'blue', 50, 50, 150, 150);
    linha(ctx, 1, 'red', 250, 50, 150, 150);
    linha(ctx, 1, 'black', 150, 150, 150, 300);


    function arco (contexto, lw, corborda, corfundo, x, y, tam, com, fim) {
    contexto.beginPath();
    contexto.lineWidth = lw;
    contexto.fillStyle = corfundo;
    contexto.strokeStyle = corborda;
    contexto.arc(x,y,tam, com*Math.PI,fim*Math.PI);
    contexto.fill();
    contexto.stroke();
    contexto.closePath();
    }

    arco(ctx, 1, 'green', '#00FFFF', 150, 299, 40, 1, 2);


    function texto (contexto, lw, corfundo, fonte, aligntexto, texto, x, y,) {
    contexto.beginPath();
    contexto.lineWidth = lw;
    contexto.fillStyle = corfundo;
    contexto.font = fonte;
    contexto.textAlign = aligntexto;
    contexto.fillText(texto, x, y);
    contexto.closePath();
    }

    texto(ctx, 1, 'black', "20px Arial", "center", "Canvas", 150, 50);


    function linha2 (contexto, lw, corfundo, corlinha, x1, y1, x2, y2, x3, y3, x4, y4) {
    contexto.beginPath();
    contexto.lineWidth = lw;
    contexto.fillStyle = corfundo;
    contexto.strokeStyle = corlinha;    
    contexto.moveTo(x1, y1);
    contexto.lineTo(x2, y2);
    contexto.lineTo(x3, y3);
    contexto.lineTo(x4, y4);
    contexto.fill();
    contexto.closePath();
    }

    linha2(ctx2, 1, 'tomato', 'tomato', 150, 200, 150, 200, 200, 155, 250,200);