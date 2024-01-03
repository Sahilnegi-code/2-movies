const obj = require('./obj');
const sol1 = () =>{
    let result = [];
    for( let key in obj){

        let totalEarnings = obj[key].totalEarnings.replace('$', '').replace('M', '');
        let tempObj = {}
        if( parseInt(totalEarnings)  > 500 ){
         
            tempObj = obj[key];
            tempObj.name = key;
            result.push(tempObj);
        }
    }
return result;
}


module.exports = sol1;