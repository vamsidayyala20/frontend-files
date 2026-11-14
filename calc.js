let one=document.getElementById("one")
let two=document.getElementById("two")
let three=document.getElementById("three")
let four=document.getElementById("four")
let five=document.getElementById("five")
let six=document.getElementById("six")
let seven=document.getElementById("seven")
let eight=document.getElementById("eight")
let nine=document.getElementById("nine")
let zero=document.getElementById("zero")
let del=document.getElementById("del")
let ac=document.getElementById("ac")
let add=document.getElementById("add")
let sub=document.getElementById("sub")
let mul=document.getElementById("mul")
let div=document.getElementById("div")
let dot=document.getElementById("dot")
let equal=document.getElementById("equal")
let inp=document.getElementsByTagName("input")[0]


ac.addEventListener("click",()=>{
   inp.value=""
})
one.addEventListener("click",()=>{
   inp.value+=1
})
two.addEventListener("click",()=>{
   inp.value+=2
})
three.addEventListener("click",()=>{
   inp.value+=3
})
four.addEventListener("click",()=>{
   inp.value+=4
})
five.addEventListener("click",()=>{
   inp.value+=5
})
six.addEventListener("click",()=>{
   inp.value+=6
})
seven.addEventListener("click",()=>{
   inp.value+=7
})
eight.addEventListener("click",()=>{
   inp.value+=8
})
nine.addEventListener("click",()=>{
   inp.value+=9
})
zero.addEventListener("click",()=>{
   inp.value+=0
})
dzero.addEventListener("click",()=>{
   inp.value+=0
})
add.addEventListener("click",()=>{
   inp.value+="+"
})
sub.addEventListener("click",()=>{
   inp.value+="-"
})
mul.addEventListener("click",()=>{
   inp.value+="*"
})
div.addEventListener("click",()=>{
   inp.value+="/"
})
dot.addEventListener("click",()=>{
   inp.value+="."
})
equal.addEventListener("click",()=>{
   inp.value=eval(inp.value)
})

del.addEventListener("click",()=>{
   inp.value=inp.value.toString().slice(0,-1)
})

