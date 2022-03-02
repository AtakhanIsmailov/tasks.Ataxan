// 1) Дан массив с элементами [2, 3, 4, 5, 6, 7].
//    С помощью цикла for найдите произведение элементов этого массива.
//    Общий результат сохранить в объекте с соответствующим свойством.
//    Например: 2 * 3 = 6 -> 6 * 4 и.т.д.

// !  4erez cikl for
// let arrNum = [2, 3, 4, 5, 6, 7];
// let sum = 1;

// for(let i = 0; i < arrNum.length; i++) {
//     res = sum *= arrNum[i]
// };

// let obj = {
//     result: res
// }

// console.log(res)


// ! 4erez reduce
// let arr = [2, 3, 4, 5, 6, 7];
// let result = arr.reduce((sum, currentVal) => {
//     return sum * currentVal;
// }, 1)
// console.log(result);

// 2) Напишите функцию, которая заполняет новый массив предоставленным значением 
//    и затем ее возвращает. Функция должна первым параметром принимать 
//    элемент (значение для массива), вторым параметром размер массива.  
//    Например: myFunc('a', 3)   // ['a', 'a', 'a']

// function arrayFilled(obj, value) {
//     let array = [];
//     for(obj; obj > 0; obj--) {
//       array.push(value);
//     }
//     return array;
//   }
// console.log(arrayFilled(3, 'a'));


// 3) Напишите функцию, которая разворачивает массив в обратном порядке 
//    и затем ее возвращает.  Функция наша  принимает массив любых элементов.      
//    Например:
//    const data = [1, 2, 3]; 
//    myFunc(data);  // [3, 2, 1];
// !  rewenie pervoe
// const nargiza = array => array.map((item, index, listing) => listing[listing.length - 1 - index]);
// const data2 = [1, 2, 3];
// console.log(nargiza(data2)); 


// ! rewemie vtoroe
// const nargiza = array => {
//     for (let i = 0, a = array.length - 1; i < a; i++, a--) {
//       [array[i], array[a]] = [array[a], array[i]];
//     }
//     return array;
//   };
//   const data = [1, 2, 3];
//   console.log(nargiza(data)); 
  
