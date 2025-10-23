    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = 'blue';
    ctx.strokeStyle = 'red';
    ctx.fillRect(10,10,50,50);
    ctx.strokeRect(10,10,50,50);
    

    ctx.lineWidth = 2;
    ctx.fillStyle = 'blue';
    ctx.strokeStyle = 'red';
    ctx.fillRect(340,340,50,50);
    ctx.strokeRect(340,340,50,50);
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = 'blue';
    ctx.strokeStyle = 'red';
    ctx.moveTo(200,150);
    ctx.lineTo(60,10);
    ctx.lineTo(60,250);
    ctx.lineTo(200,250);
    ctx.lineTo(200,150);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();


    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = 'blue';
    ctx.strokeStyle = 'red';
    ctx.arc(200,200,50,1.5*Math.PI,2.5*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();


    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = 'blue';
    ctx.strokeStyle = 'red';
    ctx.font = "90px Arial"
    ctx.textAlign = "center";
    ctx.fillText("Olá",200,350);
    ctx.strokeText("Olá",200,350)
    ctx.closePath();


    let canvas2 = document.getElementById("canvas2");
    let ctx2 = canvas2.getContext("2d");

    ctx2.beginPath();
    ctx2.lineWidth = 2;
    ctx2.fillStyle = 'red';
    ctx2.fillRect(0,0,50,50);
    ctx2.closePath();

    ctx2.beginPath();
    ctx2.lineWidth = 2;
    ctx2.fillStyle = 'blue';
    ctx2.fillRect(350,0,50,50);
    ctx2.closePath();

    ctx2.beginPath();
    ctx2.lineWidth = 2;
    ctx2.fillStyle = 'green';
    ctx2.fillRect(350,350,50,50);
    ctx2.closePath();

    ctx2.beginPath();
    ctx2.lineWidth = 2;
    ctx2.fillStyle = 'yellow';
    ctx2.fillRect(0,350,50,50);
    ctx2.closePath();

    ctx2.beginPath();
    ctx2.lineWidth = 2;
    ctx2.strokeStyle = 'green';
    ctx2.moveTo(0,200);
    ctx2.lineTo(400,200);
    ctx2.stroke();
    ctx2.closePath();

    ctx2.beginPath();
    ctx2.lineWidth = 2;
    ctx2.strokeStyle = 'green';
    ctx2.arc(200,200,50,0*Math.PI,1*Math.PI);
    ctx2.stroke();
    ctx2.closePath();

    ctx2.beginPath();
    ctx2.lineWidth = 2;
    ctx2.strokeStyle = 'blue';
    ctx2.moveTo(350,50);
    ctx2.lineTo(0,400);
    ctx2.stroke();
    ctx2.closePath();

    ctx2.beginPath();
    ctx2.lineWidth = 2;
    ctx2.strokeStyle = 'red';
    ctx2.moveTo(50, 50);
    ctx2.lineTo(400,400);
    ctx2.stroke();
    ctx2.closePath();

    ctx2.beginPath();
    ctx2.lineWidth = 2;
    ctx2.strokeStyle = 'green';
    ctx2.arc(200,200,50,0*Math.PI,1*Math.PI);
    ctx2.stroke();
    ctx2.closePath();

    // arcos
    ctx2.beginPath();
    ctx2.lineWidth = 2;
    ctx2.fillStyle = 'yellow';
    ctx2.strokeStyle = 'green';
    ctx2.arc(90,150,18,0*Math.PI,2*Math.PI);
    ctx2.fill();
    ctx2.stroke();
    ctx2.closePath();


     ctx2.beginPath();
    ctx2.lineWidth = 2;
    ctx2.fillStyle = 'yellow';
    ctx2.strokeStyle = 'green';
    ctx2.arc(310,150,18,0*Math.PI,2*Math.PI);
    ctx2.fill();
    ctx2.stroke();
    ctx2.closePath();


    // texto
    ctx2.beginPath();
    ctx2.lineWidth = 2;
    ctx2.fillStyle = 'black';
    ctx2.font = "27px Arial"
    ctx2.textAlign = "center";
    ctx2.fillText("Desenvolvimento Web",200,70);
    ctx2.closePath();


    let canvas3 = document.getElementById("canvas3");
    let ctx3 = canvas3.getContext("2d");



    //chao
    ctx3.beginPath();
    ctx3.lineWidth = 2;
    ctx3.fillStyle = 'grey';
    ctx3.fillRect(0,300,400,100);
    ctx3.closePath();

    //casa
    ctx3.beginPath();
    ctx3.lineWidth = 2;
    ctx3.fillStyle = '#8d4925';
    ctx3.fillRect(150,200,100,100);
    ctx3.closePath();


    //telhado

    ctx3.beginPath();
    ctx3.lineWidth = 2;
    ctx3.strokeStyle = 'red';
    ctx3.fillStyle = 'tomato';
    ctx3.moveTo(150, 200);
    ctx3.lineTo(150,200);
    ctx3.lineTo(200,155);
    ctx3.lineTo(250,200);
    ctx3.fill();
    ctx3.closePath();

    //janelas
    ctx3.beginPath();
    ctx3.lineWidth = 2;
    ctx3.fillStyle = '#8adaff';
    ctx3.fillRect(159,220,28,28);
    ctx3.closePath();

    ctx3.beginPath();
    ctx3.lineWidth = 2;
    ctx3.fillStyle = '#8adaff';
    ctx3.fillRect(213,220,28,28);
    ctx3.closePath();

    //porta
    ctx3.beginPath();
    ctx3.lineWidth = 2;
    ctx3.fillStyle = '#2c1919';
    ctx3.fillRect(188,250,24,50);
    ctx3.closePath();








