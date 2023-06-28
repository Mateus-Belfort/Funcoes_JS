//Métodos são funções atreladas a objetos
/*let pessoa = {
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
*/


//Funções Recursivas
//É uma função que chama ela mesma. executando varias vezes (efeito recursão)
/*
function dividir (num){
  console.log(num)
  if(num % 2 === 0){
    dividir(num / 2)
  }else{
    return num
  }
}
dividir(48)


function dobrar(num){
  console.log(num)
  if(num <= 100){
  dobrar(num * 2)
  }else {
    return num
  }
}

dobrar(3)

*/

//fatorial de 5: !5 === 5 * 4 * 3 * 2 * 1 === 5 * !4
function fatorial(num){
  console.log("Numero: " + num)
  if(num === 0){
    return 1
  }else if (num === 1){
    return 1
  } else {
    console.log(num + " * !" + (num - 1))
    return num * fatorial(num - 1)
  }
}

console.log(fatorial(15))



