class Solution:
    
    def removeDuplicates(self, nums: list[int]) -> int:
        if not nums:
            return 0
        
        slow = 0

        for fast in range(1, len(nums)):
            if nums[fast] != nums[slow]:
                slow += 1
                nums[slow] = nums[fast]
        
        return slow + 1
solution = Solution()
print(solution.removeDuplicates([0,0,1,1,1,2,2,3,3,4,6,7,44,44,44,44,44,44,44,44,44,44,44,44,44]))
