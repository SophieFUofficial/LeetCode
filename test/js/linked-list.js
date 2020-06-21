function Node(element) {
    this.val = element;
    this.next = null;
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    // 获取指定位置的节点
    getElementAt(position) {
        // 当下标小于0或者大于链表长度时，返回null
        if (position < 0 || position >= this.length) {
            return null;
        }

        let current = this.head;
        for (let i = 0; i < position; i++) {
            current = current.next;
        }
        return current;
    }

    // 获取指定的节点
    getElement(element) {
        let current = this.head;
        while (current && current.val !== element) {
            current = current.next;
        }
        return current;
    }

    // 向链表末尾添加元素
    append(element) {
        let node = new Node(element);
        // 如果当前链表为空，则head指向node
        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.getElementAt(this.length - 1);
            current.next = node;
        }
        this.length++; // 长度+1
    }

    // 向链表的任意位置插入元素
    insertAt(element, position) {
        // 判断position是否越界
        if (position < 0 || position > this.length) {
            return null;
        }

        let node = new Node(element);
        if (position === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            // 找到需要插入位置的前一个元素
            let previous = this.getElementAt(position - 1);
            node.next = previous.next;
            previous.next = node;
        }
        this.length++;
        return true;
    }

    // 查找到某一元素后，在其后插入元素
    insert(newElement, element) {
        let node = new Node(newElement);
        let current = this.getElement(element);
        if (current && current.val) {
            node.next = current.next;
            current.next = node;
            return  true;
        } else {
            return false;
        }
    }

    // 删除指定位置的元素
    removeAt(position) {
        // 判断position是否越界
        if (position < 0 || position >= this.length) {
            return null;
        }

        let current = this.head;
        if (position === 0) {
            this.head = current.next;
        } else {
            let previous = this.getElementAt(position - 1);
            current = previous.next;
            previous.next = current.next;
        }
        this.length--;
        return current.val;
    }

    // 删除某个元素（第一个）
    remove(element) {
        const head = this.head;
        // 还是需要找到前一个节点
        function findPrev() {
            let current = head;
            while(current.next !== null && current.next.val !== element) {
                current = current.next;
            }
            return current;
        }

        let prevNode = findPrev();
        if (prevNode.next !== null) {
            prevNode.next = prevNode.next.next;
        }
        this.length--;
    }

    // 查找指定元素的索引（第一个）
    indexOf(element) {
        let current = this.head;
        for(let i = 0; i < this.length; i++) {
            if (current.val === element) {
                return i;
            } else {
                current = current.next;
            }
        }
        return -1;
    }

    display() {
        let current = this.head;
        let str = '';
        while(current && current.val) {
            str = str + JSON.stringify(current.val) + '->';
            current = current.next;
        }
        return str.slice(0, str.length -2);
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }

    getHead() {
        return this.head;
    }

    clear() {
        this.head = null;
        this.length = 0;
    }
}

const consoleResult = () => {
    const linked = new LinkedList();
    linked.append('0');
    linked.append('1');
    linked.append('2');
    linked.append('3');
    linked.append('4');
    console.log(linked.display(), 'display');
    console.log(linked.remove('1'), 'getElementAt1')
    console.log(linked.removeAt(2), 'getElementAt8')
    console.log(linked.display(), 'display');
};

