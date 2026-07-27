class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let check = [];
        
        for(let par of s.split("")){
            if(par === '(' || 
                par === '{' ||
                par === '['){
                    check.push(par);
                } else {
                    let currentLast = check.length-1;
            if (currentLast < 0){
                return false;
            }

            if( (par === ')' && check[currentLast] === '(') ||
                    (par === '}' && check[currentLast] === '{') ||
                    (par === ']' && check[currentLast] === '[' )){
                        check.pop();
            } else {
                return false;
            }
                }
            
        
        }
            if(check.length > 0){
                return false;
            } else return true;
                
        
    }
}
