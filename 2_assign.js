
//Write a JavaScript program to compute the sum and product of an array of integers.

var array = [2, 3, 7, 4, 9, 6],
    sum = 0,
    prod = 1,
    i;
for (i = 0; i < array.length; i += 1) 
   {
    sum += array[i]; 
    prod *= array[i];
    }
console.log('Sum of integer is: '+sum   ); 
console.log(' Product of integer is:  ' +prod);