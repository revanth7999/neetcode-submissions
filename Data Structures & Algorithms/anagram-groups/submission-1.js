class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {};
          for(let n of strs){
            let key = n.split('').sort().join('');
            res[key]=res[key] || [];
            res[key].push(n);
        }
        return Object.values(res);
    }
}
