

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
const res=[]
for(let i=left;i<=right;i++){

let num=i;
let seperate=num;
let cond=true;
let digit=0;
while(seperate!=0)
{
  digit=seperate%10;
 seperate=Math.trunc(seperate/10);
  if(num %digit!=0){
    cond=false;
    break;
  }  
}
if(cond){
  res.push(i)
  
}
}
return re
