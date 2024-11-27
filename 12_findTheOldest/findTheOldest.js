function getAge(person){
    if(person.yearOfDeath === undefined) person.yearOfDeath = new Date().getFullYear();
    return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        return (getAge(person) > getAge(oldest)) ? person : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
