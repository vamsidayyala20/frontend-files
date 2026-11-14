let btn=document.querySelector("#btn")
btn.addEventListener("click",()=>{
    let name=document.querySelector("#feild").value
    let newLi=document.querySelector("#li")
    newLi.textContent=name
    let list=document.querySelector("#list")
    list.append(newLi)
    document.querySelector("#feild").value=""
})