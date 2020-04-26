//  采用二分法, 取出中间数, 数组每次和中间数比较, 小的放左边, 大的放右边
let arr = [3,1,4,6,5,7,2,8]
function quickSort (arr) {
  if (arr.length === 0) {
   return []
 }
 let cIndex = Math.floor(arr.length / 2)
 let c = arr.splice(cIndex,1)
 let l = []
 let r = []
 for (let i = 0; i < arr.length; i++) {
   if (arr[i] < c) {
     l.push(arr[i])
   } else {
     r.push(arr[i])
   }
 }
 return quickSort(l).concat(c,quickSort(r))
}
console.log(quickSort(arr))