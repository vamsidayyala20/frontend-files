let h= document.getElementsByTagName("span")[0]
let m= document.getElementsByTagName("span")[1]
let s= document.getElementsByTagName("span")[2]
let cnt=document.getElementsByClassName("container")[0]
setInterval(()=>{
let date =new Date;
let hrs=date.getHours();
let mins=date.getMinutes();
let secs=date.getSeconds();
// if(h>12){
//     cnt.innerHTML+=`
//      <div class="clock">
//             <li><span></span> hrs</li>
//             <li>:</li>
//             <li><span></span> mins</li>
//             <li>:</li>
//             <li><span></span> secs</li>
//         </div>
//         `
// }
h.innerText=hrs
m.innerText=mins
s.innerText=secs
},1000)