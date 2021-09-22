// Code your solution in this file!
const returnFirstTwoDrivers = function (arrayDrivers) {
    return arrayDrivers.slice (0,2)
}
const returnLastTwoDrivers = function (arrayDrivers) {
    return arrayDrivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers];
console.log(selectingDrivers);

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier
    }
}
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);
   
function selectDifferentDrivers(arrayOfDrivers, callbackFunction){
// console.log(arrayOfDrivers, "array of drivers");
// console.log(callbackFunction, "callback function");
return callbackFunction(arrayOfDrivers);
}
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia' ];
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));