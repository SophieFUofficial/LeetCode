# 最长公共前缀

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

**示例1:**

    输入: ["flower","flow","flight"]
    输出: "fl"
    
**示例2:**  
    
    输入: ["dog","racecar","car"]
    输出: ""
    解释: 输入不存在公共前缀。
    
说明:

所有输入只包含小写字母 a-z 。
   

#### MyCode
```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const firStr = strs[0] || '';
    let tarStr = '';
    for (let i = 0; i <= firStr.length; i++) {
        if (strs.every(s => s.indexOf(firStr.slice(0, i)) === 0)) {
            tarStr = firStr.slice(0, i);
        }
    }
    return tarStr;
};
```

### 优秀示例
```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length) return "";
    let idx = 0, n;
    while(idx < strs[0].length){//遍历比较方，得到字符位置idx
        n = 1;
        while(n < strs.length){//遍历判断剩余n个字符串
            if(strs[n][idx] != strs[0][idx]){//比较字符
                return strs[0].substring(0, idx);
            }
            n++;
        }
        idx++;
    }
    return strs[0];
}
```

### 对比总结

   我的思路：取数组第一个元素，逐个向后对比数组的每一个元素是否以当前字符开头。（怎么觉得只要涉及到遍历，就很蠢、难过）
   
   优秀示例：取第一个字符串作为比较方 然后遍历判断剩余n个字符串
        第n个字符串和比较方 去比较相同位置的idx的字符是否一致
