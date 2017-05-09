/*
This insertionSort has not be optimized,and the time complexity is O(n^2).But when faced a descending order array,there will be some problems.
When the array.length <= 8 ,it is a good idea and a choice.
Read below codes, we can find that the limition is that when we search and compare, we are out of order,which means, we need from the last 
search and compare to the first.So, this is a palce which can be optimized.
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
console.log(insertSort([12,3,34,5456,5,676,323,231,21,-2,0]));
console.timeEnd("test");



/*
This has been optimized.Use the binary seach and merge!
*/
