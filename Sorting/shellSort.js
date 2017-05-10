function shellSort(array){
    var gap = Math.floor(array.length / 2);//Divide the array
    while(gap !== 0 ){
        for(var i = gap ; i < array.length;i++){
            for(var j = i;j > 0 ;j -= gap){
                if(array[j - gap] > array[j]){//part swap.And ascending order.
                    var temp = array[j - gap];
                    array[j - gap ] = array[j];
                    array[j] = temp; 
                }
            }
        }
        gap = Math.floor(gap / 2);//Divide again ,until gap down to 0.
    }
    return array;
}
console.time("test");
console.log(shellSort([213,43,4,5,46,57,6,87,9,8756,434,3434,77879,8,9,-1,-3434,0]));
console.timeEnd("test");
