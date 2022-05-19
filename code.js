const _ = require("lodash");
//ex3
const randomNumber = (min, max) => {
    return _.random(min, max);
}

//ex4
const minumber = (array) => {
    return _.min(array)
}

//ex5
const sumNumber = (array) => {
    return _.sum(array)
}


//ex6
const bigLetters = (array) => {
    return _.upperCase([array])
}

//ex7
const MLetters = (value) => {
    return _.startsWith(value, "m")
}

//ex8
const ObjLetters = (object) => {
    return _.keys(object)
}


            //ex9
            const ObjaLetters = (object) => _.keys(object) 

            console.log(ObjaLetters({ miki:"handsome", shon:"adorable", tomer:"man"}))



            //ex10
            
