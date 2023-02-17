/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const f=(k)=>{
  if(k==0){
    return 0
  }
  else if(k==1){
    return 1
  }
  else{
    return f(k-1)+f(k-2);
  }
}
return f(n)
};
