const obj = require('./obj');
const helper = require( './solution1');  
const sol2 = () =>{
    let tempArray = helper();

let result  = tempArray.filter((currObj)=>{
        return currObj.oscarNominations  > 3 ;
    })
return result;
}


console.log(sol2());