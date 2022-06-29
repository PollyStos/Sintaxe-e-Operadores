let num1 = "";
let num2 = "";
let numero1 = 0;
let numero2 = 0;

function capturar(){
    num1 = document.getElementById("numero1").value;
    num2 = document.getElementById("numero2").value;
    
    numero1 = Number(num1);
    numero2 = Number(num2);
    comparacaoNum(numero1,numero2);

}
function comparacaoNum(num1,num2){
    if(num1!==0){
        if(num2!==0 ){
          if(!num1||!num2)  return document.getElementById("result").innerHTML = "Defina dois números!";
        }
    }else {
        imprimir();
    }
}
function imprimir(){
    const primeirafrase = criaPrimeiraFrase(numero1, numero2);
    const segundafrase = criaSegundaFrase(numero1, numero2);

    return document.getElementById("result").innerHTML =  `${primeirafrase} ${segundafrase}`;

}
function criaPrimeiraFrase(num1,num2){
    let nSaoiguais = '';

    if(num1!==num2){
        nSaoiguais = 'não';
    }

    return`Os números ${num1} e ${num2} ${nSaoiguais} são iguais.`
}

function criaSegundaFrase(num1,num2){
    const soma = num1+num2;
    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma>10;
    const compara20 = soma>20;

    if(compara10){
        resultado10 = 'maior';
    }

    if(compara20){
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`

}

    

































// function comparacaoNum(num1,num2){
//     if(num1!==0){
//         if(num2!==0 ){
//           if(!num1||!num2)  return "Defina dois números!"
//         }
//     }
    
//     num1 = Number(num1);
//     num2 = Number(num2);
        
//     const primeirafrase = criaPrimeiraFrase(num1, num2);
//     const segundafrase = criaSegundaFrase(num1, num2);

//     return `${primeirafrase} ${segundafrase}`
// }  

// function criaPrimeiraFrase(num1,num2){
//     let nSaoiguais = '';

//     if(num1!==num2){
//         nSaoiguais = 'não';
//     }

//     return`Os números ${num1} e ${num2} ${nSaoiguais} são iguais.`
// }

// function criaSegundaFrase(num1,num2){
//     const soma = num1+num2;
//     let resultado10 = 'menor';
//     let resultado20 = 'menor';
//     const compara10 = soma>10;
//     const compara20 = soma>20;

//     if(compara10){
//         resultado10 = 'maior';
//     }

//     if(compara20){
//         resultado20 = 'maior';
//     }

//     return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
// }

// console.log(comparacaoNum(1,1));