var http = require('http');
var express = require('express');
var  app = express();
let bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'));

var servidor = http.createServer(app);
servidor.listen(80);

console.log("Servidor rodando.......");

app.get('/', function(req, res){
    res.redirect("index.html");

    
});
app.get('/cadastrar', function(req, res){
    

    var nome = req.query.nome;
    var email = req.query.email;
    var telefone = req.query.telefone;
    var nascimento = req.query.nascimento;
    console.log(nome, email, telefone, nascimento);
    res.render("resposta.ejs", { metodo: "GET",   nome, email, telefone, nascimento  });

    
});
app.post('/cadastrar', function(req, res){
    

    var nome = req.body.nome;
    var email = req.body.email;
    var telefone = req.body.telefone;
    var nascimento = req.body.nascimento;

    res.render("resposta.ejs", { metodo: "POST", nome, email, telefone, nascimento });
});
app.get('/for', function(req, res){
    

    var qtde = req.query.qtde;

    res.render("for.ejs", { qtde});
});