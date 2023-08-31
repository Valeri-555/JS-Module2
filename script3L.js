
// Масив - це колекція структурованих данних будь-якого типу

// Яким буде результат висловлювання?

//[1, 3, 5] === [1, 3, 5]; - false

 //у нас відбувається поривняння двох масивів 
 //Перше що ми робимо визначаємо який тип данних ми порівнюємо ? Примітивні чи складні
 //ПРИМІТИВНІ ТД порівнюємо за їх значенням (якщо б умовно у нас масив був у рядочку "[]" вони б дійсно були рівні)
 //якщо СКЛАДНІ ТД ми порівнюємо їч посиланням де вони фізично є або ств. Тому 2 однакових масива ніколи в жиььі між собою не будуть рівними.
 
 
 
//[8, 5, 3, 9, 3].indexOf(3); - 2

//indexOf нмасиві працює по тип уданни String,якщо він його знаходить  необхідний елемент він повертає його в індекс масиві
//якщо не знаходить повертає -1.



//[2, 4, 6].concat([1, 3], [5]); - [2, 4, 6, 1, 3, 5];

//Метод concat дозволяє об'єднат идекілька масивів
//Він може приймати список масивів які розділені комою, може передаватись при виклику деяких функцій або методів
// Далі він бере І масив за основу відкриває квадратні дужки і переносить все з осн масиву 
//[2, 4, 6 (і все що перечислено у методі  concat в тому ж порядку) 1, 3, 5]




//const array = ["Hello world", null, true, 15];
//console.log(typeof array); // - object // Завжди коли ми будемо перевіряти масив на т/д будемо отримувати  object
 //Це приклад валідного масиву, кожен елемент масиву має свій індекс починаючи з 0.
 // Array - є складним т/д
// Літерал це та річ по якій визначаємо, що ми працюємо с масивом або з об'єктом це квадратні дужки[]
// Він може зберігати будь-що і одночасно
//console.log(Array.isArray(array));// - true // якщо це масив він завжди буде повертати булеве значення true 
// Щоб зрозуміти що ми дійсно працюємо з масивом на т/д Array є власний метод який допомагає нам знайти це
// Ми звертаємось до глобального т/д Array, звернення завжди пишемо з великої літери
//console.log(Array.isArray('hello')); //- false

//const firstEl = array[0]; // щоб дізнатись І елемент масиву, через змшнну 
//console.log(firstEl); // - Hello world
//console.log(array.length); // - 4 шукаємо останній порядковий номер масиву через ленгс
//const lastEl = array[array.length -1]; //Щоб дізнатись останній елемент масиву, від порядковог номеру віднімаємо -1, так як індекс чісла < за порядковий
//console.log(lastEl);// 15
//const lastIDX = array.length - 1; //коли треба дізнатис індекс останнього елемента
//console.log(lastIDX);//3



// FOR Використовуємо якщо нам якимось чином порібно мутувати данний масив, тобто нам потрібен доступ до індекса, за рахунок чого в нас є лічильнік
//const array = ["Hello world", null, true, 15];
//і - це лічильник який співвідносимо до індексу масиву
// for (let i = 0; i < array.length; i+=1){
//     const item = array[i]
//     console.log(item);
// }



//FOR OF Використовуємо коли нам потрібно перебоати данний елемент,
// але ніяким чином не впливати на структуру данного масиву,
// тобто ми не маємо з нього щось вирізати та в нього додавати ми лише його перебираємо і опрацьовуємо кожен елемент на ітерації
//const array = ["Hello world", null, true, 15];
// for(const item of array){  // створюємо змінну за допомогою якої ми будемо звертатись до елемента нашого масиву
    // console.log(item);
 //}
// const item - ми беремо елемент
// of - з (чого?)
// array -  з масиву


// Можемо змінювати елемети в середині масиву
//const array = [null, true, "Hello world", 15, undefined, 'ok'];
//array[0] = 2;
// console.log(array);
//  for (let i = 0; i < array.length; i += 1) {
//      if (typeof array[i] === 'string') {
//          array[i] = false;
//      }
// }
// console.log(array);

// for (let item of array) {
//     if (typeof item === 'string') {
//         item = false;
//     }
//     console.log(item);
// }
// console.log(array);




// * * *   Примітивні типи даних - за значенням
// console.log(1 === 1);
// console.log([1] === [1]);


// let a = 15;
// let b = a; //(a та b - ідентефікатори)
// b += 1;
// console.log(a);
// console.log(b);
// console.log(a === b); - false




// * * * * * Складні типи даних - за посиланням
// let a = [1,2,3];
// let b = a;

// b.push(4) // додаємо один або декільеа елементів в кінець масиву


// console.log('a',a);
// console.log('b',b);

// console.log(a === b); //true





// PUSH POP - використовуємо для того щоб видалити останній елемент масиву, і він його повертає в якості свого виконання
// const numbers = [1, 2, 3];
// numbers.push(4); //
//numbers.pop(); - викликаємо стільки разів, скільки потрібно видалити, на кожен елемент,
// const result = numbers.pop(); // а також може повернути вирізаний елемент
// console.log(result);
// console.log(numbers);


// UNSHIFT (додає елемент на початок масиву)   shift (вирізає перший елемент масиву)
//const numbers = [1, 2, 3];
//numbers.unshift(4,5,6) // [4, 5, 6, 1, 2, 3]
//const result = numbers.shift(); - //вирізав 1 з масиву
//console.log(result);
//console.log(numbers);

// Методи shift i pop мутують масив, змінюють початковий вигляд масиву




// SLICE (використовуємо щоб вирізато одразу певну кількість елементів, повертає копію в результаті свого виконання)

//const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//const result = numbers.slice(2, 5); // передаємо ДО якого індексу потрібно вирізати не включаючи його
//console.log(result);
//console.log(numbers);




// SPLICE (може вирізати елемент масиву, замінити ел.мас та додати будь-куди в елемент масиву, мутуючий медот
//(приймає 2 параметри які йдуть обов'язкові)
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const result = numbers.splice(2,2) - // 1, 2, 5, 6, 7,8   параметр, з індексу якого елементу потрібно починати та скількі елементів;
// console.log(result);
// console.log(numbers);

// numbers.splice(2, 1, 'hello world', false)
//якщо нам потрібно замінити данний елемент:
//1. 2 - з якого індексц нам потрібно замінити;
//2. якщо нам треба замінити елемент вказуємо - 1;
//3. та всі наступні "що додати?"
// console.log(numbers);


// numbers.splice(2, 0, 'hello world')
// 0 - якщо ми не заміняємо елемент, а потрібно розмістити поруч;
// console.log(numbers);



//includes - коли потрібно перевірити чи включає масив якийсь елемент
// const str = ['a', 'b', 'c', 'd'];
// console.log(str.includes('c')); // true
// console.log(str.includes('e')); // false



//indexOf - знаходить елемент під індексом
// const str = ['a', 'b', 'c', 'd','c'];
// console.log(str.indexOf('c'));//2
// console.log(str.indexOf('e'));//-1
// console.log(str.indexOf('e') !== -1);


// concat - ждя об'єднання декількох елементів
// const str = ['a', 'b', 'c', 'd', 'c'];
// const strA = ['g', 'h'];
// const strB = ['w', 'e'];


// const result = str.concat(strA, strB);
// console.log(result);
// console.log(str);











// Task-1
// Напиши скрипт який буде перебирати масив та видаляти з нього (мутувати) всі елементи що не є типом даних Number.

//  const arrA = [3, 'Hello', null, 42, false];
// console.log(typeof null);
// for (let i = 0; i < arrA.length; i += 1) {
//     if (typeof arrA[i] !== 'number') { // 3,42
//         arrA.splice(i, 1);
//         i -= 1;
//     }
// }
// console.log(arrA);


// const arrA = [3, 'Hello', null, 42, false]; //перебір масиву з кінця, на практиці краще використовувати такий варіант
// for (let i = arrA.length - 1; i >= 0; i -= 1) {
//     console.log(arrA[i]);
//     if (typeof arrA[i] !== 'number') {
//         arrA.splice(i, 1);
//     }
// }
// console.log(arrA);






// const arrB = ['world', true, 22, 41, undefined];










// Task-2
// Потрібно створити функцію яка буде приймати 1 параметр
// Функція повина відібрати з масиву тільки ті елементи що дублюються в ньому та повернути їх в вигляді нового масиву як результат виконання функції

// function getCommonElements(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i += 1) {
//         if (arr.includes(arr[i], i + 1)) { // (коли елементи входять) якщо той масив, який ми перебираємо включає в себе елемент який я ітерую але за виключенням нього самого
//             result.push(arr[i]) // за допомогою пуш додаємо в свій результючий масив
//         }
//     }
//     return result
// }
// console.log(getCommonElements([1, 2, 3, 2, 1, 17, 19]));




// Task-3
//Потрібно створити функцію яка буде приймати 2 параметри
//1 параметр це масив всіх юзерів
//2 параметр це масив з чоловічими іменами.
//Функція повина відібрати з масиву всіх юзерів лише жіночі імена та повернути їх в результаті свого виканання.

// const users = ['Artem', 'Anna', 'Larisa', 'Maksim', 'Svetlana', 'David', 'Roman', 'Olga'];
// const men = ['Artem', 'Maksim', 'David', 'Roman'];

// function getWomen(users, men) {
//     const women = [];
//     for (const user of users) {
//         if (!men.includes(user)) {  // (коли потрібно відібрати)
//             women.push(user)
//         }
//     }
//     return women
// }
// console.log(getWomen(users, men));








// Task-4 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок літер) і виводить його в консоль.

// const string = 'Welcome to the future';
// const SEPARATOR = '';
// const result = string.split(SEPARATOR).reverse().join(SEPARATOR)
// console.log(result);




// Task-5
// Напиши скрипт який буде перевіряти чи елементи в масиві розташовані в порядку зростання,
// якщо ні то замінювати елемент на вірнi
// const numbers = [1, 2, 3, 1, 5, 6, 1, 1, 9]

// for (let i = 1; i < numbers.length; i += 1) {
//     const currentEl = numbers[i];
//     const prevEl = numbers[i - 1];
//     if (currentEl - prevEl !== 1) {
//         numbers[i] = numbers[i - 1] + 1;
//     }
// }
// console.log(numbers);


// Task-6
// Напиши функцію яка на основі масиву користувачів що поставили лайк формує та повертає рядок.
// Функцію має повернути текст, як вказано у прикладах:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"


// function createStr(arr) {
//     let message;
//     switch (arr.length) {
//         case 0:
//             message = "no one likes this"
//             break;
//         case 1:
//             message = `${arr[0]} likes this`
//             break;
//         case 2:
//             message = `${arr[0]} and ${arr[1]} like this`
//             break;
//         case 3:
//             message = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`
//             break;
//         default:
//             message = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`
//     }
//     return message;
// }

// console.log(createStr([]));
// console.log(createStr(["Peter"]));
// console.log(createStr(["Jacob", "Alex"]));
// console.log(createStr(["Max", "John", "Mark"]));
// console.log(createStr(["Mark", "Alex", "Jacob", "Mark"]));