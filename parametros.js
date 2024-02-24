function getMelhorFilme(genero, ano) {
    if(genero === 'ficcao') {
        return 'Interestellar';
    }
    if(genero === 'fantasia') {
        return 'O Senhor Dos Anéis';
    }
}

console.log (getMelhorFilme('ficcao'));
console.log (getMelhorFilme('fantasia'));
console.log (getMelhorFilme(2000));