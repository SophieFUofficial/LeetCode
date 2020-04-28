# 两数之和

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

**示例:**

    给定 nums = [2, 7, 11, 15], target = 9
      
    因为 nums[0] + nums[1] = 2 + 7 = 9
    所以返回 [0, 1]


#### MyCode
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++) {
        if(nums.findIndex(v => (v + nums[i]) === target) > -1
         && nums.findIndex(v => (v + nums[i]) === target) !== i) {
            return [i, nums.findIndex(v => (v + nums[i]) === target)];
        }
    }
    return [];
};
```

### 优秀示例
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let i = nums.length;
    while(i > 1) {
        let last = nums.pop();
        if (nums.indexOf(target - last) > -1) {
            return [nums.indexOf(target - last), nums.length]
        }
        i--
    }
};
```

### 对比总结
   算法复杂度低的遍历次数少，findIndex方法每次都要遍历，复杂度极高。
   优秀示例中的采用数组的pop()方法，找到满足条件的便不再遍历。

