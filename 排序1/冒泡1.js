//  比较相邻两个数, 如果后一个比前一个小, 换位置
let arr = [3,1,4,6,5,7,2]
function arrSort (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 -i; j++) {
      if (arr[j + 1 ] < arr[j]) {
        let arrMore = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = arrMore
      }
    }
  }
  return arr
}
console.log(arrSort(arr))
