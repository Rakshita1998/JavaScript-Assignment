/*Write a JavaScript function to merge two arrays and removes all duplicates elements
Test data :
var array1 =  [1, 2, 3];
var array2 =[2, 30, 1];
console.log(merge_array(array1, array2));
[3, 2, 30, 1]*/

function merge_array(array1, array2) {
    var final_array = [];
    var array = array1.concat(array2);
    var len = array.length;
    var assoc = {};

    while(len--) {
        var item = array[len];

        if(!assoc[item]) 
        { 
            final_array.unshift(item);
            assoc[item] = true;
        }
    }

    return final_array;
}


var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(merge_array(array1, array2));
