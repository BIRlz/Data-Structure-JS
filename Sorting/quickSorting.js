function quickSort(arr){ 
    if (arr.length <= 1) { return arr; } 
    var pivotIndex = Math.floor(arr.length / 2);//Find the middle number's positon;
    var pivot = arr.splice(pivotIndex, 1);
    console.log(pivot);
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++){
　　　　if (arr[i] < pivot) {
　　　　　　left.push(arr[i]);
　　　　} else {
　　　　　　right.push(arr[i]);
　　　　}
　　}
    return quickSort(left).concat(pivot, quickSort(right));
}
console.time("test");
console.log(quickSort([213,43,4,5,46,57,6,87,9,8756,434,3434,77879,8,9,-1,-3434,0]));
console.timeEnd("test");
