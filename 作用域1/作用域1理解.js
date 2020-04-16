var a = 0;
console.log(window.a,a);
if(true){
  console.log(window.a,a);
  // a = 1
  function a(){}
  console.log(window.a,a,"=>函数定义的时候,函数变量a将函数作用域的a=0覆盖");
  a = 21;
  console.log("里面",a);
}
console.log(window.a,a);
