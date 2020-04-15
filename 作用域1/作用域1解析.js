//  函数提升优先级比变量提升要高, 函数提升在 块级作用域 内提升, 函数声明在函数级作用域内同步
var a = 0;
if(true){
    console.log(a,window.a);// 函数提升，是块级作用域，输出 function a 和 0
    a = 1;  // 取作用域最近的块级作用域的 function a ,且被重置为 1了，本质又是一个 变量的赋值。
    console.log(a,window.a);// a 是指向块级作用域的 a, 输出 1 和 0 
    function a(){} 
    // ****函数的声明，将执行函数的变量的定义同步到函数级的作用域****。
    //  函数变量不会被普通变量声明覆盖，但是会被变量赋值覆盖, 普通变量声明会被同名函数变量声明覆盖。
    //  1.如果此时函数变量未进行 a = 1 的赋值操作 
    //  那么函数声明只会使函数变量a覆盖上面变量a window.a = func a() {}
    //  2.而此时函数声明时 函数变量a进行了赋值操作 a = 1 那么上面变量a被函数变量a覆盖 再被赋值覆盖 a = 1
    console.log(a,window.a);// 输出 1 和 1  => window.a = function a = 1
    a = 21; // 仍然是函数定义块级作用域的 a ,重置为 21
    console.log(a,window.a); // 输出为函数提升的块级作用域的 a, 输出 21，1
    console.log("里面",a);
}
console.log("外部",a);
console.log("外部",typeof(a));