let opcao = "";

do {
    opcao = prompt(
        "Calculadora Geometrica\n\nEscolha uma opção para calcular:\n1. Área do triângulo\n2. Área do retângulo\n3. Área do quadrado\n4. Área do trapézio\n5. Área do círculo\n6. Sair"
    );

    switch (opcao) {
        case "1":
            let base = prompt("Qual o tamanho da base do Triângulo?");
            let altura = prompt("Qual é o tamanho da altura do Triângulo?");
            function areadotriangulo() {
                return (base * altura) / 2;
            }
            alert("A área do triângulo é: " + areadotriangulo());
            break;
        case "2":
            let baseA = prompt("Qual o tamanho da base do retângulo?");
            let alturaB = prompt("Qual é o tamanho da altura do retângulo?");
            function areadoretangulo() {
                return baseA * alturaB;
            }
            alert("A área do retângulo é: " + areadoretangulo());
            break;
        case "3":
            let lado = prompt("Qual o tamanho do lado do quadrado?");
            function areadoquadrado() {
                return lado * lado;
            }
            alert("A área do quadrado é: " + areadoquadrado());
            break;
        case "4":
            let baseMaior = prompt("Qual o tamanho da base maior do trapézio?");
            let baseMenor = prompt("Qual o tamanho da base menor do trapézio?");
            let alturaA = prompt("Qual o tamanho da altura do trapézio?");
            function areadotrapezio() {
                return ((parseFloat(baseMaior) + parseFloat(baseMenor)) * parseFloat(alturaA) / 2);
            }
            alert("A área do trapezio é: " + areadotrapezio());
            break;
        case "5":
          let raio = prompt("Informe o Raio do Círculo");      
          
          function areadocirculo() {
              return (3.14 * raio * raio);
          }
          alert("A area do círculo é: " + areadocirculo() + " m");
            break;
        case "6":
          const confirmacao = confirm("Deseja realmente sair da calculadora?")
          if(confirmacao){
            alert("Encerrando...");
          }
          break;           
        default:
            alert("Opção inválida!");
    }
} while (opcao !== "6");
