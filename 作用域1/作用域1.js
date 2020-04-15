var a = 0;
if(true){
    // a = 1; 将a = 1 注释的话 外部打印function a () {}
    a = 1
    function a(){}
    a = 21;
    console.log("里面",a);
}
console.log("外部",a);