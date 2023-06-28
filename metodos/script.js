//Métodos são funções atreladas a objetos
let pessoa = {
  nome: "Mateus",
  idade: 28,
  //exemplo de metodo dentro de um objeto
  //referenciando a propiedade dentro do método usando this.
  dizerOla(){
    console.log("Olá, Mundo! Meu nome é " + this.nome)
  }
}

console.log(pessoa)
//nesse caso o log é um metodo do objeto console


pessoa.dizerOla()