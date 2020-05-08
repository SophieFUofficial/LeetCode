# 整数反转

给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

**示例1:**

    输入: 123
    输出: 321
    
**示例2:**  
    
    输入: -123
    输出: -321
    
**示例3:**

    输入: 120
    输出: 21
   

#### MyCode
```javascript
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reverseNo = 0;
    if (x >= 0) {
        reverseNo = Number(String(x).split('').reverse().join(''));
    } else {
        reverseNo = -Number(String(-x).split('').reverse().join(''));
    }
    if (reverseNo > 2147483647 || reverseNo < -2147483648) {
        reverseNo = 0;
    }
    return reverseNo;
};
```

### 优秀示例
```javascript
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let ord = Math.abs(x);//去符号
    let now = 0;
    while(ord > 0){
        now = now * 10 + ord % 10;
        ord = Math.floor(ord / 10);
    }
    if(x < 0){
        return now <= Math.pow(2,31) ? -now : 0;
    }else{
        return now < Math.pow(2,31) ? now : 0;
    }
};
```

### 对比总结
   我的思路：数字转成数组再进行反转，溢出部分自己判断、有点low。
   优秀示例：取余（也有思路是转字符串进行反转的）。主要学一个Math.pow()的api。
