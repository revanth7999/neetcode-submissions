class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let mixedWord = s.replaceAll(" ","").toLowerCase();  
        
const result = mixedWord.replace(/[^a-zA-Z0-9]/g, "");      
        return this.findPalindrome(result.split(""), 0, result.length-1);
    }

    findPalindrome(val, start, end){
        console.log(val);
        while(start< end){
            if(val[start] != val[end]){
                return false;
            }
            start++;
            end--;
        }
        return true;
    }
}
