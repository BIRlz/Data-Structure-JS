//数组实现
function Stack(){
   this.items = [];
   this.size = 0;
}
Stack.prototype = {
   constructor:Stack,
   push:function(data){
       this.items[this.size++] = data;
   },
   pop:function(){
       return this.items[--this.size];
   },
   clear:function(){
       this.size = 0;
       this.items = [];
   },
   perk:function(){
       return this.items[this.size-1];
   }
}
//链表实现
    function Stack(){
        this.top = null;
        this.size = 0;
    }
    Stack.prototype = {
        constructor:Stack,
        push:function(data){
            var node = {
                data:data,
                next:null
            };
            node.next = this.top;
            this.top = node;
            this.size++;
        },
        pop:function(){
            if(this.top === null){
                return null;
            }
            var out = this.top;
            this.top = this.top.next;
            if(this.size > 0){
                this.size--;    
            }
            return out.data;
        },
        perk:function(){
            return this.top === null ? null:this.top.data; 
        },
        clear:function(){
            this.top = null;
            this.size = 0;
        }
var stack = new Stack();
stack.push('k');
stack.push('b');
console.log(stack.perk());//输出b
stack.pop();
console.log(stack.perk());//输出k
