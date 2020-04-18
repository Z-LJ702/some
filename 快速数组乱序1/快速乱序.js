let arr = [1,2,3,4,5,6,7,8,9,10]
arr.sort(function() {
  return Math.random() - 0.5
  //  当数组arr调用sort方法时 可在sort方法的第一个参数内 
  //  写成arr.sort((a, b) => a - b) 此时会返回一个排序的数组
  //  而题目是返回一个乱序的数组 那么让return后面的值 正数和负数随机切换就可以了
  //  即return Math.random() - 0.5 相当于0到1的随机数与0.5的差 会正与负随机切换 实现乱序
  //  这种方法简单但是有漏洞 可能出现数组内的元素原地不动的情况
  //  不是完全打乱,当数据量大的时候此情况会更明显
})
// console.log(arr)


//2. 经典洗牌算法实现
function shuffle(array) { 
  let arrayLength = array.length,   
      randomIndex,  //随机数   
      tempItem;     //临时存储元素  
  for (let i = arrayLength - 1; i >= 0; i--) {    
      randomIndex = Math.floor(Math.random() * (i + 1));    
      tempItem = array[randomIndex];    
      array[randomIndex] = array[i];    
      array[i] = tempItem;  
  }  
  return array;
}
console.log(shuffle(arr))