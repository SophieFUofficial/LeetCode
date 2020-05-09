# x 的平方根

实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。


**示例1:**

    输入: 4
    输出: 2
    
**示例2:**  
    
    输入: 8
    输出: 2
    说明: 8 的平方根是 2.82842..., 
         由于返回类型是整数，小数部分将被舍去。
   

#### MyCode1
```javascript
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let target = 0;
    for(let i = 0; i <= x; i++) {
        if (i * i <= x) {
            target = i;
        }
    }
    return target;
};
```

#### MyCode2
```javascript
var mySqrt = function(x) {
    let target = 0;
    while(!(target * target <= x && ((target + 1) * (target + 1) > x))){
        target++;
    }
    return target;
};
```

### 优秀示例
```javascript
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0, right = x, result = 0;
    let middle = 0;
    while(left <= right){
        middle = Math.floor((left + right)/2);
        if(middle * middle <= x){
            result = middle;
            left = middle + 1;
        }else{
            right = middle - 1;
        }
    }
    return result;
};
```

### 对比总结
   
     MyCode1:这是第一遍想的时候，想着遍历一遍0~x，一个一个乘，就可以得到结果、但是当x特别大的时候就从头到尾
     遍历一遍，超出运行时长了、、、 
     
     MyCode2:用while就不超时了、、我的个老天鹅，学到了~
     
     优秀示例:用二分法写，时间复杂度较低，还有个啥牛顿迭代法，用代码实现数学公式计算，看不懂看不懂、、
