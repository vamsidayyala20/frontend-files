//function:
//1.normal function 2.arrow function


//2.arrow fuction
// let add=()=>{
//     let a=10;
//     let b=20;
//     console.log(a+b);

// }
// add();
//1.
let reuse=(inp)=>{
    let x=prompt(`enter ${inp} value`)
    return x
}
let vote=()=>{
    let a=Number(reuse('age'))
    if(a<0 || a>100){
        console.log("check your input")

    }
    else if(a>=18){
        console.log("your are eligible to vote")
    }
    else{
        console.log("your are not eligible to vote")
    }
}
// vote()
let drive=()=>{
    let a=Number(reuse('age'))
        if(a<0 || a>100){
        console.log("check your input")

    }
    else if(a>=18){
        console.log("your are eligible to ddrive")
    }
    else{
        console.log("your are not eligible to drive")
    }
}
// drive()

let posneg=()=>{
    let num=Number(reuse('number'))
    if(num>0){
        console.log("positive number")
    }
    else{
        console.log("negative number")
    }
}
// posneg()

let strnum=()=>{
    let ns=reuse('a')
    if(isNaN(ns)){
        console.log("String")
    }
    else{
        console.log("number")
    }
}
// strnum()

let phone=()=>{
    let ph=reuse('phone')
    if(ph.length==10){
        console.log("valid")
    }
    else{
        console.log("invalid")
    }
}
// phone()

let div3=()=>{
    let a=Number(reuse('a'))
    if(a%3==0){
        console.log("divisible by 3")

    }
    else{
        console.log("not divisible by 3")
    }
}
// div3()
let div5=()=>{
    let a=Number(reuse('a'))
    if(a%5==0){
        console.log("divisible by 5")

    }
    else{
        console.log("not divisible by 5")
    }
}
// div5()

let div35=()=>{
    let a=Number(reuse('a'))
    if(a%3==0 && a%5==0){
        console.log("divisible by 3 and 5")

    }
    else{
        console.log("not divisible by 3 and 5")
    }
}
// div35()

//nested if condition
// let user=prompt("enter your age")
// if(isNaN(user)||user<=0||user>100){
//     console.log("check your input")

// }
// else {
//     if(user>=18){
//         console.log("your arre eligible to vote")
//         let gen=prompt("enter your gender:male,female,other").toLowerCase()
//         if(gen=="male"||gen=="m"){
//             console.log("please stand in male line..")

//         }
//         else if(gen=="female"||gen=="f"){
//             console.log("please stand in female line..")
//         }
//         else if(gen=="other"||gen=="o"){
//             console.log("please stand in others line..")
//         }
//         else{
//             console.log("check your gender")
//         }
//     }
//     else{
//         console.log("your not eligble to vote")
//     }
// }

// let marks=(inp)=>{
//     let x=prompt(`enter ${inp} marks`).toLowerCase()
//     return x
// }

//     let telugu=marks('telugu')
//     let english=marks('english')
//     let math=marks('math')

//     if(s<0||s>=100||isNaN(s)){
//         console.log("please provide valid marks")
//     }
//         else{
//             if(s>=70){
//                 console.log("you are passed with distinction")
//             }
//             else if(s>50){
//                 console.log("first class")
//             }
//             else if(s>35){
//                 console.log("passed")

//             }
//             else{
//                 console.log("failed")
//             }
//         }
       

    // let units=prompt("enter units")
    // let amount=0
    // if(units<0||isNaN(units)){
    //     console.log("check yyour input")
    // }
    
    // else{
    //     if(units>400){
    //     amount+=(units-400)*10
    //     units=400//units-x
        
    //    }
        
    //     if(units>=201 &&units<=400){
    //        amount +=(units-200)*8
    //         units=200
    //     }
    //      if(units>101&&units<=200){
    //         amount+=(units-100)*6
    //           units=100
    //     }
    //     if(units>=0 && units<=100){
    //         amount+=(units-0)*4
    //         units=0
    //     }
    //      console.log(amount)
    
    // }

//     let money=prompt("enter amount")
//     let fhn=0
//     let thn=0
//     let hn=0
//     let fn=0
//     let tn=0
//     let trs=0
//     let fr=0
//     let tr=0
//     let or=0

//     if(units<0||isNaN(money)){
//         console.log("check yyour input")
//     }
    
//     else{
//         while(money!=0){
//         if(money>500){
//        fhn++
//        money-=500
        
//        }
        
//         if(money>200){
//           thn++
//           money-=200
//         }
//          if(money>100){
//             hn++
//             money-=100
//         }
//         if(moneey>50){
//             fn++
//             money-=50
//         }
//         if(money>20){
//             tn++
//             money-=20
//         }
//         if(money>10){
//             trs++
//             money-=10
//         }
//           if(money>5){
//             fr++
//             money-=5
//         }
//         if(moneey>2){
//             tr++
//             money-=2
//         }
         
//         if(money>1){
//             or++
//             money-=1
//         }
//         console.log()
         
    
//     }
// }

// let amount=prompt("enter amount")

//     // let cal=(a)=>{
//     //     let notes=Math.floor(amount/a)
//     //     console.log(`${a}rupees notes===${notes}`)
//     // amount=(amount%a)

//     // }
//  if(amount<0||isNaN(amount)){
//         console.log("check yyour input")
//     }
    
//     else{
// if(amount>=500){
//     let notes=Math.floor(amount/500)
//     console.log(`500 rupees notes===${notes}`)
//     amount=(amount%500)
// }
// if(amount>=200){
//     let notes=Math.floor(amount/200)
//     console.log(`200 rupees notes===${notes}`)
//     amount=(amount%200)
// }
// if(amount>=100){
//     let notes=Math.floor(amount/100)
//     console.log(`100 rupees notes===${notes}`)
//     amount=(amount%100)
// }
// if(amount>=50){
//     let notes=Math.floor(amount/50)
//     console.log(`50 rupees notes===${notes}`)
//     amount=(amount%50)
// }
// if(amount>=20){
//     let notes=Math.floor(amount/20)
//     console.log(`20 rupees notes===${notes}`)
//     amount=(amount%200)
// }
// if(amount>=10){
//     let notes=Math.floor(amount/10)
//     console.log(`10 rupees notes===${notes}`)
//     amount=(amount%10)
// }
// if(amount>=5){
//     let notes=Math.floor(amount/5)
//     console.log(`5 rupees notes===${notes}`)
//     amount=(amount%500)
// }
// if(amount>=2){
//     let notes=Math.floor(amount/2)
//     console.log(`2 rupees notes===${notes}`)
//     amount=(amount%2)
// }
// if(amount>=1){
//     let notes=Math.floor(amount/1)
//     console.log(`1 rupees notes===${notes}`)
//     amount=(amount%1)
// }
//     }

// let inp=prompt("enter  your option \n1.balance \n 2.withdraw \n 3.deposit").toLowerCase()
// let bal=500
//  let again =true
// while(again){
// if(inp==="1"||inp==="bal"||inp==="balance"){
//     console.log("your balance is "+bal)
// }
// else if(inp==="2"||inp==="wit"||inp==="withdraw"){
//     let wamt=Number(prompt("enter amount withdrawl amount"))

//     if(wamt>bal){
//         console.log("you don't have enough money to withdraw")
        
//     }
//     else{
//         bal=bal-wamt
//         console.log("your withdrawl was successfull")
//         console.log("your bal is  "+bal)
//     }
// }
// else if(inp=="3"||inp==="dep"||inp==="deposit"){
//     let damt =Number(prompt("enter amount you depost amount"))
//     if(isNaN(damt)||damt<0){
//         console.log("check your inpt")
//     }
//     else{
//       bal+=damt
//       console.log("your deposit was successfull")
//       console.log("your bal is"+bal)
//     }

// }
// else{
//     console.log("please select valid option")
// }
// again=confirm("do you want to continue?")
// }


// let again=true

// while(again){
//     let age=prompt("enter your age")
// if(age>=18){
//     console.log("vote")
// }
// else{
//     console.log("not eligible")
// }
// again=confirm("do you want to continue?")
// }
// console.log("thanks for voting")

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
//  console.log(5)
//    for(let i=1;i<=100;i++){
//     console.log(i)
//    }
// for(let i=50;i<=100;i++){
//         console.log(i)
//     }
// for(let i=25;i<=125;i++){
//     console.log(i)
//     }
// for(let i=0;i<=50;i+=5){
//     console.log(i)
//     }
// let a=Number(prompt("eneter a value"))
// let b=Number(prompt("eneter b value"))
// if(a>b||isNaN(a)||isNaN(b)){
//  console.log("check your input")
// }
// else{
//     for(let i=a;i<=b;i++){
//     console.log("5 x "+i+"="+(i*5))
//     }
// }

// for(let i=1;i<=10;i++){
//     console.log("5 x "+i+"="+(i*5))
//     }
    
// let table=Number(prompt("eneter a value"))

// if(isNaN(table)){
//  console.log("check your input")
// }
// else{
//     for(let i=1;i<=10;i++){
//     console.log("100 x "+i+"="+(i*table))
   
//     }
// }
// let table=Number(prompt("eneter table value"))
// let a=Number(prompt("eneter a value"))
// let b=Number(prompt("eneter b value"))

// if(a>b||isNaN(a)||isNaN(b)||isNaN(table)){
//  console.log("check your input")
// }
// else{
//     for(let i=a;i<=b;i++){
//     // console.log("100 x "+i+"="+(i*table))
//     console.log(`${table} * ${i}=${table*i}`)
//     }
// }

//  for(let i=1;i<=100;i++){
//     if(i%3==0){
//         console.log(i)
//     }
    
//     }
//  for(let i=1;i<=100;i++){
//     if(i%5==0){
//         console.log(i)
//     }
    
//     }

// let a=Number(prompt("eneter a value"))
// let r1=Number(prompt("eneter r1 value"))
// let r2=Number(prompt("eneter r2 value"))

// if(r1>r2||isNaN(a)||isNaN(r1)||isNaN(r2)){
//  console.log("check your input")
// }
// else{
//     for(let i=r1;i<=r2;i++){
//      if(i%a==0){
//         console.log(i)
//      }
//     }
// }


// for(let i=1;i<=100;i++){

//   if(i%3==0 && i%5==0){
//     console.log("ravi shastry")
// }
//  else if(i%3==0){
//     console.log("ravi")
// }
//  else if(i%5==0){
//     console.log("shastry")
// }
// else{
//     console.log(i)
// }
// }

let fruits=["mango","apple","grapes","orange","pine apple"]
// // console.log(fruits)
// // console.log(fruits[0])
// // console.log(fruits[1])
// // console.log(fruits[2])
// // console.log(fruits[3])
// // console.log(fruits[4])
// let names=["vinod","hemanth","mahesh","giri","sai","madhu","vamsi","gowtham","nagendra","afroz"]

// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i].toUpperCase())
// }
// for(let i=1;i<=20;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }
// for(let i=1;i<=20;i++){
//     if(i%2!=0){
//         console.log(i)
//     }
   
// }

// for(let i=0;i<fruits.length;i++){
//       console.log(fruits[i].substring(0,1).toUpperCase().concat(fruits[i].slice(1)))
// }

// for(let i=100;i>=-100;i--){
//     console.log(i)
// }

// let a=prompt("enter a value")
// let b=prompt("enter b value")
//if(isNaN(a)||isNaN(b)||a<b){
    //console.log("please provide valid input")
//    }
//else{
// for(let i=a;i>=b;i--){
//     console.log(i)
// }
//}


// let a=prompt("enter a value")
// let b=prompt("enter b value")
// let x=prompt("enter x value")
// if(isNaN(a)||isNaN(b)||a<b||isNaN(x)){
//     console.log("please provide valid input")
//    }
// else{
// for(let i=a;i>=b;i--){
//     if(i%x==0){
//       console.log(i)
//     }

// }
// }

// for(let i=100;i>=0;i--){
//   if(i%3==0 && i%5==0){
//     console.log(i+"  mrunal takur+ravi shastry")
//   }
//   else if(i%3==0){
//     console.log(i+"  mrunal takur")
//   }
//   else if(i%5==0){
//     console.log(i+"  ravi shastry")
//   }
//   else{
//     console.log(i)
//   }
// }
// for(let i=fruits.length-1;i>=0;i--){
//     console.log(fruits[i])
// }
// let s="vamsi"
// let x=s.split("")

// for(let i=x.length-1;i>=0;i--){

//     console.log(x.join(""))
// }


// let a="vamsi"
// let r=""
// for(let i=a.length-1;i>=0;i--){
//     r+=a[i]
// }
// console.log(r)
// let a=prompt("enter table number")
// for(let i=1;i<=10;i++){
//     console.log(`${a} * ${i}=${a*i}`)
// }
// let a=prompt("enter table number")
// for(let x=1;x<=10;x++){
   
// for(let i=1;i<=10;i++){
//     console.log(`${x} * ${i}=${x*i}`)
// }
// }

//for each method
let foodMenu = [
    // BREAKFAST (1–17)
    {
        id: 1,
        foodName: "Idli",
        description: "Soft steamed rice cakes served with chutney",
        price: 40,
        category: "breakfast"
    },
    {
        id: 2,
        foodName: "Masala Dosa",
        description: "Crispy dosa filled with spicy potato masala",
        price: 80,
        category: "breakfast"
    },
    {
        id: 3,
        foodName: "Plain Dosa",
        description: "Golden crispy dosa served with sambar",
        price: 60,
        category: "breakfast"
    },
    {
        id: 4,
        foodName: "Pongal",
        description: "Rice and lentil dish seasoned with pepper",
        price: 50,
        category: "breakfast"
    },
    {
        id: 5,
        foodName: "Poori",
        description: "Deep-fried fluffy bread served with potato curry",
        price: 60,
        category: "breakfast"
    },
    {
        id: 6,
        foodName: "Upma",
        description: "Savory semolina dish with vegetables",
        price: 40,
        category: "breakfast"
    },
    {
        id: 7,
        foodName: "Vada",
        description: "Crispy lentil fritters served with chutney",
        price: 35,
        category: "breakfast"
    },
    {
        id: 8,
        foodName: "Rava Dosa",
        description: "Thin and crispy semolina dosa",
        price: 70,
        category: "breakfast"
    },
    {
        id: 9,
        foodName: "Onion Dosa",
        description: "Crispy dosa topped with chopped onions",
        price: 75,
        category: "breakfast"
    },
    {
        id: 10,
        foodName: "Pesarattu",
        description: "Green gram dosa served with ginger chutney",
        price: 65,
        category: "breakfast"
    },
    {
        id: 11,
        foodName: "Chapati",
        description: "Soft whole wheat flatbread",
        price: 40,
        category: "breakfast"
    },
    {
        id: 12,
        foodName: "Bread Omelette",
        description: "Toasted bread with a seasoned egg omelette",
        price: 55,
        category: "breakfast"
    },
    {
        id: 13,
        foodName: "Aloo Paratha",
        description: "Stuffed wheat flatbread with spiced potatoes",
        price: 70,
        category: "breakfast"
    },
    {
        id: 14,
        foodName: "Puri Bhaji",
        description: "Fluffy puris served with potato curry",
        price: 65,
        category: "breakfast"
    },
    {
        id: 15,
        foodName: "Uttapam",
        description: "Thick rice pancake topped with vegetables",
        price: 60,
        category: "breakfast"
    },
    {
        id: 16,
        foodName: "Medu Vada",
        description: "South Indian lentil doughnuts with chutney",
        price: 45,
        category: "breakfast"
    },
    {
        id: 17,
        foodName: "Set Dosa",
        description: "Soft and spongy dosas served in a set",
        price: 65,
        category: "breakfast"
    },

    // LUNCH (18–34)
    {
        id: 18,
        foodName: "Veg Meals",
        description: "Rice served with curry, dal, sambar and sides",
        price: 120,
        category: "lunch"
    },
    {
        id: 19,
        foodName: "Chicken Biryani",
        description: "Aromatic basmati rice cooked with spiced chicken",
        price: 220,
        category: "lunch"
    },
    {
        id: 20,
        foodName: "Veg Biryani",
        description: "Fragrant rice cooked with mixed vegetables",
        price: 160,
        category: "lunch"
    },
    {
        id: 21,
        foodName: "Paneer Butter Masala",
        description: "Paneer cubes in a creamy tomato gravy",
        price: 180,
        category: "lunch"
    },
    {
        id: 22,
        foodName: "Curd Rice",
        description: "Seasoned rice mixed with fresh yogurt",
        price: 70,
        category: "lunch"
    },
    {
        id: 23,
        foodName: "Chicken Fried Rice",
        description: "Wok-fried rice with chicken and vegetables",
        price: 180,
        category: "lunch"
    },
    {
        id: 24,
        foodName: "Veg Fried Rice",
        description: "Fried rice with fresh vegetables and sauces",
        price: 140,
        category: "lunch"
    },
    {
        id: 25,
        foodName: "Mutton Biryani",
        description: "Basmati rice cooked with tender spiced mutton",
        price: 280,
        category: "lunch"
    },
    {
        id: 26,
        foodName: "Fish Curry",
        description: "Fish cooked in a traditional spicy gravy",
        price: 200,
        category: "lunch"
    },
    {
        id: 27,
        foodName: "Dal Tadka",
        description: "Yellow lentils tempered with Indian spices",
        price: 110,
        category: "lunch"
    },
    {
        id: 28,
        foodName: "Jeera Rice",
        description: "Basmati rice flavored with cumin seeds",
        price: 100,
        category: "lunch"
    },
    {
        id: 29,
        foodName: "Chole Bhature",
        description: "Spicy chickpea curry served with fried bread",
        price: 130,
        category: "lunch"
    },
    {
        id: 30,
        foodName: "Egg Biryani",
        description: "Spiced basmati rice with boiled eggs",
        price: 160,
        category: "lunch"
    },
    {
        id: 31,
        foodName: "Palak Paneer",
        description: "Paneer cooked in a creamy spinach gravy",
        price: 170,
        category: "lunch"
    },
    {
        id: 32,
        foodName: "Tomato Rice",
        description: "Tangy rice cooked with tomatoes and spices",
        price: 90,
        category: "lunch"
    },
    {
        id: 33,
        foodName: "Sambar Rice",
        description: "Rice mixed with lentils and vegetable sambar",
        price: 80,
        category: "lunch"
    },
    {
        id: 34,
        foodName: "Chicken Curry",
        description: "Chicken pieces cooked in spicy Indian gravy",
        price: 190,
        category: "lunch"
    },

    // DINNER (35–50)
    {
        id: 35,
        foodName: "Butter Naan",
        description: "Soft naan brushed with melted butter",
        price: 45,
        category: "dinner"
    },
    {
        id: 36,
        foodName: "Garlic Naan",
        description: "Naan topped with garlic and coriander",
        price: 60,
        category: "dinner"
    },
    {
        id: 37,
        foodName: "Paneer Tikka",
        description: "Grilled marinated paneer with spices",
        price: 190,
        category: "dinner"
    },
    {
        id: 38,
        foodName: "Chicken Tikka",
        description: "Char-grilled chicken marinated in Indian spices",
        price: 240,
        category: "dinner"
    },
    {
        id: 39,
        foodName: "Tandoori Roti",
        description: "Whole wheat bread baked in a tandoor",
        price: 25,
        category: "dinner"
    },
    {
        id: 40,
        foodName: "Butter Chicken",
        description: "Chicken in a rich buttery tomato gravy",
        price: 250,
        category: "dinner"
    },
    {
        id: 41,
        foodName: "Malai Kofta",
        description: "Vegetable and paneer dumplings in creamy gravy",
        price: 190,
        category: "dinner"
    },
    {
        id: 42,
        foodName: "Veg Noodles",
        description: "Stir-fried noodles with mixed vegetables",
        price: 130,
        category: "dinner"
    },
    {
        id: 43,
        foodName: "Chicken Noodles",
        description: "Stir-fried noodles with chicken and sauces",
        price: 170,
        category: "dinner"
    },
    {
        id: 44,
        foodName: "Mushroom Masala",
        description: "Mushrooms cooked in a flavorful Indian gravy",
        price: 160,
        category: "dinner"
    },
    {
        id: 45,
        foodName: "Kadai Paneer",
        description: "Paneer cooked with capsicum and kadai spices",
        price: 180,
        category: "dinner"
    },
    {
        id: 46,
        foodName: "Egg Curry",
        description: "Boiled eggs simmered in spiced onion gravy",
        price: 130,
        category: "dinner"
    },
    {
        id: 47,
        foodName: "Chicken Shawarma",
        description: "Seasoned chicken wrapped in soft flatbread",
        price: 150,
        category: "dinner"
    },
    {
        id: 48,
        foodName: "Gobi Manchurian",
        description: "Crispy cauliflower tossed in Indo-Chinese sauce",
        price: 140,
        category: "dinner"
    },
    {
        id: 49,
        foodName: "Chicken 65",
        description: "Spicy deep-fried chicken appetizer",
        price: 200,
        category: "dinner"
    },
    {
        id: 50,
        foodName: "Veg Pulao",
        description: "Basmati rice cooked with vegetables and spices",
        price: 140,
        category: "dinner"
    }
];

// console.log(foodMenu);
// foodMenu.forEach((food) => {
//     console.log(food);
// });
// foodMenu.forEach((food) => {
//     console.log("ID:", food.id);
//     console.log("Food Name:", food.foodName);
//     console.log("Description:", food.description);
//     console.log("Price: ₹", food.price);
//     console.log("Category:", food.category);
//     console.log("-------------------------");
// });
// foodMenu.forEach(({ id, foodName, description, price, category }) => {
//     console.log("ID:", id);
//     console.log("Food Name:", foodName);
//     console.log("Description:", description);
//     console.log("Price: ₹", price);
//     console.log("Category:", category);
//     console.log("----------------------");
// });


// let breakfast = [];
// let lunch = [];
// let dinner = [];

// foodMenu.forEach(({ id, foodName, description, price, category }) => {

//     if (category === "breakfast") {
//         breakfast.push({ id, foodName, description, price });
//     }
//     else if (category === "lunch") {
//         lunch.push({ id, foodName, description, price });
//     }
//     else if (category === "dinner") {
//         dinner.push({ id, foodName, description, price });
//     }

// });

// console.log("Breakfast:", breakfast);
// console.log("Lunch:", lunch);
// console.log("Dinner:", dinner);

// let breakfast = [];
// let lunch = [];
// let dinner = [];

// foodMenu.forEach(({ id, foodName, description, price, category }, index) => {

//     let item = {
//         index: index,
//         id,
//         foodName,
//         description,
//         price
//     };

//     if (category === "breakfast") {
//         breakfast.push(item);
//     }
//     else if (category === "lunch") {
//         lunch.push(item);
//     }
//     else if (category === "dinner") {
//         dinner.push(item);
//     }

// });

// console.log("Breakfast:", breakfast);
// console.log("Lunch:", lunch);
// console.log("Dinner:", dinner);

let employees = [
    {
        id: 1,
        name: "Rahul Sharma",
        gender: "Male",
        contact: "9876543210",
        designation: "Java Developer"
    },
    {
        id: 2,
        name: "Priya Reddy",
        gender: "Female",
        contact: "9876543211",
        designation: "Software Engineer"
    },
    {
        id: 3,
        name: "Arjun Kumar",
        gender: "Male",
        contact: "9876543212",
        designation: "Frontend Developer"
    },
    {
        id: 4,
        name: "Sneha Patel",
        gender: "Female",
        contact: "9876543213",
        designation: "Backend Developer"
    },
    {
        id: 5,
        name: "Vikram Singh",
        gender: "Male",
        contact: "9876543214",
        designation: "Full Stack Developer"
    },
    {
        id: 6,
        name: "Ananya Rao",
        gender: "Female",
        contact: "9876543215",
        designation: "UI/UX Designer"
    },
    {
        id: 7,
        name: "Karthik Reddy",
        gender: "Male",
        contact: "9876543216",
        designation: "DevOps Engineer"
    },
    {
        id: 8,
        name: "Pooja Sharma",
        gender: "Female",
        contact: "9876543217",
        designation: "Software Tester"
    },
    {
        id: 9,
        name: "Rohit Verma",
        gender: "Male",
        contact: "9876543218",
        designation: "Data Analyst"
    },
    {
        id: 10,
        name: "Divya Nair",
        gender: "Female",
        contact: "9876543219",
        designation: "Business Analyst"
    },
    {
        id: 11,
        name: "Suresh Babu",
        gender: "Male",
        contact: "9876543220",
        designation: "Project Manager"
    },
    {
        id: 12,
        name: "Keerthi Rao",
        gender: "Female",
        contact: "9876543221",
        designation: "HR Executive"
    },
    {
        id: 13,
        name: "Aditya Mehta",
        gender: "Male",
        contact: "9876543222",
        designation: "Java Developer"
    },
    {
        id: 14,
        name: "Lakshmi Devi",
        gender: "Female",
        contact: "9876543223",
        designation: "Database Administrator"
    },
    {
        id: 15,
        name: "Manoj Kumar",
        gender: "Male",
        contact: "9876543224",
        designation: "System Administrator"
    },
    {
        id: 16,
        name: "Swathi Reddy",
        gender: "Female",
        contact: "9876543225",
        designation: "Frontend Developer"
    },
    {
        id: 17,
        name: "Naveen Kumar",
        gender: "Male",
        contact: "9876543226",
        designation: "Backend Developer"
    },
    {
        id: 18,
        name: "Harini Prasad",
        gender: "Female",
        contact: "9876543227",
        designation: "Software Engineer"
    },
    {
        id: 19,
        name: "Sanjay Gupta",
        gender: "Male",
        contact: "9876543228",
        designation: "Technical Lead"
    },
    {
        id: 20,
        name: "Meena Kumari",
        gender: "Female",
        contact: "9876543229",
        designation: "Recruiter"
    },
    {
        id: 21,
        name: "Ajay Reddy",
        gender: "Male",
        contact: "9876543230",
        designation: "Full Stack Developer"
    },
    {
        id: 22,
        name: "Kavya Sharma",
        gender: "Female",
        contact: "9876543231",
        designation: "Data Scientist"
    },
    {
        id: 23,
        name: "Prakash Rao",
        gender: "Male",
        contact: "9876543232",
        designation: "Cloud Engineer"
    },
    {
        id: 24,
        name: "Neha Kapoor",
        gender: "Female",
        contact: "9876543233",
        designation: "Product Manager"
    },
    {
        id: 25,
        name: "Ramesh Naidu",
        gender: "Male",
        contact: "9876543234",
        designation: "Java Developer"
    },
    {
        id: 26,
        name: "Aishwarya Reddy",
        gender: "Female",
        contact: "9876543235",
        designation: "Software Tester"
    },
    {
        id: 27,
        name: "Tarun Singh",
        gender: "Male",
        contact: "9876543236",
        designation: "DevOps Engineer"
    },
    {
        id: 28,
        name: "Shreya Gupta",
        gender: "Female",
        contact: "9876543237",
        designation: "UI/UX Designer"
    },
    {
        id: 29,
        name: "Vamshi Krishna",
        gender: "Male",
        contact: "9876543238",
        designation: "Software Engineer"
    },
    {
        id: 30,
        name: "Deepika Rao",
        gender: "Female",
        contact: "9876543239",
        designation: "Business Analyst"
    },
    {
        id: 31,
        name: "Mahesh Kumar",
        gender: "Male",
        contact: "9876543240",
        designation: "Database Administrator"
    },
    {
        id: 32,
        name: "Nandini Reddy",
        gender: "Female",
        contact: "9876543241",
        designation: "Data Analyst"
    },
    {
        id: 33,
        name: "Surya Prakash",
        gender: "Male",
        contact: "9876543242",
        designation: "Technical Lead"
    },
    {
        id: 34,
        name: "Bhavya Sharma",
        gender: "Female",
        contact: "9876543243",
        designation: "HR Executive"
    },
    {
        id: 35,
        name: "Ganesh Babu",
        gender: "Male",
        contact: "9876543244",
        designation: "Backend Developer"
    },
    {
        id: 36,
        name: "Ritika Singh",
        gender: "Female",
        contact: "9876543245",
        designation: "Frontend Developer"
    },
    {
        id: 37,
        name: "Harsha Vardhan",
        gender: "Male",
        contact: "9876543246",
        designation: "Cloud Engineer"
    },
    {
        id: 38,
        name: "Sowmya Reddy",
        gender: "Female",
        contact: "9876543247",
        designation: "Project Manager"
    },
    {
        id: 39,
        name: "Ravi Teja",
        gender: "Male",
        contact: "9876543248",
        designation: "Full Stack Developer"
    },
    {
        id: 40,
        name: "Monika Patel",
        gender: "Female",
        contact: "9876543249",
        designation: "Software Engineer"
    },
    {
        id: 41,
        name: "Chaitanya Kumar",
        gender: "Male",
        contact: "9876543250",
        designation: "Java Developer"
    },
    {
        id: 42,
        name: "Sravani Rao",
        gender: "Female",
        contact: "9876543251",
        designation: "Data Scientist"
    },
    {
        id: 43,
        name: "Lokesh Reddy",
        gender: "Male",
        contact: "9876543252",
        designation: "DevOps Engineer"
    },
    {
        id: 44,
        name: "Pallavi Sharma",
        gender: "Female",
        contact: "9876543253",
        designation: "Recruiter"
    },
    {
        id: 45,
        name: "Abhishek Verma",
        gender: "Male",
        contact: "9876543254",
        designation: "Software Tester"
    },
    {
        id: 46,
        name: "Tejaswini Rao",
        gender: "Female",
        contact: "9876543255",
        designation: "Business Analyst"
    },
    {
        id: 47,
        name: "Sai Kiran",
        gender: "Male",
        contact: "9876543256",
        designation: "Backend Developer"
    },
    {
        id: 48,
        name: "Lavanya Reddy",
        gender: "Female",
        contact: "9876543257",
        designation: "UI/UX Designer"
    },
    {
        id: 49,
        name: "Mohan Kumar",
        gender: "Male",
        contact: "9876543258",
        designation: "System Administrator"
    },
    {
        id: 50,
        name: "Tanvi Kapoor",
        gender: "Female",
        contact: "9876543259",
        designation: "Product Manager"
    }
];

// console.log(employees);
// let male = [];
// let female = [];

// employees.forEach(({ id, name, gender, contact, designation }) => {

//     if (gender === "Male") {
//         male.push({
//             id,
//             name,
//             gender,
//             contact,
//             designation
//         });
//     }
//     else if (gender === "Female") {
//         female.push({
//             id,
//             name,
//             gender,
//             contact,
//             designation
//         });
//     }

// });

// console.log("Male Employees:", male);
// console.log("Female Employees:", female);


// let m=[]
// let fm=[]
// employees.forEach((ele)=>{
//     if(ele.gender==="male"){
//         m.push(ele)

//     }
//      else{
//        fm.push(ele)
        
//     }
// }
// );
// console.log("Male Employees:", m);
// console.log("Female Employees:", fm);

let animals = [
    { id: 1, name: "Lion", category: "mammal", habitat: "Grassland", age: 8 },
    { id: 2, name: "Tiger", category: "mammal", habitat: "Forest", age: 6 },
    { id: 3, name: "Elephant", category: "mammal", habitat: "Forest", age: 15 },
    { id: 4, name: "Giraffe", category: "mammal", habitat: "Savanna", age: 10 },
    { id: 5, name: "Bear", category: "mammal", habitat: "Forest", age: 9 },
    { id: 6, name: "Deer", category: "mammal", habitat: "Forest", age: 5 },
    { id: 7, name: "Wolf", category: "mammal", habitat: "Forest", age: 7 },
    { id: 8, name: "Zebra", category: "mammal", habitat: "Grassland", age: 4 },
    { id: 9, name: "Horse", category: "mammal", habitat: "Farm", age: 6 },
    { id: 10, name: "Cow", category: "mammal", habitat: "Farm", age: 5 },

    { id: 11, name: "Dog", category: "mammal", habitat: "Domestic", age: 4 },
    { id: 12, name: "Cat", category: "mammal", habitat: "Domestic", age: 3 },
    { id: 13, name: "Monkey", category: "mammal", habitat: "Forest", age: 7 },
    { id: 14, name: "Leopard", category: "mammal", habitat: "Forest", age: 6 },
    { id: 15, name: "Cheetah", category: "mammal", habitat: "Savanna", age: 5 },

    { id: 16, name: "Eagle", category: "bird", habitat: "Mountain", age: 10 },
    { id: 17, name: "Parrot", category: "bird", habitat: "Rainforest", age: 4 },
    { id: 18, name: "Peacock", category: "bird", habitat: "Forest", age: 5 },
    { id: 19, name: "Flamingo", category: "bird", habitat: "Wetland", age: 7 },
    { id: 20, name: "Penguin", category: "bird", habitat: "Antarctica", age: 6 },
    { id: 21, name: "Owl", category: "bird", habitat: "Forest", age: 8 },
    { id: 22, name: "Swan", category: "bird", habitat: "Lake", age: 6 },
    { id: 23, name: "Crow", category: "bird", habitat: "Urban", age: 5 },
    { id: 24, name: "Pigeon", category: "bird", habitat: "Urban", age: 3 },
    { id: 25, name: "Kingfisher", category: "bird", habitat: "River", age: 4 },

    { id: 26, name: "Crocodile", category: "reptile", habitat: "River", age: 14 },
    { id: 27, name: "Snake", category: "reptile", habitat: "Forest", age: 8 },
    { id: 28, name: "Lizard", category: "reptile", habitat: "Desert", age: 4 },
    { id: 29, name: "Turtle", category: "reptile", habitat: "Pond", age: 20 },
    { id: 30, name: "Tortoise", category: "reptile", habitat: "Grassland", age: 30 },
    { id: 31, name: "Komodo Dragon", category: "reptile", habitat: "Island", age: 12 },
    { id: 32, name: "Chameleon", category: "reptile", habitat: "Forest", age: 5 },
    { id: 33, name: "Iguana", category: "reptile", habitat: "Tropical Forest", age: 7 },

    { id: 34, name: "Frog", category: "amphibian", habitat: "Wetland", age: 2 },
    { id: 35, name: "Toad", category: "amphibian", habitat: "Pond", age: 3 },
    { id: 36, name: "Salamander", category: "amphibian", habitat: "Forest", age: 4 },
    { id: 37, name: "Newt", category: "amphibian", habitat: "Pond", age: 3 },

    { id: 38, name: "Shark", category: "fish", habitat: "Ocean", age: 15 },
    { id: 39, name: "Goldfish", category: "fish", habitat: "Aquarium", age: 2 },
    { id: 40, name: "Clownfish", category: "fish", habitat: "Coral Reef", age: 3 },
    { id: 41, name: "Salmon", category: "fish", habitat: "River", age: 4 },
    { id: 42, name: "Tuna", category: "fish", habitat: "Ocean", age: 6 },
    { id: 43, name: "Catfish", category: "fish", habitat: "River", age: 5 },

    { id: 44, name: "Dolphin", category: "mammal", habitat: "Ocean", age: 12 },
    { id: 45, name: "Whale", category: "mammal", habitat: "Ocean", age: 20 },
    { id: 46, name: "Kangaroo", category: "mammal", habitat: "Grassland", age: 8 },
    { id: 47, name: "Panda", category: "mammal", habitat: "Bamboo Forest", age: 7 },
    { id: 48, name: "Gorilla", category: "mammal", habitat: "Rainforest", age: 12 },
    { id: 49, name: "Rabbit", category: "mammal", habitat: "Grassland", age: 3 },
    { id: 50, name: "Camel", category: "mammal", habitat: "Desert", age: 9 }
];
// animals.forEach((e,i,a)=>{
//     console.log(a)
// })

// let mammal=[]
// animals.map((e,i,a))


let emps = [
    {
        id: 1,
        name: "Arun",
        contactNo: "9876543210",
        salary: 45000,
        address: { city: "Chennai", state: "Tamil Nadu" }
    },
    {
        id: 2,
        name: "Ravi",
        contactNo: "9876543211",
        salary: 50000,
        address: { city: "Hyderabad", state: "Telangana" }
    },
    {
        id: 3,
        name: "Anjali",
        contactNo: "9876543212",
        salary: 55000,
        address: { city: "Bengaluru", state: "Karnataka" }
    },
    {
        id: 4,
        name: "Kiran",
        contactNo: "9876543213",
        salary: 48000,
        address: { city: "Vijayawada", state: "Andhra Pradesh" }
    },
    {
        id: 5,
        name: "Akhil",
        contactNo: "9876543214",
        salary: 60000,
        address: { city: "Kochi", state: "Kerala" }
    },
    {
        id: 6,
        name: "Suresh",
        contactNo: "9876543215",
        salary: 42000,
        address: { city: "Mumbai", state: "Maharashtra" }
    },
    {
        id: 7,
        name: "Priya",
        contactNo: "9876543216",
        salary: 52000,
        address: { city: "Jaipur", state: "Rajasthan" }
    },
    {
        id: 8,
        name: "Ajay",
        contactNo: "9876543217",
        salary: 47000,
        address: { city: "Bhopal", state: "Madhya Pradesh" }
    },
    {
        id: 9,
        name: "Vamsi",
        contactNo: "9876543218",
        salary: 58000,
        address: { city: "Visakhapatnam", state: "Andhra Pradesh" }
    },
    {
        id: 10,
        name: "Neha",
        contactNo: "9876543219",
        salary: 49000,
        address: { city: "Pune", state: "Maharashtra" }
    },
    {
        id: 11,
        name: "Asha",
        contactNo: "9876543220",
        salary: 53000,
        address: { city: "Kolkata", state: "West Bengal" }
    },
    {
        id: 12,
        name: "Rohit",
        contactNo: "9876543221",
        salary: 46000,
        address: { city: "Patna", state: "Bihar" }
    },
    {
        id: 13,
        name: "Abhishek",
        contactNo: "9876543222",
        salary: 62000,
        address: { city: "Lucknow", state: "Uttar Pradesh" }
    },
    {
        id: 14,
        name: "Deepak",
        contactNo: "9876543223",
        salary: 44000,
        address: { city: "Chandigarh", state: "Punjab" }
    },
    {
        id: 15,
        name: "Anand",
        contactNo: "9876543224",
        salary: 57000,
        address: { city: "Gurugram", state: "Haryana" }
    },
    {
        id: 16,
        name: "Manoj",
        contactNo: "9876543225",
        salary: 51000,
        address: { city: "Ranchi", state: "Jharkhand" }
    },
    {
        id: 17,
        name: "Akash",
        contactNo: "9876543226",
        salary: 59000,
        address: { city: "Bhubaneswar", state: "Odisha" }
    },
    {
        id: 18,
        name: "Sanjay",
        contactNo: "9876543227",
        salary: 43000,
        address: { city: "Gandhinagar", state: "Gujarat" }
    },
    {
        id: 19,
        name: "Aarti",
        contactNo: "9876543228",
        salary: 54000,
        address: { city: "Dehradun", state: "Uttarakhand" }
    },
    {
        id: 20,
        name: "Naveen",
        contactNo: "9876543229",
        salary: 50000,
        address: { city: "Shimla", state: "Himachal Pradesh" }
    }
];
// let aEmployees = [];

// emps.forEach((employee) => {
//     if (employee.name.startsWith("A")) {
//         aEmployees.push(employee);
//     }
// });

// console.log(aEmployees);

// let x = [];

// emps.forEach((e) => {
//     let { id, name, salary } = e;

//     if (salary <= 50000) {
//         console.log(`${id} ${name} ${salary}`);
//         x.push(e);
//     }
// });

// console.log("Employees with salary <= 50000:");
// console.log(x);

// let x = emps.filter(({ id, name, salary }) => {
//     console.log(`${id} ${name} ${salary}`);
//     return salary <= 50000;
// });

// console.log("Employees with salary <= 50000:");
// console.log(x);
 
let arr = ["ravi", "vamsi", "a", 1, 2, 3, 4, '!', "@", '$', '<'];

let words = [];
let characters = [];
let specialC = [];
let numbers = [];

arr.forEach((element) => {

    if (typeof element === "number") {
        numbers.push(element);
    }
    else if (typeof element === "string") {

        if (element.length > 1) {
            words.push(element);
        }
        else if (/[a-zA-Z]/.test(element)) {
            characters.push(element);
        }
        else {
            specialC.push(element);
        }
    }
});

console.log("Words:", words);
console.log("Characters:", characters);
console.log("Special Characters:", specialC);
console.log("Numbers:", numbers);