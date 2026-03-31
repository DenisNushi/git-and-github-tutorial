let count=0
const counter=document.getElementById("counter");
const message=document.getElementById("message");
const plusBtn=document.getElementById("plus");
const minusBtn=document.getElementById("minus");
const resetBtn=document.getElementById("reset");
const bonusBtn=document.getElementById("bonus");
plusBtn.addEventListener("click",function(){
if (count<50){
count++;
CheckCounter();
}
else{
message.innerText="Cant go past 50"
}
})
minusBtn.addEventListener("click",function(){
if (count>0){
count--;
CheckCounter()
}
else{
message.innerText="cant go below 0"
}
})
resetBtn.addEventListener("click",function(){
let count=0;
CheckCounter();
})
bonusBtn.addEventListener("click",function(){
let r=Math.floor(Math.random)
if (r===1){ 
count+=3
message.innerText="Lucky"
}
elseif (r===2)
count-=2
message.innerText="Unlucky"


})
function CheckCounter(){
counter.innerText=count
}