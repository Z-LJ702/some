//  1语法
//  arr.reduce(callback,[initialValue])

// callback （执行数组中每个值的函数，包含四个参数）
//     1、previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
//     2、currentValue （数组中当前被处理的元素）
//     3、index （当前元素在数组中的索引）
//     4、array （调用 reduce 的数组）
// initialValue （作为第一次调用 callback 的第一个参数。）

//  第一个例子 prev未设置默认值 循环3次
//  在arr为空数组[]时会报错 
//  报错，"TypeError: Reduce of empty array with no initial value"
//  所以设置默认值更安全
// var arr = [1, 2, 3, 4];
// var sum = arr.reduce(function(prev, cur, index, arr) {
//     console.log(prev, cur, index);
//     return prev + cur;
// })
// console.log(arr, sum);
// 打印结果：
// 1 2 1
// 3 3 2
// 6 4 3
// [1, 2, 3, 4] 10

// var  arr = [1, 2, 3, 4];
// var sum = arr.reduce(function(prev, cur, index, arr) {
//     console.log(prev, cur, index);
//     return prev + cur;
// }，0) //注意这里设置了初始值
// console.log(arr, sum);

// 打印结果：
// 0 1 0
// 1 2 1
// 3 3 2
// 6 4 3
// [1, 2, 3, 4] 10

//  reduce简单用法
var  arr = [1, 2, 3, 4];
var sum = arr.reduce((x,y)=>x+y)
var mul = arr.reduce((x,y)=>x*y)
console.log( sum ); //求和，10
console.log( mul ); //求乘积，24