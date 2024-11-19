const sumAll = function(rangeValue1, rangeValue2) {
    let rangeStart, rangeEnd;
    if(rangeValue1 < rangeValue2)   {
        rangeStart = rangeValue1, rangeEnd = rangeValue2;
    }
    else{
        rangeStart = rangeValue2, rangeEnd = rangeValue1;
    }
    let sum = rangeStart, counter = rangeStart;
    while (counter < rangeEnd){
        sum += counter + 1;
        counter++;
    }
    return sum;
};



// Do not edit below this line
module.exports = sumAll;
