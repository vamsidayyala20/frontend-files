// let btn=document.getElementById("btn")
// console.log(btn)
// let btn1=document.getElementsByTagName("button")[0]
// let body=document.getElementsByTagName("body")[0]
// // console.log(btn1.innerText)
// // btn1.innerText="submit"
// // console.log(btn1.innerText)
// btn1.addEventListener("click",()=>{console.log("you clicked me on red buttton")
//     body.style.backgroundColor="red"


// })

// let btn2=document.getElementsByTagName("button")[1]
// btn2.addEventListener("click",()=>{console.log("you clicked me on blue buttton")
//     body.style.backgroundColor="blue"
// })

// let btn3=document.getElementsByTagName("button")[2]
// btn3.addEventListener("click",()=>{console.log("you clicked me on green buttton")
//     body.style.backgroundColor="green"
// })

// let btn4=document.getElementsByTagName("button")[3]
// btn4.addEventListener("click",()=>{console.log("you clicked me on yellow buttton")
//     body.style.backgroundColor="yellow"
// })

let span=document.getElementsByTagName("span")[0]
let vamsi=document.getElementsByTagName("button")[0]
let dayyala=document.getElementsByTagName("button")[1]
let vihan=document.getElementsByTagName("button")[2]
let ravi=document.getElementsByTagName("button")[3]
ravi.addEventListener("click",()=>{
    span.innerText="ravi"
})
vamsi.addEventListener("click",()=>{
    span.innerText="vamsi"
})
dayyala.addEventListener("click",()=>{
    span.innerText="dayyala"
})
vihan.addEventListener("click",()=>{
    span.innerText="vihan"
})
