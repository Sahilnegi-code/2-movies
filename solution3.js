const obj = require('./obj');  
// Q.3 Find all movies of the actor "Leonardo Dicaprio".
const sol3 = () =>{
   let tempArray = Object.keys(obj);
   let result = []; 
   tempArray.filter((curr)=>{
if( obj[curr].actors.includes('Leonardo Dicaprio')  ){
    let tempObj = obj[curr];
    tempObj.name = curr;
    result.push(tempObj);
}

   })
return result;
}


console.log(sol3());