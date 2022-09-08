const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  //code here
  if (arrayOfString === undefined || arrayOfString === null) { 
    return undefined 
  }
  else {
    let ans = [arrayOfString[0]]
    for (let i = 1 ; i < arrayOfString.length; i++) {
      if (arrayOfString[i].length > ans[0].length) {
        ans = [arrayOfString[i]] 
      }
      else if(arrayOfString[i].length === ans[0].length) {
        ans.push(arrayOfString[i]) // ถ้าเจอค่าเท่ากันตัวนี้จะทำให้ดึงมาอยู่ด้วย
      }
    } return ans 
  }
}
module.exports = getMaxLengthString
