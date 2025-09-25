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

    quadrado(ctx, 2, 'red', '', 250, 0, 50, 50, 0, 0, 0, 0);

    quadrado(ctx, 2, 'aquamarine', '', 1, 125, 25, 50, 0, 0, 0, 0);

    quadrado(ctx, 2, 'aquamarine', '', 274, 137, 25, 25, 0, 0, 0, 0);

    quadrado(ctx, 2, 'red', '', 110, 150, 40, 40, 0, 0, 0, 0);

    quadrado(ctx, 2, 'aquamarine', '', 1, 249, 25, 50, 0, 0, 0, 0);

    quadrado(ctx, 2, 'aquamarine', '', 2, 275, 50, 25, 0, 0, 0, 0);

    quadrado(ctx, 2, 'black', '', 275, 250, 25, 50, 0, 0, 0, 0);

    quadrado(ctx, 2, 'black', '', 250, 275, 50, 25, 0, 0, 0, 0);

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