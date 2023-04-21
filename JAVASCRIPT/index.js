// import {Teacher, promote} from "./Teacher.js";
import Teacher, {promote} from "./Teacher.js";

//Default export -> import ... from '';
//Named export   -> import {...} from '';

const Teacher1 = new Teacher('Max', 'B.E');
Teacher1.teach();
Teacher1.walk();
console.log(Teacher1.name)
console.log(Teacher1)
const Teacher2 = new Teacher('Lehan', 'Engineering');
Teacher2.teach();
Teacher2.walk();
console.log(Teacher2.name)
console.log(Teacher2)
console.log(promote)