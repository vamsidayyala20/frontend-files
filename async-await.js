let task=async()=>{
    let data=await fetch("https://jsonplaceholder.typicode.com/todos")
    let res=await data.json()
    // console.log(res)
    res.map((e)=>{
        let {id,title,completed}=e
        let cards=document.getElementsByClassName("cards")[0]
        cards.innerHTML+=`
        <div class="card">
                <h6>${id}</h6>
                <h1>${title}</h1>
                <h3>${completed}</h3>
               
            </div>`
    })
}
task();