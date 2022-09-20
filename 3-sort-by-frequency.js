//Question no :3 Given an integer array, sort its element by their frequency and index. i.e., 
//if two elements have different frequencies, then the one which has more frequency should
// come first; otherwise, the one which has less index should come first.

const makeObjectToAssignFrequency = (givenArray) => {
    let frequencyObject = {};
    givenArray.forEach(element => {
        if(frequencyObject[element] == undefined){
            frequencyObject[element] = 1;
        }else{
            frequencyObject[element]++;
        }
    })
    return frequencyObject;
}

const makeArrayByFrequency = (givenArray, frequencyObject) => {
    let resultArray = [];
    givenArray.forEach((element) => {
        if(!(resultArray.includes(element))){
            for(let i=0; i<frequencyObject[element]; i++){
                resultArray.push(element);
            }
        }
    })
    return resultArray;
}


const sortByfrequency = (givenArray) => {
    let frequencyObject = makeObjectToAssignFrequency(givenArray);
    return makeArrayByFrequency(givenArray, frequencyObject);
}

console.log(sortByfrequency([3, 3, 1, 1, 1, 8, 3, 8, 8, 6, 7]))

