//  这里的打印 不清楚为什么?
for (var i = 0; i < 5; i++) {
  setTimeout((function(i) {
    console.log(i);
  })(i), i * 1000);
}
//0 1 2 3 4