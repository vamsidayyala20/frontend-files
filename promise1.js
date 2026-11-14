let cards=document.getElementsByClassName("cards")[0]
let url="https://jsonplaceholder.typicode.com/todos"
let data=fetch(url).then((d)=>{
    return d.json()
}).then((fd)=>{
     fd.map((e)=>{

    // console.log(fd)
    let {id,title,completed}=e
    cards.innerHTML+=`
    <div class="card">
                <h6>${id}</h6>
                <h1>${title}</h1>
                <h3>${completed}</h3>
               
            </div>
    `

})

})