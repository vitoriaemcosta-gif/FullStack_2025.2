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


app.get('/cadastra', function(req, res){
    
    res.render("atividade/login.html");
    
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

//////////////// ATIVIDADE BLOG ////////////////////////

var dbo = client.db("exemplo_bd");
var user = dbo.collection("usuarios");


// --- Simulação de Banco de Dados (Requisito 5) ---
// Array para armazenar os posts em memória
let posts = [
    { titulo: "Primeiro Post", resumo: "Teste", conteudo: "Esse é o primeiro post" },
    { titulo: "Post2", resumo: "Teste2", conteudo: "Segundo post!" },
    { titulo: "Post3", resumo: "Teste3", conteudo: "Terceiro post" }
];

// Função DB para buscar todos os posts (Requisito 5.b)
function buscarTodosOsPosts() {
    return posts;
}

// Função DB para cadastrar um novo post (Requisito 5.a)
function cadastrarNovoPost(post) {
    posts.unshift(post); // Adiciona o novo post no início do array
    return post;
}
// ----------------------------------------------------


// Rota padrão (Requisito 3.c)
app.get('/', function(req, res) {
    // Redireciona o endereço padrão para a página do blog
    res.redirect('/blog');
});

// Rota do Blog (Requisito 3.c & 4.a)
app.get('/blog', function(req, res) {
    // Busca todos os posts e renderiza a página blog.ejs
    const todosPosts = buscarTodosOsPosts();
    res.render('blog.ejs', { posts: todosPosts });
});

// Rota para a página de criação de Post (Requisito 1.c)
app.get('/cadastrar_post.html', function(req, res) {
    // Renderiza o template do formulário
    res.render('blog.ejs');
});

// Rota POST para processar o formulário de Cadastro (Requisito 1.c.i)
app.post('//cadastrarblog', function(req, res) {
    const { titulo, resumo, conteudo } = req.body;
    
    // Cria um objeto Post
    const novoPost = { titulo, resumo, conteudo };

    // Cadastra no 'Banco de Dados'
    cadastrarNovoPost(novoPost);

    // Renderiza uma confirmação (ou redireciona para o blog)
    // Vamos redirecionar para ver a lista atualizada
    res.redirect('/blog'); 
});

// Comando para instalar as dependências: npm install express body-parser ejs