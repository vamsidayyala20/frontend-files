let one=document.querySelector("#html")
let two=document.querySelector("#css")
let three=document.querySelector("#js")
let four=document.querySelector("#react")
let five=document.querySelector("#ang")
let ul=document.querySelector("#ulist")
ul.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
    console.log(`you clickd on ${e.target.innerText}` )
    }
})

// one.addEventListener("click",()=>{
//     console.log("you clickd on html")
// })
// two.addEventListener("click",()=>{
//     console.log("you clickd on css")
// })
// three.addEventListener("click",()=>{
//     console.log("you clickd on javascript")
// })
// four.addEventListener("click",()=>{
//     console.log("you clickd on react")
// })
// five.addEventListener("click",()=>{
//     console.log("you clickd on angular")
// })
