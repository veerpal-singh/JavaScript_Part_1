const marvel_heros = ["thor", "Ironman", "spiderman"]

const dc_heros = ["superman", "flash", "batman"]

const all_new_heros = [...marvel_heros, ...dc_heros] // use this
console.log(all_new_heros);


console.log(Array.isArray("Veer")); // false

console.log(Array.from("Veer")); // change to array

console.log(Array.from({name: "veer"})); // empty array // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // change to array








