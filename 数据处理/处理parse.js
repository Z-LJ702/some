//  软通动力的面试题 写一个处理数据的函数 目前能力有限 有待再优化
//  公交线路从小到大排列 
//  地铁在公交后 地铁号从小到大排列 
//  机场线路及其他 在最后 按字符从短到长排列
const res = {
  data: {
    linedetails: {
      lwd:{
        name:'机场大巴线'
      },
      lwe:{
        name:'301路'
      },
      lwi:{
        name:'地铁5号线'
      },
      lpi:{
        name:'地铁13号线'
      },
      ldf:{
        name:'107路'
      },
      lzb:{
        name:'20路'
      },
      lxi:{
        name:'5路'
      },
      loi:{
        name:'机场快轨'
      },
      lvi:{
        name:'机场大巴线环线'
      }
    }
  }
}
function parse (res) {
  const arr = []
  const jsonstr = res.data.linedetails
  for (let key in jsonstr) {
    
    arr.push({[key]:jsonstr[key]})
  }
  const dataName = (arr) => {
    let arr2 = []
    let arr3 = []
    let arr4=  [] 
    for (let i = 0; i < arr.length; i++) {
      let arrName = Object.values(arr[i])
      let itemName = Object.values(arrName[0])
      
      if (itemName[0].indexOf('路') !==-1){
        arr2.push(itemName[0])
      }else if(itemName[0].indexOf('地铁') !==-1){
        arr3.push(itemName[0])
      }else{
        arr4.push(itemName[0]) 
      }
    }
    const arrSort  = function (arr) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
          if (arr[i].indexOf('路') !==-1){
            if(parseInt(arr[i])>parseInt(arr[j])){
              const c =  arr[i]
              arr[i] = arr[j]
              arr[j] = c
          }
          }else if(arr[i].indexOf('地铁') !==-1){
            if (parseInt(arr[i].slice(2,4))>parseInt(arr[j].slice(2,4))){
              const c =  arr[i]
              arr[i] = arr[j]
              arr[j] = c
            }
          }else{
            if(arr[i].length>arr[j].length){
              const c =  arr[i]
              arr[i] = arr[j]
              arr[j] = c
            }
          }
        }  
      }
      return arr
    }
    arr2 = arrSort(arr2)
    arr3 = arrSort(arr3)
    arr4 = arrSort(arr4)
    const arr5 = arr2.concat(arr3,arr4)
    const dataArr = function(arr,arr5) {
      for (let i = 0; i < arr5.length; i++) { 
        for (let j = 0; j < arr.length; j++) {
          let arrName = Object.values(arr[j])
          let itemName = Object.values(arrName[0])
          if(itemName[0]===arr5[i]){
            const d = arr[i]
            arr[i] = arr[j]
            arr[j] = d
          }
        }
      }
      arr.length = arr5.length 
      return arr
    }
    return dataArr(arr,arr5)
  }
  return dataName(arr)
}
const b = parse(res)
console.log(b)