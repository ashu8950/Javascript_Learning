const marvel_heros = ["thor","ironman","spiderman"]
const dc = ["superman", "flash" ,"batman"]

// marvel_heros.push(dc)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHero = marvel_heros.concat(dc)
// console.log(allHero);

const allNewHero = [...marvel_heros,...dc]
// console.log(allNewHero);
const anotherarr = [1,2,3,4,[4,5,6],7,[6,7,[4,5]]]

const real_another =anotherarr.flat(Infinity)
console.log(real_another);




console.log(Array.isArray("ashu"))
console.log(Array.from("ashu"))
console.log(Array.from({name: "ashu"})); //interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


