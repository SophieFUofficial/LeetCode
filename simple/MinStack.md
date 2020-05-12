# 最小栈

设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

- push(x) —— 将元素 x 推入栈中。
- pop() —— 删除栈顶的元素。
- top() —— 获取栈顶元素。
- getMin() —— 检索栈中的最小元素。

**示例:**

    输入：
    ["MinStack","push","push","push","getMin","pop","top","getMin"]
    [[],[-2],[0],[-3],[],[],[],[]]
    
    输出：
    [null,null,null,null,-3,null,0,-2]
    
    解释：
    MinStack minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    minStack.getMin();   --> 返回 -3.
    minStack.pop();
    minStack.top();      --> 返回 0.
    minStack.getMin();   --> 返回 -2.

#### MyCode
```javascript
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this._stack = [];
    this.min_ele = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this._stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this._stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this._stack.slice(-1);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min = this._stack[0];
    for(let i = 0; i < this._stack.length; i++) {
        if (this._stack[i] <= min) {
            min = this._stack[i];
        }
    }
    this.min_ele = min;
    return min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```

### 优秀示例
```javascript
var MinStack = function() {
    this.x_stack = [];
    this.min_stack = [Infinity];
};

MinStack.prototype.push = function(x) {
    this.x_stack.push(x);
    this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], x));
};

MinStack.prototype.pop = function() {
    this.x_stack.pop();
    this.min_stack.pop();
};

MinStack.prototype.top = function() {
    return this.x_stack[this.x_stack.length - 1];
};

MinStack.prototype.getMin = function() {
    return this.min_stack[this.min_stack.length - 1];
};
```

### 对比总结
   
     MyCode:我感觉这道题主要考察构造函数，还有原型链的知识、可以顺便复习一下。代码本身不是特别难。
     
     优秀示例:跟我的差不多，不过最小值是每次都会重新计算。
     
