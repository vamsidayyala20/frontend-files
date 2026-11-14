
// let url="https://fakestoreapi.com/products"
// let data=fetch(url).then((d)=>{
// return d.json()}).then((fd)=>{
//     console.log(fd)
// })
// let url="https://jsonplaceholder.typicode.com/posts/1/comments"
// let data=fetch(url).then((d)=>{
//     return d.json()
// }).then((fd)=>{
//     console.log(fd)
// })
let cards=document.getElementsByClassName("cards")[0]
let url="https://fakestoreapi.com/products"
let data=fetch(url).then((d)=>{
    return d.json()
}).then((fd)=>{
    // console.log(fd)
    fd.map((e)=>{
    // console.log(fd)
    let {id,title,price,description,category,image}=e
    cards.innerHTML+=`
    <div class="card">
                <h6>${id}</h6>
                <h1>${title}</h1>
                <img src="${image}" alt="">
                <p>${description}</p>
                <h3>${price}</h3>
                <h3>${category}</h3>
                <button></button>
            </div>
    `

})
})
