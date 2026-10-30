class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const text = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        let right = text.length - 1;
        let left = 0;
        while (left < right) {
            if (text[left] !== text[right]) {
                return false;
            } else {
                left++;
                right--;
            }
        }
        return true;
    }
}
