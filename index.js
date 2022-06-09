// Code your solution in this file!
const returnFirstTwoDrivers = function (Listdrivers) {
    return Listdrivers.slice(0, 2);
};

const returnLastTwoDrivers = function (passDriversList) {
    return passDriversList.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (fareRate) {
    return function (fareRank) {
        return fareRate * fareRank;
    };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, returnDrivers) {
    return returnDrivers(drivers);
};
