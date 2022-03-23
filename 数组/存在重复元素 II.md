219. 存在重复元素 II
给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。

 

示例 1：

输入：nums = [1,2,3,1], k = 3
输出：true
示例 2：

输入：nums = [1,0,1,1], k = 1
输出：true
示例 3：

输入：nums = [1,2,3,1,2,3], k = 2
输出：false


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/contains-duplicate-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

----------------------------------------------------------------

暴力法：（垃圾写法，不要学）
```js
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j] && Math.abs(i - j) <= k) {
                return true
            }
        }
    }
    return false

};
```
两个 for 循环嵌套，没什么好说的。

------------------------------

滑动窗口：
利用 set 里数据的唯一性，维护一个长度为 k 的哈希表，如果出现重复值，说明在 k 的距离内有重复的元素
每次遍历一个元素就把它加入到哈希表中，如果长度大于 k 就移除最前面的数字
思路来源于：画解算法

```js
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const s = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (s.has(nums[i])) {
            return true;
        }
        s.add(nums[i]);
        if (s.size > k) {
            s.delete(nums[i - k])
        }
    }
    return false
};
```
哈希表：
遍历这个数组，然后以数组里元素的值为哈希表的 key，当前元素的下标为 value，如果遇到重复的值，判断重复元素这一次出现的下标和上一次存在哈希表里的
下标 abs(这一次出现的下标 - 上一次出现的下标) <= k 

```js
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && (i - map.get(nums[i])) <= k) {
            return true;
        }
        map.set(nums[i], i);
    }
    return false;
};
```

