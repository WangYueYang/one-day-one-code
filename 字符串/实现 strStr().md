28. 实现 strStr()
    实现  strStr()  函数。

给你两个字符串  haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回   -1 。



说明：

当  needle  是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

对于本题而言，当  needle  是空字符串时我们应当返回 0 。这与 C 语言的  strstr()  以及 Java 的  indexOf()  定义相符。



示例 1：

输入：haystack = "hello", needle = "ll"
输出：2
示例 2：

输入：haystack = "aaaaa", needle = "bba"
输出：-1
示例 3：

输入：haystack = "", needle = ""
输出：0

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/implement-strstr
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

```js
function strStr(haystack: string, needle: string): number {
  if (needle == '') {
    return 0;
  }
  let len = needle.length;

  let i = 0;
  while (i < haystack.length) {
    if (haystack.substring(i, i + len) == needle) {
      return i;
    } else {
      i++;
    }
  }
  return -1;
}
```
解题思路：
1. 获取到 needle 的长度 len
2. 遍历 haystack ，然后截取 i 到 i + len 长度的字符串和 needle 做对比
3. 如果不相等的话 i++  相等的话 return i
4. 遍历结束后还没有匹配到 return -1