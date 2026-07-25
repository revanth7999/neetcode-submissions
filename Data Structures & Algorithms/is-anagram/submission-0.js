class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        return JSON.stringify(this.findFrequency(s)) === JSON.stringify(this.findFrequency(t));

    }

    findFrequency(input){
        let res = new Map();
        for(let n of input.split("")){
            res.set(n, (res.get(n)||0)+1);
        }
        return Object.fromEntries([...res.entries()].sort());
    }
}
