function Stack(){
    this.dataStack = [];
    this.pop = 0;//Memorize the top of the Stack and length
}
//Go into the Stack
Stack.prototype.push = function(ele){
    this.dataStack[this.pop++]=ele; 
}

//Out of the Stack
Stack.prototype.pop = function(){
    return this.dataStack[--this.pop];
}

//Clear
Stack.prototype.clear = function(){
    this.pop = 0;
}

//Length
Stack.prototype.getLength = function(){
    return this.top;
}

//retur the peep of the Stack
Stack.prototype.peep = function(){
    return this.dataStack[top-1];
}
