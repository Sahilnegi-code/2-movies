// Group movies based on genre. Priority of genres in case of multiple genres present are:
//         drama > sci-fi > adventure > thriller > crime

const obj = require('./obj');  
// Q.3 Find all movies of the actor "Leonardo Dicaprio".
let helper =  () =>{
    let arr = [];
    let result = {};
    Object.keys(obj).forEach(curr => {
        let tempArr = obj[curr].genre;
        let tempObj = obj[curr];
        tempObj.name = curr;
        tempArr.forEach((currElem)=>{
            if( !result.hasOwnProperty(currElem)   ){
                let genreTemp = []
                genreTemp.push(tempObj);
                result[currElem] = genreTemp;
            }
            else{
                let genreTemp= [...result[currElem] , tempObj];
                result[currElem] = genreTemp;
            }


        })

    } )

return result;

}
const sol4 = () =>{
   
    let moviesData  = helper(); 
    const genrePriority = {
        "drama": 1,
        "sci-fi": 2,
        "adventure": 3,
        "thriller": 4,
        "crime": 5
    };
// console.log(moviesData);
   const tempArray =   Object.keys(moviesData).sort((genre1 , genre2)=>{
        if( genrePriority[ genre1] <   genrePriority[ genre2] ){
            return +1; 
        }
        else{
            return -1;
        }
    })

    let result  = {};
    tempArray.forEach((curr)=>{
        result[curr] = moviesData[curr];
    }) 
return result;
}


console.log(sol4());