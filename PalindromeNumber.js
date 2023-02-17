/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false
    }
    else if(parseInt(x.toString().split('').reverse().join(""))==x){
        return true
    }
    else{
        return false
    }
//      let rem=0;
//      let reversed=0;
//   if(x==121){
//       true
//   }
//   if(x<0){
//       false
//   }
 
// while(x!=0)
// {
//   rem=x%10;
//   reversed=reversed*10+x
// x=Math.trunc(x/10);
  
// }


// if(x==reversed){
//   return true
// }
// else {
//   return false
// }
};
