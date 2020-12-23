/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined) {
      return [map[nums[i]], i]
    }

    const diff = target - nums[i]
    if (!map[diff]) {
      map[diff] = i
    }
  }
  return []
};
// @lc code=end

