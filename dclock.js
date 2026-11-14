let h=document.getElementsByTagName("span")[0]
let m=document.getElementsByTagName("span")[1]
let s=document.getElementsByTagName("span")[2]

setInterval(()=>{
    let date=new Date;
    let hrs=date.getHours();
    let mins=date.getMinutes();
    let secs=date.getSeconds();
    h.innerHTML=hrs
    m.innerHTML=mins
  s.innerHTML=secs
},1000)
