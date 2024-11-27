function getAge(person){
    if(person.yearOfDeath === undefined) person.yearOfDeath = new Date().getFullYear();
    return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(array) {
    const oldest = array.reduce((old, person) => {
        if (getAge(person) > getAge(old)) old = person;
        return old;
    });

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
