// sum of individual digits
let digit= 5678;
let sum=0;
//5+6+7+8

while(digit>0){
    let num= digit%10;
    sum+= num;
    digit=Math.floor(digit/10);
}
console.log(sum)