function getSum(...num){
    let res=num.reduce((acc,curr)=>{
         return acc=acc+curr;
        
    })
    console.log(res)
}
getSum(1,2,4,5,6,3,8)