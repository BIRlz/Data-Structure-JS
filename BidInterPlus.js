var strAdd = function(srcA, srcB) {
    var i, temp, tempA, tempB, len, lenA, lenB, carry = 0;
    var res = [],
    arrA = [],
    arrB = [],
    cloneArr = [];
    arrA = srcA.split('');
    arrB = srcB.split('');
    arrA.reverse();
    arrB.reverse();
    lenA = arrA.length;
    lenB = arrB.length;
    len = lenA > lenB ? lenB: lenA;
    for (i = 0; i < len; i++) {
        tempA = parseInt(arrA[i], 10);
        tempB = parseInt(arrB[i], 10);
        temp = tempA + tempB + carry;
        if (temp > 9) {
            res.push(temp - 10);
            carry = 1;
        } else {
            res.push(temp);
            carry = 0;
        }
    }
    cloneArr = lenA > lenB ? arrA: arrB;
    for (; i < cloneArr.length; i++) {
        tempA = parseInt(cloneArr[i], 10);
        temp = tempA + carry;
        if (temp > 9) {
            res.push(temp - 10);
            carry = 1;
        } else {
            res.push(temp);
            carry = 0;
        }
    }
    return (res.reverse()).join('');
};
