//**Enunciado I:** Considere o array `anos` declarado acima. Faça uma função que irá retornar todos os anos que são menores que o ano atribuído como parâmetro. Você deve fazer o uso do `for` e a função deve retornar um novo array. 

//**Enunciado II:** Considere o array `anos` declarado acima. Faça uma função que irá retornar a quantidade de anos que existem que são maiores ou igual ao ano passado como parâmetro.

const anos = [Number('2012'),Number('2010'),Number('2020'),Number('2022'),Number('2035'), Number('2045')];

function menoresAnos(año) {
    const menoresAnos [];
    for(let ano of anos) {
        if(ano < año){
            menoresAnos.push(ano)
        }
    }
    return menoresAnos;
}

function anosMaiores(año) {
    const anosMaiores = []
    for (let ano of anos) {
        if(ano >= año){
            anosMaiores.push(ano)
        }
    }
    return anosMaiores;
}
function anosDecimais(año) {
    const anosDecimos = []
    for (let ano of anos){
        if (ano % 10 === 0) {
            anosDecimos.push(ano)
        }
    }
    return anosDecimos;
}
console.log(anosMenores(2025));
console.log(anosMaiores(2004));
console.log(anosDecimos());
