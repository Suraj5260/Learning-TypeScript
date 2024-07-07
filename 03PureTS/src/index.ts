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
	protected _courseCount = 1;

	readonly city: string = "Chandrapur";
	constructor(
		public email: string, // public is by default
		public name: string // private userId: string
	) {}

	private deleteToken() {
		console.log("Token Deleted!!");
	}

	get getAppleEmail(): string {
		return `apple${this.email}`;
	}

	get courseCount(): number {
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
	isFamily: boolean = true;
	changeCourseCount() {
		this._courseCount = 4;
	}
}

const suraj = new User("s.com", "suraj");
// suraj.city

// suraj.deleteToken()
