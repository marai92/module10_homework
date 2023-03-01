let arr = [0, 1, 2, 3, 5, 6, 7, 8, 9];

    odd = arr.reduce(function (r, a) { 
        return r + a % 2; 
    }, 0),
    even = arr.length - odd
if (arr.includes( 0 )) {
    console.log('Есть значение "0"')
}
console.log (odd + ' - нечетных')
console.log (even + ' - четных')

// По заданию нужно учесть, что массив может содержать 'null' 
// и другие знаения отличные от чисел,
//  нужна помощь в решении