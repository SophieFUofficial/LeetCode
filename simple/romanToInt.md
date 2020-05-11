# 罗马数字转整数

罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。

|字符   |       数值|
| -----   | ------  |
|    I     |     1    |
|    V    |     5    |
|    X     |    10  |
|    L     |    50  |
|    C     |  100  |
|    D     |  500  |
|    M     | 1000 |

例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

- I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
- X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
- C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。

**示例1:**

    输入: "III"
    输出: 3
    
**示例2:**  
    
    输入: "IV"
    输出: 4
    
**示例3:**

    输入: "IX"
    输出: 9
    
**示例4:**

    输入: "LVIII"
    输出: 58
    解释: L = 50, V= 5, III = 3.
    
**示例5:**

    输入: "MCMXCIV"
    输出: 1994
    解释: M = 1000, CM = 900, XC = 90, IV = 4.
   

#### MyCode
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let strA = s;
    let sum = 0;
    const romanArr = [{
        name: 'I',
        value: 1,
    }, {
        name: 'V',
        value: 5,
    }, {
        name: 'X',
        value: 10,
    }, {
        name: 'L',
        value: 50,
    }, {
        name: 'C',
        value: 100,
    }, {
        name: 'D',
        value: 500,
    }, {
        name: 'M',
        value: 1000,
    }, {
        name: 'IV',
        value: 4,
    }, {
        name: 'IX',
        value: 9,
    }, {
        name: 'XL',
        value: 40,
    }, {
        name: 'XC',
        value: 90,
    }, {
        name: 'CD',
        value: 400,
    }, {
        name: 'CM',
        value: 900,
    }];
    function getNo(str) {
        if (['IV', 'IX', 'XL', 'XC', 'CD', 'CM']
        .findIndex(a => a === str.slice(0, 2)) > -1) {
            return {
                length: 2,
                value: romanArr.find(a => a.name === str.slice(0, 2)).value,
            };
        }
        return {
            length: 1,
            value: romanArr.find(a => a.name === str.slice(0, 1)).value,
        };
    }
    while(strA.length) {
        sum = sum + getNo(strA).value;
        strA = strA.slice(getNo(strA).length, strA.length);
    }
    return sum;
};
```

### 优秀示例
```javascript
var romanToInt = function(s) {
    var hashNum = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }
    var result = 0;
    for(let i = 0;i<s.length;i++){
        hashNum[s[i]] < hashNum[s[i+1]] ? result -= hashNum[s[i]] : result += hashNum[s[i]]
    }
    return result;
};
```

### 对比总结
   
     MyCode:用字符串截取的方式，枚举出罗马数字对应的值，匹配相加。
     
     优秀示例:用对象的键值对思想
     
