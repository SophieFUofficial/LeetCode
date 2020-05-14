# 排序

### 快速排序
- 以一个数为基准(中间的数)，比基准小的放到左边，比基准大的放到右边
- 再按此方法对这两部分数据分别进行快速排序（递归进行）
- 不能再分后退出递归，并重新将数组合并
```javascript
function quickSort(arr, i, j) {
  if(i < j) {
    let left = i;
    let right = j;
    let pivot = arr[left];
    while(i < j) {
      while(arr[j] >= pivot && i < j) {  // 从后往前找比基准小的数
        j--;
      }
      if(i < j) {
        arr[i++] = arr[j];
      }
      while(arr[i] <= pivot && i < j) {  // 从前往后找比基准大的数
        i++;
      }
      if(i < j) {
        arr[j--] = arr[i];
      }
    }
    arr[i] = pivot;
    quickSort(arr, left, i-1);
    quickSort(arr, i+1, right);
    return arr;
  }
}
```

### 合并排序
- 将一个数组拆成A、B两个小组，两个小组继续拆，直到每个小组只有一个元素为止。
- 按照拆分过程逐步合并小组，由于各小组初始只有一个元素，可以看做小组内部是有序的，合并小组可以被看做是合并两个有序数组的过程。
- 对左右两个小数列重复第二步，直至各区间只有1个数。
```javascript
// 融合两个有序数组，这里实际上是将数组 arr 分为两个数组
function mergeArray(arr, first, mid, last, temp) {
  let i = first; 
  let m = mid;
  let j = mid+1;
  let n = last;
  let k = 0;
  while(i<=m && j<=n) {
    if(arr[i] < arr[j]) {
      temp[k++] = arr[i++];
    } else {
      temp[k++] = arr[j++];
    }
  }
  while(i<=m) {
    temp[k++] = arr[i++];
  }
  while(j<=n) {
    temp[k++] = arr[j++];
  } 
  for(let l=0; l<k; l++) {
    arr[first+l] = temp[l];
  }
  return arr;
}
// 递归实现归并排序
function mergeSort(arr, first, last, temp) {
  if(first<last) {
    let mid = Math.floor((first+last)/2);
    mergeSort(arr, first, mid, temp);    // 左子数组有序
    mergeSort(arr, mid+1, last, temp);   // 右子数组有序
    arr = mergeArray(arr, first, mid, last, temp);  
  }
  return arr;
}
```

### 选择排序
- 假设未排序序列的第一个是最大值，记下该元素的位置，从前往后比较
- 若某个元素比该元素大，覆盖之前的位置
- 重复第二个步骤，直到找到未排序的末尾
- 将未排序元素的第一个元素和最大元素交换位置
- 重复前面几个步骤，直到所有元素都已经排序。
```javascript
function selsetSort(arr){
	var len = arr.length;
	var index;
	for(var i=0;i<len-1;i++){
		index=i;
		for(var j=i+1;j<len;j++){
			if(arr[index]>arr[j]){//寻找最小值
				index=j;//保存最小值的索引
			}
		}
		if(index!=i){
		var temp =arr[i];
		arr[i]=arr[index];
		arr[index]=temp;
	}
	}
	return arr;
}
```

### 插入排序
```javascript
function insertSort(arr) {
  let length = arr.length;
  for(let i = 1; i < length; i++) {
    let temp = arr[i];
    let j = i;
    for(; j > 0; j--) {
      if(temp >= arr[j-1]) {
        break;      // 当前考察的数大于前一个数，证明有序，退出循环
      }
      arr[j] = arr[j-1]; // 将前一个数复制到后一个数上
    }
    arr[j] = temp;  // 找到考察的数应处于的位置
  }
  return arr;
}
```

### 冒泡排序
比较相邻两个数，如果前者大于后者，就把两个数交换位置；这样一来，第一轮就可以选出一个最大的数放在最后面；那么经过n-1轮，就完成了所有数的排序
```javascript
function bubbleSort(arr){
            var len=arr.length,j;
            var temp;
            while(len>1){
                for(j=0;j<len-1;j++){
                    if(arr[j]>arr[j+1]){
                        temp=arr[j];
                        arr[j]=arr[j+1];
                        arr[j+1]=temp;
                    }
                }
                len--;
            }
            return arr;
        }
```
