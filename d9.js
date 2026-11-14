
// // let cont=document.getElementsByClassName("container")[0]
// let h1=document.getElementsByTagName("h1")[0]

// setTimeout(()=>{
//     // cont.innerHTML+="<h1>vamsi</h1>"
//     h1.innerText="vamsi"
// },5000)
let a=["vamsi","ram","vihan","charan"]
let n=document.getElementById("n")
setInterval(()=>{
    // // cont.innerHTML+="<h1>vamsi</h1>"
    // h1.innerText="vamsi"
      let ran=(Math.floor(Math.random()*a.length))
      n.innerText=a[ran]
},2000)