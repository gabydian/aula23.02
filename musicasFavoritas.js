function getFavoritesSongs(artistName) {
    const favoriteSongs = {
        'Bon Jovi': ['Living On A Prayer', 'Always', 'Its My Life'],
        'Coldplay': ['Viva La Vida', 'Fix You', 'Yellow'],
        'Elton John': ['Your Song', 'Tiny Dancer', 'Sacrifice']
    };

    return favoriteSongs[artistName] || [];
}
console.log(getFavoritesSongs('Elton John'));
console.log(getFavoritesSongs('One Direction'));