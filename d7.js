let inp=document.getElementsByTagName("input")[0]
let btn=document.getElementsByTagName("button")[0]
let img=document.getElementsByTagName("img")[0]
btn.addEventListener("click",()=>{
    if(inp.value===""){

        alert("no input..")
    }
    else{
    inp.value=""
    image.style.display="block"
    console.log(img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=vamsi${inp.value}`)
    }
})