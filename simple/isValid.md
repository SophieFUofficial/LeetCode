# 有效的括号

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

- 左括号必须用相同类型的右括号闭合。
- 左括号必须以正确的顺序闭合。

注意空字符串可被认为是有效字符串。


**示例1:**

    输入: "()"
    输出: true
    
**示例2:**  
    
    输入: "()[]{}"
    输出: true
    
**示例3:**  
    
    输入: "(]"
    输出: false
    
**示例4:**  
    
    输入: "([)]"
    输出: false
    
**示例5:**  
    
    输入: "{[]}"
    输出: true
   

#### MyCode
```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    for(let i = 0;i < s.length; i++) {
        if (s.charAt(i) === '(' || s.charAt(i) === '[' || s.charAt(i) === '{') {
            stack.push(s.charAt(i));
        }
        if (s.charAt(i) === ')') {
            if (stack.slice(-1)[0] === '(') {
                stack.pop();
            } else {
                stack.push(s.charAt(i));
            }
        }
        if (s.charAt(i) === ']') {
            if (stack.slice(-1)[0] === '[') {
                stack.pop();
            } else {
                stack.push(s.charAt(i));
            }
        }
        if (s.charAt(i) === '}') {
            if (stack.slice(-1)[0] === '{') {
                stack.pop();
            } else {
                stack.push(s.charAt(i));
            }
        }
    }
    return stack.length === 0;
};
```

### 优秀示例
```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2) return false;
    const map = {"(":")", "[":"]", "{":"}"}
    let old = s.split("");
    let now = [];

    while(old.length){
        let leftChar = old.pop();
        if(map[leftChar]){
            if(map[leftChar] != now.pop()){
                return false;
            }
        }else{
            now.push(leftChar);
        }
    }
    return true;
};
```

### 对比总结

   我的思路：用栈思想。
   
   优秀示例：用栈思想，并且用到键值对的思想。
