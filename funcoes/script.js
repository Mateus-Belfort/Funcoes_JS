//Estrutura básica de uma função
/*
function ola() {
    console.log("Olá, mundo!");
}
ola();*/
/*
//Parametros de uma Função
function dobro(x) {
    alert("O Dobro de " + x + " é " + x * 2);
}

dobro(5);
//Colocando uma entrada dentro do parametro, ele irá executar a multiplicação do valor inserido
dobro(7);
//dobro();
//Quando não é definido o parametro é considerado como Undefined

function dizerOla(nome = "mundo") {
    alert("Olá, " + nome + "!");
}

dizerOla("Mateus");
dizerOla();

function soma(a, b) {
    alert("O resultado da soma é " + (a + b));
}
soma(7, 6);
soma(1, 1);

function criarusuario(nome, email, senha, tipo) {
    const usuario = {
        nome, //mesmo que nome: nome
        email,
        senha,
        tipo,
    };

    console.log(usuario);
}

criarusuario("Mateus", "mateus@gmail.com", "12345", "Administrador");
//Sempre que for declarar os valores, colocar na ordem em que foram declarados no parametros.
//sempre declarar os valores opcionais padrões no final


//Colocando um objeto coo parametro
//basea-se em definir um objeto com suas devidas declarações e depois chama-la como
//parametro dentro de uma função.
function objetoComoParametro(usuario) {
    usuario.nome;
    usuario.telefone;
    usuario.email;
    usuario.senha;
    usuario.endereco;
    usuario.aniversario;

    console.log(usuario);
}
const usuario = {
    nome: "Mateus",
    telefone: "(61) 99994-6457",
    email: "mateus@gmail.com",
    senha: "1234",
    endereco: "Rua top",
    aniversario: "10/08/2013",
};

objetoComoParametro(usuario);


//Retorno de uma função
function calcularMedia(a, b) {
    const media = (a + b) / 2;
    return media;
}

calcularMedia(7, 6);*/

function areaRantangular(base, altura) {
    return base * altura;
}
console.log(areaRantangular(8, 6));
