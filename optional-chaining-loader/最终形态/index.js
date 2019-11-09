const person = {
    name: 'xuqiang',
    // school: {
    //     middleSchool: 'lishang middle school',
    //     highSchool: 'cunan second school'
    // }
};

const highSchool = person.school?.highSchool;

console.log(highSchool);