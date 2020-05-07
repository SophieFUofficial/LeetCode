# 两数相加

给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

**示例:**

    输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
    输出：7 -> 0 -> 8
    原因：342 + 465 = 807


#### MyCode1
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let emp = [];
    function transferNode(node) {
        if(node && node.val !== null) {
            emp.push(node.val);
            transferNode(node.next)
        }
        return emp;
    }
    const numl1 = Number(transferNode(l1).reverse().join(''));
    console.log(numl1, 'numl1');
    emp = [];
    const numl2 = Number(transferNode(l2).reverse().join(''));
    console.log(numl2, 'numl2');
    const newl = String(numl1 + numl2).split('');
    function transferArr(ary) {
        const arr = ary.reverse();
        if (!arr.length) {
            return null;
        }
        let node = {};
        let head = {
            val: arr[0],
            next: null,
        };
        let pnode = head;
        for (let i = 1; i <arr.length; i++) {
            node = {
                val: arr[i],
                next: null,
            };
            pnode.next = node;
            pnode = node;
        }
        return head;
    }
    return transferArr(newl);
};
```

### 优秀示例
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const result = p = {};
    while (l1 || l2) {
        // 求和
        const sum = (l1 && l1.val || 0) + (l2 && l2.val || 0) + (p.val || 0);
        // 取模
        const exceed = parseInt(sum / 10);

        l1 = l1 && l1.next;
        l2 = l2 && l2.next;

        // 取余
        p.val = sum % 10;
        // 判断是否需要进位（新增链表节点）（试试不带 if 条件跑一遍就明白了）
        if (l1 || l2 || exceed) {
            p.next = { val: exceed };
        }

        p = p.next;
    }
    return result
};

```

### 对比总结
   MyCode1中的代码是我的初始思路，将链表转换成数字相加再进行后续操作。但由于没有考虑到JavaScript自动转换科学计数法，所以，这条思路失败、
   然后就参照了一下其他人的思路、
