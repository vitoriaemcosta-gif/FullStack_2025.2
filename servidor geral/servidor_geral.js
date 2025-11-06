 // inclui o módulo http
var http = require('http');
var express = require('express');
var app = express();
let bodyParser = require("body-parser")
var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
// const uri = "mongodb+srv://vitoriaemcosta_db_user:Eutalia00@cluster0.iy5mvll.mongodb.net/?appName=Cluster0" online
const uri = "mongodb://localhost:27017" // local
const client = new MongoClient(uri, { useNewUrlParser: true });

app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

// método use() utilizado para definir em qual
// pasta estará o conteúdo estático
app.use(express.static('./public'));

// cria o servidor
var server = http.createServer(app);

// define o número da porta que o servidor ouvirá
server.listen(80);


app.get('/', function(req, res){
    res.redirect("atividade/index.html");
})

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

///////////////////////////////////

var dbo = client.db("exemplo_bd");
var usuarios = dbo.collection("usuarios");


  app.post("/cadastrar_usuario", function(req, resp) {
    var data = { db_nome: req.body.nome, db_login: req.body.email, db_senha: req.body.senha };


    usuarios.insertOne(data, function (erro) {
      if (erro) {
        resp.render('resposta_usuario', {resposta: "Erro ao cadastrar usuário!"})
      }else {
        resp.render('resposta_usuario', {resposta: "Usuário cadastrado com sucesso!"})        
      };
    });
   
  });


app.post("/logar_usuario", function(req, resp) {
    var data = {db_login: req.body.email, db_senha: req.body.senha };

    usuarios.find(data).toArray(function(err, items) {
      console.log(items);
      if (items.length == 0) {
        resp.render('resposta_usuario', {resposta: "Usuário/senha não encontrado!"})
      }else if (err) {
        resp.render('resposta_usuario', {resposta: "Erro ao logar usuário!"})
      }else {
        resp.render('resposta_usuario', {resposta: "Usuário logado com sucesso!"})        
      };
    });

  });




