let cards=document.getElementsByClassName("cards")[0]
let url="https://fakestoreapi.com/products"
let data=fetch(url).then((d)=>{
    return d.json()
    // console.log(d)
}).then((fd)=>{
    // console.log(fd)
    fd.map((e)=>{
        // console.log(fd)
        let {id,title,image,description,category,price}=e
        cards.innerHTML+=`
        <div class="card">
                <h6>${id}</h6>
                <h1>${title}</h1>
                <img src=${image} alt="">
                <p>${description}</p>
                <h3>${category}</h3>
                <h3>${price}</h3>

            </div>`

    })
})