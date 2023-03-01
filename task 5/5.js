const cities = ['Москва', 'Мытищи', 'Ульяновск', 'Самара', 'Киров']
let num = ' - город';
const n = cities.length % 10;

if (cities.length  === 0 ) {
    num = `${num}ов`
} else if (cities.length >= 11 && cities.length <= 20) {
    num = `${num}ов`
} else if ((n >= 5 && n <= 9) || n === 0) {
  num = `${num}ов`
} else if (n === 1) {
  num = `${num}`
} else if (n >=2 && n <=4) {
  num = `${num}a`
}

console.log(cities.length + num + ' в списке')

for (counter = 0; counter < cities.length; counter++ ) {
    console.log (cities[counter])
}