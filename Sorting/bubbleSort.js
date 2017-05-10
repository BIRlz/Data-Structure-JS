/*
This is a bubbleSort, very easy.No need to say anything.
*/
function bubbleSort(array){
    var n = array.length;
    for(var i = 0;i < n ; i++){
        for(var j = 0;j < n - i - 1 ; j++){
            if(array[i] > array[j]){
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}
console.time("test");
console.log(bubbleSort([213,43,4,5,46,57,6,87,9,8756,434,3434,77879,8,9,-1,-3434,0]));//1.564ms
console.timeEnd("test");
