//  递归克隆
const obj = {
  a:[2,6,{b:{c:[3,2,5]}}],
  d:{f:[0,6,8,[9,5,3,{g:{h:[5,6]}}]]},
  i:6
}
function clone (obj) {
  let buf
  if (obj instanceof Array) { //  数组
    buf = []
    let len = obj.length
    while (len--){
      buf[len] = clone(obj[len])
    }
    return buf
  } else if (obj instanceof Object) { //  对象
    buf = {}
    for (const k in obj) {
      buf[k] = clone(obj[k])
    }
    return buf
  } else {                    //  普通
    return obj
  } 
}
let newObj = clone(obj)
// let newObj = JSON.parse(JSON.stringify(obj))
//  克隆结果相同 是有嵌套层数限制 三层就不继续了
//  JSON方法的深拷贝有局限性
//  1.会忽略 undefined
//  2.会忽略symbol
//  3.函数不能被序列化
//  4.不能解决循环引用的对象
console.log(newObj)
//  { a: [ 2, 6, { b: [Object] } ],
//   d: { f: [ 0, 6, 8, [Array] ] },
//   i: 6 }