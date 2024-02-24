//Faça uma função de nome calcularValorCompra que irá receber três parâmetros. O primeiro será um numero que representa o valor de uma compra. O segundo parâmetro é um boolean que representa se o usuário possui ou não convênio com o estabelecimento e o último parâmetro representa se a compra está sendo feita ou não com o cartão da loja. Se a pessoa que estiver fazendo a compra possuir o cartão da loja e possui convênio então o desconto será de 15%. Se o usuário possuir convenio ou estiver fazendo a compra pelo cartão da loja o desconto é de 10%. Caso o usuário não tenha nenhum desses benefícios não existe desconto para a compra. 

function calcularValorCompra (valorCompra, convenio, cartaoLoja) {

    if (cartaoLoja === true && convenio === true) {
       return console.log(valorCompra - (valorCompra * 0.15));
    } 
    if (cartaoLoja === true || convenio === true) {
       return console.log (valorCompra - (valorCompra * 0.10));
    }
    return console.log(valorCompra);
}
calcularValorCompra (100, true, true);
let valorCompra = 100;
let convenio = true;
let cartaoLoja = true;