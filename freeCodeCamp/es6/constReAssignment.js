// const s = [5, 7, 2];

// function reassignment(s){
//     let reassgin_s = [2, 5, 7];
//     let new_list = []

//     for(let i = 0; i < s.length; i ++){
//         s[i] = reassgin_s[i]
//     }
//     console.log(s)
// };

// const test = reassignment(s);
// console.log(test);

// higher order functions
// const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
// const squareList = (arr) => {
//   "use strict";
//   // change code below this line
//   const squaredIntegers = arr.filter( (num) => num > 0 && num % parseInt(num) === 0 ).map( (num) => Math.pow(num, 2) );
//   // change code above this line
//   return squaredIntegers;
// };
// // test your code
// const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers);




// function quickCheck(arr, elem) {
//     // change code below this line
//     console.log(arr.indexOf(elem));
//     if (arr.indexOf(elem)){
//       return true;
//     };
//     // change code above this line
//   };

// console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
// console.log(quickCheck(['squash', 'onions', 'shallots'], 'onions'));
// console.log(quickCheck([3, 5, 9, 125, 45, 2], 125));




// function filteredArray(array, elem) {
//     let newArray = [];
//     // change code below this line
//     for(let i = 0; i < array.length; i++){
//         if(typeof array[i] !== 'number'){
//             filteredArray(array[i], elem)
//         }
//         if(array.indexOf(elem)){
//             console.log('wtf')
//         }
//     }
//     // change code above this line
//     return newArray;
//   }
  
//   // change code here to test different cases:
// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
// console.log(filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2));
// console.log(filteredArray([['amy','beth','sam'],['dave','sean','peter']],'peter'));
// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
// console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));


