//  指隔1000ms后,定时器代码被添加到队列中,
//  等待JavaScript进程空闲后(for循环执行完毕),(定时器)代码才执行
for (var i = 0; i < 5; i++) {
  (function(i) {
    setTimeout(function() {
      console.log(i);
    }, i * 1000);
  })(i);
}
//1 2 3 4 5