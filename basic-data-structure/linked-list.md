# 链表（主要是单向链表，双向链表多了个之前前面元素的指针）

#### 初始化节点
- 指针指向空
- 存储数据
```javascript
function Node(element) {
    this.element = element;   //当前节点的元素
    this.next = null;         //下一个节点链接
}
```

#### 初始化单向链表
- 每个链表都有一个头指针，指向第一个节点，没节点则指向NULL
```javascript
function LList () {
    this.head = new Node( 'head' );     //头节点
    this.find = find;                   //查找节点
    this.insert = insert;               //插入节点
    this.remove = remove;               //删除节点
    this.findPrev = findPrev;           //查找前一个节点
    this.display = display;             //显示链表
}
```

#### 查找给定节点
- 创建一个新节点，将链表的头节点赋给这个新创建的节点
- 在链表上循环，如果当前节点的 element 属性和我们要找的信息不符，就将当前节点移动到下一个节点，如果查找成功，该方法返回包含该数据的节点；否则，就会返回null。
```javascript
function find ( item ) {
    var currNode = this.head;
    while ( currNode.element != item ){
        currNode = currNode.next;
    }
    return currNode;
}
```

#### 插入节点（插入到头节点之后）
- 一旦找到了节点，我们就可以将新的节点插入到链表中了
```javascript
function insert ( newElement , item ) {
    var newNode = new Node( newElement );
    var currNode = this.find( item );
    newNode.next = currNode.next;
    currNode.next = newNode;
}
```

#### 显示链表
```javascript
function display () {
    var currNode = this.head;
    while ( !(currNode.next == null) ){
        console.log( currNode.next.element );
        currNode = currNode.next;
    }
}
```

#### 从链表中删除一个节点
- 从链表中删除节点时，我们先要找个待删除节点的前一个节点，找到后，我们修改它的 next 属性，使其不在指向待删除的节点，而是待删除节点的下一个节点。那么，我们就得需要定义一个 findPrevious 方法遍历链表，检查每一个节点的下一个节点是否存储待删除的数据。如果找到，返回该节点，这样就可以修改它的 next 属性了。 findPrevious 的实现如下：
```javascript
function findPrev( item ) {
    var currNode = this.head;
    while ( !( currNode.next == null) && ( currNode.next.element != item )){
        currNode = currNode.next;
    }
    return currNode;
}
```
- 然后实现删除操作
```javascript
function remove ( item ) {
    var prevNode = this.findPrev( item );
    if( !( prevNode.next == null ) ){
        prevNode.next = prevNode.next.next;
    }
}
```


## 双向链表的代码实现
```javascript
function Node(element) {
    this.element = element;   //当前节点的元素
    this.next = null;         //下一个节点链接
    this.previous = null;         //上一个节点链接
}

//链表类

function LList () {
    this.head = new Node( 'head' );
    this.find = find;
    this.findLast = findLast;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.dispReverse = dispReverse;
}

//查找元素

function find ( item ) {
    var currNode = this.head;
    while ( currNode.element != item ){
        currNode = currNode.next;
    }
    return currNode;
}

//查找链表中的最后一个元素

function findLast () {
    var currNode = this.head;
    while ( !( currNode.next == null )){
        currNode = currNode.next;
    }
    return currNode;
}


//插入节点

function insert ( newElement , item ) {
    var newNode = new Node( newElement );
    var currNode = this.find( item );
    newNode.next = currNode.next;
    newNode.previous = currNode;
    currNode.next = newNode;
}

//显示链表元素

function display () {
    var currNode = this.head;
    while ( !(currNode.next == null) ){
        console.debug( currNode.next.element );
        currNode = currNode.next;
    }
}

//反向显示链表元素

function dispReverse () {
    var currNode = this.findLast();
    while ( !( currNode.previous == null )){
        console.log( currNode.element );
        currNode = currNode.previous;
    }
}

//删除节点

function remove ( item ) {
    var currNode = this.find ( item );
    if( !( currNode.next == null ) ){
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
}

```
