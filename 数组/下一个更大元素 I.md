496. 下一个更大元素 I
     nums1  中数字  x  的 下一个更大元素 是指  x  在  nums2 中对应位置 右侧 的 第一个 比  x  大的元素。

给你两个 没有重复元素 的数组  nums1 和  nums2 ，下标从 0 开始计数，其中 nums1  是  nums2  的子集。

对于每个 0 <= i < nums1.length ，找出满足 nums1[i] == nums2[j] 的下标 j ，并且在 nums2 确定 nums2[j] 的 下一个更大元素 。如果不存在下一个更大元素，那么本次查询的答案是 -1 。

返回一个长度为  nums1.length 的数组 ans 作为答案，满足 ans[i] 是如上所述的 下一个更大元素 。



示例 1：

输入：nums1 = [4,1,2], nums2 = [1,3,4,2].
输出：[-1,3,-1]
解释：nums1 中每个值的下一个更大元素如下所述：

- 4 ，用加粗斜体标识，nums2 = [1,3,4,2]。不存在下一个更大元素，所以答案是 -1 。
- 1 ，用加粗斜体标识，nums2 = [1,3,4,2]。下一个更大元素是 3 。
- 2 ，用加粗斜体标识，nums2 = [1,3,4,2]。不存在下一个更大元素，所以答案是 -1 。
  示例 2：

输入：nums1 = [2,4], nums2 = [1,2,3,4].
输出：[3,-1]
解释：nums1 中每个值的下一个更大元素如下所述：

- 2 ，用加粗斜体标识，nums2 = [1,2,3,4]。下一个更大元素是 3 。
- 4 ，用加粗斜体标识，nums2 = [1,2,3,4]。不存在下一个更大元素，所以答案是 -1 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/next-greater-element-i
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

```js
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const map = new Map();
  const stack = [];
  const arr = [];
  nums2.map((val) => {
    while (stack.length && val > stack[stack.length - 1]) {
      const key = stack.pop();
      map.set(key, val);
    }
    stack.push(val);
  });

  stack.forEach((val) => map.set(val, -1));
  nums1.forEach((val) => arr.push(map.get(val)));
  return arr;
}
```
思路：
使用单调栈加哈希表，
1. 创建一个临时栈，一个哈希表，遍历数组 nums2 
2. 如果当前栈无数据，则当前数字入栈备用
3. 如果当前栈有数据，循环这个栈，用当前数字和栈顶做比较：
  3.1 当前数字 > 栈顶，代表栈顶对应下一个更大的数字就是当前数字，则将该组数字对应关系记录到哈希表里，删除栈顶数字，继续做比较
  3.2 当前数字 < 栈顶，把当前数字压入栈
4. 遍历完成后，栈中剩余的数字代表无下一个更大的数，全部赋值为 -1 然后存入哈希表中即可
5. 遍历 nums1 直接从哈希表中拿对应关系即可