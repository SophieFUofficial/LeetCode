# 回文数

判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

**示例1:**

    输入: 121
    输出: true
    
**示例2:**  
    
    输入: -121
    输出: false
    解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
    

**示例3:**

    输入: 10
    输出: false
    解释: 从右向左读, 为 01 。因此它不是一个回文数。
   

#### MyCode
```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let flag = false;
    if (x >= 0) {
        const str = String(x).split('').reverse().join('');
        if (Number(str) === x) {
            flag = true;
        }
    }
    return flag;
};
```

### 优秀示例
```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false;
    if(x < 10) return true; 
    let right = 1;
    let left = 0;//初始为 x的总位数
    let sum = x;
    while(sum >= 1){//算出总位数
        sum /= 10;
        left++;
    }
    //获取第n位的数
    let getNum = (_x, n) => {
        return Math.floor(_x % Math.pow(10, n) / Math.pow(10, n - 1));
    }
    while(left > right){
        if(getNum(x, left) != getNum(x, right)) return false;
        left--;
        right++;
    }
    return true;
};
```

### 对比总结
   
     MyCode:还是转成字符串进行比较，暴力解题法。
     
     优秀示例:双指针，逐位进行判断。
     


### 顺便复习一下JavaScript中Math对象： 
| 方法          | 描述   |
| :-------:    | :-----:  |
| abs(x)       | 返回数的绝对值。   |
| acos(x)      | 返回数的反余弦值。   |
| asin(x)      | 返回数的反正弦值。    |
| atan(x)      | 以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。  |
| atan2(y,x)   | 返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）。    |
| ceil(x)      | 对数进行上舍入。    |
| cos(x)       | 返回数的余弦。    |
| exp(x)       | 返回 e 的指数。    |
| floor(x)     | 对数进行下舍入。    |
| log(x)       | 返回数的自然对数（底为e）。    |
| max(x,y)     | 返回 x 和 y 中的最高值。    |
| min(x,y)     | 返回 x 和 y 中的最低值。    |
| pow(x,y)     | 返回 x 的 y 次幂。    |
| random()     | 返回 0 ~ 1 之间的随机数。    |
| round(x)     | 把数四舍五入为最接近的整数。    |
| sin(x)       | 返回数的正弦。    |
| sqrt(x)      | 返回数的平方根。    |
| tan(x)       | 返回角的正切。    |
| toSource()   | 返回该对象的源代码。    |
| valueOf()    | 返回 Math 对象的原始值。    |
