/*
This insertionSort has not be optimized,and the time complexity is O(n^2).
But when faced a descending order array,there will be some problems.
When the array.length <= 8 ,it is a good idea and a choice.
Read below codes, we can find that the limition is that when we search and compare, we are out of order,which means, 
we need from the last atom search and compare to the first.So, this is a palce which can be optimized.
*/
function insertSort(array){
    for(var i = 1;i < array.length;i++){//We image the first atom,array[0] has been sorted.
        for(var j = i ; j > 0;j--){//From the array[i] back to array[0], sort!
                if(array[j-1] > array[j]){//ascending sort
                var temp = array[j-1];//This way can decrease the swaping nums!
                array[j-1] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}
console.time("test");
console.log(insertSort([12,3,34,5456,5,676,323,231,21,-2,0]));//[ -2, 0, 3, 5, 12, 21, 34, 231, 323, 676, 5456 ]
console.timeEnd("test");//test: 1.494ms



/*
This has been optimized.Use the binary seach and merge!
*/
function binaryInsertSort(array){//Use binarySearch
    for(var i = 1 ;i < array.length;i++){
        var temp = array[i],
                right = i-1,left = 0;
        while(left <= right){
            var middle = parseInt((left + right)/2);
            if(temp < array[middle]){
                left = middle -1;
            }else{
                right = middle + 1;
            }//Binary search!
        }
        //Succeed!
        for(var j = i - 1;j >= left;j--){
            array[j + 1] = array[j];
        }
        array[left] = temp;
    }
    return array;
}

console.time("test");
console.log(binaryInsertSort([12,3,34,5456,5,676,323,231,21,-2,0]));
console.timeEnd("test");//test: 0.892ms
