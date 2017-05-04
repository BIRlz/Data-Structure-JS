function DoubleLinkList(ele){
    this.queue = [];
}
DoubleLinkList.prototype.LeftPush = function(ele){
    this.queue.push(ele);
}
DoubleLinkList.prototype.RightPush = function(ele){
    this.queue = this.queue.reverse();//My idea is that reverse this queue,
     //which turns the base to the top!
    this.queue.push(ele);
    this.queue = this.queue.reverse();//And REreserve!
}
DoubleLinkList.prototype.LeftPop = function(){
    this.queue.pop();
}
DoubleLinkList.prototype.RightPop = function(){
    this.queue = this.queue.reverse();//My idea is the same to bellow;
    this.queue.pop();
    this.queue = this.queue.reverse();
}
DoubleLinkList.prototype.display = function(){
    var temp = '';
    for(var i = 0;i<this.queue.length;i++){
        temp += this.queue[i] + '\n';
    }
    return temp;
}
var NewQueue = new DoubleLinkList();
NewQueue.LeftPush("lizhuo2");
NewQueue.RightPush("lizhuo3");
NewQueue.LeftPush("lizhuo1");
NewQueue.RightPush("lizhuo4");
NewQueue.display();
console.log('\\n')



NewQueue.LeftPop();
NewQueue.RightPop();
NewQueue.display();

