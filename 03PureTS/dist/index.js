"use strict";
// class User {
// 	public email: string;
// 	name: string;
// 	private readonly city: string = "Chandrapur";
// 	constructor(email: string, name: string) {
// 		this.email = email;
// 		this.name = name;
// 	}
// }
class User {
    constructor(email, // public is by default
    name // private userId: string
    ) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Chandrapur";
    }
    deleteToken() {
        console.log("Token Deleted!!");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count must be more than one.");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const suraj = new User("s.com", "suraj");
// suraj.city
// suraj.deleteToken()
