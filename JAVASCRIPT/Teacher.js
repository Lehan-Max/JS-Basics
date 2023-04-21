import {Person} from "./Person.js";

//Named export
export function promote() {
    console.log('promote_function');
}

//Default export
export default class Teacher extends Person{
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    teach() {
        console.log('teach')
    }
}