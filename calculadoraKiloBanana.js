function calcularBananas(estudantes) {
    const pesoMedioBanana = 90;
    const margemErro = 0.2;

    const totalBananas = estudantes * 2;
    const totalQuilo = totalBananas * pesoMedioBanana;

    const minimoBananas = totalQuilo / (1 + margemErro);
    const maximoBananas = totalQuilo / (1 - margemErro);

    const ordemDeBananas = [minimoBananas / 1000, maximoBananas / 1000];
    
    return ordemDeBananas;
}

const ordemDeBananas = calcularBananas(200);
console.log(ordemDeBananas);