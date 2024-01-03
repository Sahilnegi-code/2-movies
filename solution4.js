// Sort movies (based on IMDB rating)
// if IMDB ratings are same, compare totalEarning as the secondary metric.


const obj = require('./obj');  
// Q.3 Find all movies of the actor "Leonardo Dicaprio".
let helper =  () =>{
    let arr = [];
    Object.keys(obj).map(curr =>{
        let tempObj = obj[curr];
        tempObj.name = curr;
        arr.push(tempObj); 
    } )
return arr;

}
const sol4 = () =>{
   
    let moviesData  = helper(); 

    moviesData.sort((data1 , data2) =>{
        if( data1.imdbRating !== data2.imdbRating ){
            if( data1.imdbRating > data2.imdbRating ){
                return -1;
            }
            return 1;
        }
        let data1Earning = data1.totalEarnings.replace('$', '').replace('M', '');
        let data2Earning = data2.totalEarnings.replace('$', '').replace('M', '');
        return parseInt(data2Earning) - parseInt(data1Earning);
    }) 


return moviesData;
}


console.log(sol4());