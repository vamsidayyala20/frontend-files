// let me="ravishastry"
// let company="dheecodinglab"
// let address="bangolore"
// let me_fh=me.slice(0,me.length/2)
// console.log(me_fh)
// let me_sh=me.slice(me.length/2)
// console.log(me_sh)
// let me_com=me_fh.concat(company).concat(me_sh)
// console.log(me_com)

// let mc_fh=me_com.slice(0,me_com.length/2)
// console.log(mc_fh)
// let mc_sh=me_com.slice(me_com.length/2)
// console.log(mc_sh)
// let mca=mc_fh.concat(address).concat(mc_sh)


// console.log(mca)
// let re=mca.repeat(5)
// console.log(re)
// let re_fh=re.slice(0,re.length/2)
// let re_sh=re.slice(re.length/2)
// let re_me=re_fh.concat(me.toUpperCase()).concat(re_sh)
// console.log(re_me)
// console.log(re_me.length)
// let a="ravishastry"
// console.log(a.length)
// console.log(a.charAt(0))
// console.log(a.charAt(10))
// console.log(a.charAt(100))

// let x="ravi "
// let y="shastry"
// console.log(x.concat(y).concat("dhee coding"))

// console.log(a.endsWith("ishastry"))
// console.log(a.startsWith("ravisha"))

// console.log(a.includes("ish"))

// console.log(a.indexOf("r"))
// console.log(a.lastIndexOf("r"))

// let b="1234"
// console.log(b.padEnd(14,"x"))
// console.log(b.padStart(14,"x"))


// console.log(x.repeat(5))

// console.log(a.slice(0,a.length/2))
// console.log(a.slice(a.length/2))

// let me="ravishastry"
// let company="dheecodinglab"
// let address="bangolore"

// let a1=me.substring(0,me.length/2)
// let a2=me.substring(me.length/2)
// let a=a1.concat(company).concat(a2)
// console.log(a)

// let b1=a.substring(0,a.length/2)
// let b2=a.substring(a.length/2)
// let b=b1.concat(address).concat(b2)

// console.log(b)

// let c=b.repeat(5)

// let d1=c.substring(0,c.length/2).concat(me.toUpperCase()).concat(c.substring(c.length/2))
// let d2=c.substring(c.length/2)
// let d=d1.concat(me.toUpperCase()).concat(d2)
// console.log(d1)
// console.log(d1.length)


// let date=new Date;
// console.log(date);
// console.log(date.getDate(),"today's date");
// console.log(date.getDay(),"this is the day of the week")
// console.log(date.getFullYear(),"this is the year")
// console.log(date.getHours(),"this is the hour")
// console.log(date.getMilliseconds(),"this is the milliseconds")
// console.log(date.getSeconds(),"this is the seconds")
// console.log(date.getMinutes(),"this is the minutes")
// console.log(date.getTime(),"this is the time")
// console.log(date.toDateString(),"this is the date")
// console.log(date.getMonth(),"this is the month")
// console.log(Math.ceil(Math.random()*6))


// console.log(Math.ceil(Math.random()*10000))

// let a=Math.floor(Math.random()*10)
// let b=Math.floor(Math.random()*10)
// let c=Math.floor(Math.random()*10)
// let d=Math.floor(Math.random()*10)
// let e=Math.floor(Math.random()*10)
// console.log(a,b,c,d,e)

//arrays:


// let a=["apple","bannana","grapes","pineappple","mango"]
// console.log(a)
// console.log(a[0])
// console.log(a[1])
// console.log(a[2])
// console.log(a[3])
// console.log(a[4])

// let movies=["rrr","kgf","bahubali","peddi","pushpa","dragon"]
// let hero_names=["ramcharan","yash","prabhas","ramcharan","allu arjun","ntr"]
// let heroine_names=["alia bhat","frd","thamanah","cds","rashmik","rukmini"]

// console.log("movies name :",movies[0])
// console.log("hero name :",hero_names[0])
// console.log("heroine name :",heroine_names[0])

// console.log("movies name :",movies[1],"\nnhero name:",hero_names[1],"\nheroine name:",heroine_names[1])
// console.log("movies name :",movies[2],"\nhero name:",hero_names[2],"\nheroine name:",heroine_names[2])
// console.log("movies name :",movies[3],"\nhero name:",hero_names[3],"\nheroine name:",heroine_names[3])
// console.log("movies name :",movies[4],"\nhero name:",hero_names[4],"\nheroine name:",heroine_names[4])

// console.log(movies name ${movies[0]} "\nhero name:",hero_names[1],"heroine name:",heroine_names[1])
//Array methods:

//1.concat():

// let fruits=["apple","banana","mango","orange","grapes"]
// console.log(fruits.concat("vamsi"))
// let x=[1,2,4,5,6]
// console.log(fruits.concat(x))

//2.flat():

// let x=[[[1,[2]],3,],4,[5,6]]
// console.log(x)
// console.log(x.flat(Infinity))

//3.includess():
// let fruits=["apple","banana","mango","orange","grapes"]
// console.log(fruits.includes("orange","grapes"))

// //4.indexOf():
// console.log(fruits.indexOf("apple"))
// console.log(fruits.indexOf("lemon"))

// //5.split():
// console.log(fruits.join(","))
//let fruits=["apple","ravi","banana","mango","orange","shastry","grapes"]
// console.log(fruits.reverse().join(" "))
//let ban=fruits.splice(1,1).toString().toUpperCase().split("").reverse().join("")
// let b=ban.split("").reverse().join("")
//fruits.splice(1,0,ban)
//let c=fruits.splice(5,1).toString().toUpperCase().split("").reverse().join("")
// let can=c.split("").reverse().join("")
//fruits.splice(5,0,c)
//console.log(fruits)

// let fruits=["apple","mango","bannana","orange","grapes"]
// let res=[]
// let apple=(fruits.splice(0,1).toString())
// let A=apple.slice(0,1).toUpperCase()
// let pple=apple.slice(1)
// res.push(A.concat(pple))
// console.log(res)

// let mango=(fruits.splice(0,1).toString())
// let M=mango.slice(0,1).toUpperCase()
// let ango=mango.slice(1)
// res.push(M.concat(ango))
// console.log(res)

// let banana=(fruits.splice(0,1).toString())
// let A=apple.slice(0,1).toUpperCase()
// let pple=apple.slice(1)
// res.push(A.concat(pple))
// console.log(res)

// let apple=(fruits.splice(0,1).toString())
// let A=apple.slice(0,1).toUpperCase()
// let pple=apple.slice(1)
// res.push(A.concat(pple))
// console.log(res)

// let apple=(fruits.splice(0,1).toString())
// let A=apple.slice(0,1).toUpperCase()
// let pple=apple.slice(1)
// res.push(A.concat(pple))
// console.log(res)

//  let fruits=["apple","mango","bannana","orange","grapes"]
//  let res=[]
//  let apple=(fruits.splice(0,1).toString())
//   console.log(apple)
//  let A=apple.slice(0,1).toUpperCase()
//   console.log(A)
//  let A1=apple.slice(4).toUpperCase()
//   console.log(A1)
//   //let rev=.
// let ple=apple.slice(1).split("").reverse("").join("")
//  console.log(ple)
//  res.push(A.concat(ple,A1))
//  console.log(res)

// let fruits=["apple","mango","banana","orange","grapes"]
// let res=[]
// let grapes=fruits.splice(4).toString()
// console.log(grapes)
// let g=grapes.slice(0,1)
// let g1=grapes.slice(5)
// let G=grapes.slice(1,5).toUpperCase()
// console.log(G)
// res.push(g1.concat(G,g))
// console.log(res)

// let orange=fruits.splice(3).toString()
// console.log(orange)
// let o=orange.slice(0,1)
// let o1=orange.slice(5)
// let O=orange.slice(1,5).toUpperCase()
// console.log(O)
// res.push(o1.concat(O,o))
// console.log(res)

// let banana=fruits.splice(4).toString()
// console.log(banana)
// let b=banana.slice(0,1)
// let b1=banana.slice(5)
// let G=grapes.slice(1,5).toUpperCase()
// console.log(G)
// res.push(g1.concat(G,g))
// console.log(res)

let fruits=["apple","mango","banana","orange","grapes"]
let res=[]
let apple=fruits.splice(0,1).toString()
console.log(apple)
let apple_fh=apple.slice(0,apple.length/2).split("").reverse("").join("")
console.log(apple_fh)
let apple_sh=apple.slice(apple.length/2).toUpperCase().split("").reverse("").join("")
console.log(apple_sh)
res.push(apple_sh.concat(apple_fh))
console.log(res)

let mango=fruits.splice(0,1).toString()
console.log(mango)
let mango_fh=mango.slice(0,mango.length/2).split("").reverse("").join("")
console.log(mango_fh)
let mango_sh=mango.slice(mango.length/2).toUpperCase().split("").reverse("").join("")
console.log(mango_sh)
res.push(mango_sh.concat(mango_fh))
console.log(res)

let banana=fruits.splice(0,1).toString()
console.log(banana)
let banana_fh=banana.slice(0,banana.length/2).split("").reverse("").join("")
console.log(banana_fh)
let banana_sh=banana.slice(banana.length/2).toUpperCase().split("").reverse("").join("")
console.log(banana_sh)
res.push(banana_sh.concat(banana_fh))
console.log(res)

let orange=fruits.splice(0,1).toString()
console.log(orange)
let orange_fh=orange.slice(0,orange.length/2).split("").reverse("").join("")
console.log(orange_fh)
let orange_sh=orange.slice(orange.length/2).toUpperCase().split("").reverse("").join("")
console.log(orange_sh)
res.push(orange_sh.concat(orange_fh))
console.log(res)









