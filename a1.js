const array = [1, 2, 3, 4, 5];

var printVal = function(value) {
   console.log(value);
}

function sumArrayValues(array_val) {
   var sum = 0;
   for (var i = 0; i < array_val.length; ++i) {
      sum += array_val[i];
   }
   console.log(`Sum of all values in array is ${sum}.`);
}

array.forEach(printVal);
sumArrayValues(array);