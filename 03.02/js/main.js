// 1) Выводим  2 следующих сообщения после соответствующих задержек.

//    Сообщение “Hello after 4 seconds” выводим через 4 секунды.
//    Сообщение “Hello after 8 seconds” выводим через 8 секунд.

//    В решении нужно определить всего одну функцию, содержащую встроенные функции. 
//    Это означает, что множество вызовов setTimeout должны будут использовать 
//    одну и ту же функцию.

//    Пример вызова:

//    setTimeout(func1) => Hello after 4 seconds
//    setTimeout(func1) => Hello after 8 seconds
// const func1 = delay => {
//     console.log('Hello after ' + delay + ' seconds');
//   };
//   setTimeout(func1, 4 * 1000, 4);
//   setTimeout(func1, 8 * 1000, 8);

// 2) Напишите функцию mul(n,m), которая принимает два аргумента и возвращает 
//    произведение этих аргументов.
// function getSum () {
// 	var result=0;

// 	for (var i = 0; i < arguments.length; i++) {


// 		if(arguments[i] instanceof Array){

//   			for (var j = 0; j < arguments[i].length; j++){

//   				result +=(arguments[i][j]=(!isNaN(+arguments[i][j]))?+arguments[i][j]:0);
//                         }

//   		}else if(!isNaN(+arguments[i])){

// 					result += +arguments[i];

//   			}else{

// 				continue;

//   			}
               
// 	};

// 	return result;
// };

// var sum = getSum(1, '1');
// console.log( sum ); // 2



// 3) Создайте функцию и с помощью цикла найдите факториал числа 7:
//    Название для функции можно дать любую.  
//    Например при вызове функции factorial с параметром 7 в консоли должно  
//    вывести следующее:
// function factorial(n) {
//     return n ? n * factorial(n - 1) : 1;
//   }
  
// console.log( factorial(7) ); 