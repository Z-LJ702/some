//  这里的打印 不清楚为什么?
//  补充
//  网上有下面这种写法 但是下面的写法会打印0 之后报错 

// for (var i = 0; i < 5; i++) {
//   setTimeout((function(i) {
//     console.log(i);
//   })(i), i * 1000);
// }

//  报错情况如下
// 0
// timers.js:390
//     throw new ERR_INVALID_CALLBACK();
//     ^
// TypeError [ERR_INVALID_CALLBACK]: Callback must be a function

//  由于定时器的第一个参数是自执行函数 在循环时会立即执行 
//  在立即执行函数内 console.log(i) 无法保留i的值 需要函数作用域包裹
//  修改后为下面的代码

for (var i = 0; i < 5; i++) {
    setTimeout((function(i) {
      return function(){
        console.log(i);
      }
    })(i), i * 1000);
  }