# 堆栈

堆栈:是一种支持后进先出(LIFO)的集合,即后被插入的数据,先被取出。

#### 初始化
```javascript
class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }

  length() {
    return this.items.length;
  }
}
```
