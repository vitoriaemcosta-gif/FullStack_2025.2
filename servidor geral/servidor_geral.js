 // inclui o módulo http
var http = require('http');
var express = require('express');
var app = express();
let bodyParser = require("body-parser")
var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const uri = "mongodb+srv://vitoriaemcosta_db_user:Eutalia00@cluster0.iy5mvll.mongodb.net/?appName=Cluster0"
// const uri = "mongodb://localhost:27017" // local
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
    res.redirect("atividade/projects.html");
})

app.get('/login', function(req, res){
    res.redirect("atividade/login.html");
})

// link ejs para login

//redireciona

app.get('/cadastra', function(req, res){
    res.redirect("atividade/cadastro.html");
})

app.get('/cadastra', function(req, res){
    
    var nome = req.query.nome;
    var telefone = req.query.telefone;
    var email = req.query.email;
    var senha = req.query.senha;
    console.log( email, senha);
    res.render("resposta_cad.ejs", { metodo: "GET",  nome, telefone, email, senha  });
    
});

app.post('/cadastra', function(req, res){
    var nome = req.body.nome;
    var telefone = req.body.telefone;
    var email = req.body.email;
    var senha = req.body.senha;


    res.render("resposta_cad.ejs", { metodo: "POST", nome, telefone, email, senha });
});


app.get('/logar', function(req, res){
    
    var email = req.query.email;
    var senha = req.query.senha;
    console.log( email, senha);
    res.render("resposta.ejs", { metodo: "GET",   email, senha  });
    
});

app.post('/logar', function(req, res){
    
    var email = req.body.email;
    var senha = req.body.senha;


    res.render("resposta.ejs", { metodo: "POST", email, senha });
});

app.get('/for', function(req, res){
    

    var qtde = req.query.qtde;

    res.render("for.ejs", { qtde});
});

///////////////////////////////////
/////////////// BANCO DE DADOS /////////////////////


var dbo = client.db("exemplo_bd");
var usuarios = dbo.collection("usuarios");

/////////////// CADASTRAR /////////////////////

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

  /////////////// LOGAR /////////////////////

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

  /////////////// ATUALIZAR /////////////////////

app.post("/atualizar_usuario", function(req, resp) {
    var data = { db_login: req.body.login, db_senha: req.body.senha };
    var newData = { $set: {db_senha: req.body.nova_senha} };

    usuarios.updateOne(data, newData, function (err, result) {
      console.log(result);
      if (result.modifiedCount == 0) {
        resp.render('resposta_usuario', {resposta: "Usuário/senha não encontrado!"})
      }else if (err) {
        resp.render('resposta_usuario', {resposta: "Erro ao atualizar usuário!"})
      }else {
        resp.render('resposta_usuario', {resposta: "Usuário atualizado com sucesso!"})        
      };
    });
   
  });

  /////////////// REMOVER /////////////////////

  app.post("/remover_usuario", function(req, resp) {
    var data = { db_login: req.body.login, db_senha: req.body.senha };
   
    usuarios.deleteOne(data, function (err, result) {
      console.log(result);
      if (result.deletedCount == 0) {
        resp.render('resposta_usuario', {resposta: "Usuário/senha não encontrado!"})
      }else if (err) {
        resp.render('resposta_usuario', {resposta: "Erro ao remover usuário!"})
      }else {
        resp.render('resposta_usuario', {resposta: "Usuário removido com sucesso!"})        
      };
    });

  });



/////////// BLOG ///////////////////

var postagem = dbo.collection("blog");

app.get("/blog", function(req, resp) {
 
    postagem.find({}).toArray(function(err, items) {
      console.log(items);
      resp.render('blog', {postagem: items})    
    });
  });

app.get("/cadastrar_blog", function(req, resp) {
    resp.redirect("/atividade/cadastrar_post.html");
});

app.get("/Blog", function(req, resp) {
    resp.render('blog', {postagem: items})    
});

app.post("/cadastrarblog", function(req, resp) {
    var post = {bd_titulo: req.body.titulo, bd_resumo: req.body.resumo, bd_conteudo: req.body.conteudo};
    postagem.insertOne(post, function (err) {
      if (err) {
        resp.render('blog_criado', {resposta: "Erro ao cadastrar a postagem!"})
      }else {
        resp.render('blog_criado', {resposta: "Postagem cadastrada com sucesso"})        
      };
    }); 
});




////////////////// AULA 11 /////////////////////

/////////// atualizar usuario /////////////


