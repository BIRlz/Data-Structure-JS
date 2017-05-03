function Queue(){
  this.dataStore = []; // 初始化一个空数组来保存栈元素
}

// 向队尾添加一个元素
Queue.prototype.Enqueue = function(element){ 
  this.dataStore.push(element);
}

// 删除队首的元素
Queue.prototype.Dequeue = function(){ 
  return this.dataStore.shift();
}

// 读取队首元素
Queue.prototype.Front = function(){ 
  return this.dataStore[0];
}

// 读取队尾元素
Queue.prototype.Back = function(){ 
  return this.dataStore[this.dataStore.length - 1];
}

// 显示队列所有元素
Queue.prototype.ToString = function(){ 
  var retStr = '';
  for(var i = 0; i < this.dataStore.length; i++){
    retStr += this.dataStore[i] + '\n';
  }
  return retStr;
}

// 判断队列是否为空
Queue.prototype.Empty = function(){ 
  if(this.dataStore.length == 0){
    return true;
  }
  return false;
}
