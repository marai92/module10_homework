let entity = prompt('Введите значение...');

let ident = +entity

if (isNaN(ident)) {
  console.log('Упс, кажется вы ошиблись!')
 
} else if (ident % 2 == 0) {
    console.log('Число ' + entity + ' четное.')
    
} else if (ident % 2 != 0){
    console.log('Число ' + entity + ' не четное.')
}