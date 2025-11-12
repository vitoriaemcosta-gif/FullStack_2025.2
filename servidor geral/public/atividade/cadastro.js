var http = require('http');
var express = require('express');
var  app = express();
let bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'));
app.set('view engine', 'ejs')
app.set('views', './views');

var servidor = http.createServer(app);
servidor.listen(80);

app.get('/', function(req, res){
    res.redirect("index.html");

});

app.get('/cadastrar', function(req, res){
    

    var nome = req.query.nome;
    var email = req.query.email;
    var telefone = req.query.telefone;
    var senha = req.query.senha;
    console.log(nome, email, telefone, senha);
    res.render("resposta_cad.ejs", { metodo: "GET",   nome, email, telefone, senha  });
    
});

app.post('/cadastrar', function(req, res){
    

    var nome = req.body.nome;
    var email = req.body.email;
    var telefone = req.body.telefone;
    var senha = req.body.senha;

    res.render("resposta_cad.ejs", { metodo: "POST", nome, email, telefone, senha });
});

app.get('/logar', function(req, res){
    
    var email = req.query.email;
    var senha = req.query.senha;
    console.log( email, senha);
    res.render("resposta_cad.ejs", { metodo: "GET",   email, senha  });
    
});

app.post('/logar', function(req, res){
    
    var email = req.body.email;
    var senha = req.body.senha;

    res.render("resposta_cad.ejs", { metodo: "POST", email, senha });
});