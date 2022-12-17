let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let Q = +input[0];

const discography = get_disgraphy();

let output = '';
for (let q = 1; q<=Q; ++q) {
    let [S,E] = input[q].split(' ').map(x=>+x);
    let result = [];
    for (let album of discography) {
        let releaseYear = parseInt(album, 10);
        releaseYear = +releaseYear;
        if (releaseYear < S || releaseYear > E) continue;

        result.push(album);
    }
    if (result.length > 0) {
        output += `${result.length}\n`;
        output += `${result.join('\n')}\n`;
    } else output += `0\n`;
}
console.log(output);

function get_disgraphy() {
    let discography = `
    1967 DavidBowie
    1969 SpaceOddity
    1970 TheManWhoSoldTheWorld
    1971 HunkyDory
    1972 TheRiseAndFallOfZiggyStardustAndTheSpidersFromMars
    1973 AladdinSane
    1973 PinUps
    1974 DiamondDogs
    1975 YoungAmericans
    1976 StationToStation
    1977 Low
    1977 Heroes
    1979 Lodger
    1980 ScaryMonstersAndSuperCreeps
    1983 LetsDance
    1984 Tonight
    1987 NeverLetMeDown
    1993 BlackTieWhiteNoise
    1995 1.Outside
    1997 Earthling
    1999 Hours
    2002 Heathen
    2003 Reality
    2013 TheNextDay
    2016 BlackStar
    `.trim();
    discography = discography.split('\n').map(x=>x.trim());
    return discography;
}