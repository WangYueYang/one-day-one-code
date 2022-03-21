// 217. 存在重复元素
// 给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。
//  

// 示例 1：

// 输入：nums = [1,2,3,1]
// 输出：true
// 示例 2：

// 输入：nums = [1,2,3,4]
// 输出：false
// 示例 3：

// 输入：nums = [1,1,1,3,3,4,3,2,4,2]
// 输出：true

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/contains-duplicate
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function containsDuplicate(nums: number[]): boolean {
  nums.sort()
  for(let i = 0; i < nums.length; i++) {
      if (nums[i] == nums[i+1]) {
          return true
      }
  }
   return false
}

// 解题思路：
// 给数组里的整数进行排序，从小到大或者从大到小都可以，这样当一个数重复出现多次的话，那么他们的位置一定是紧挨着的。
// 所以遍历数组判断 nums[i] == nums[i + 1] 就可以了