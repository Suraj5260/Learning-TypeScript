// const User = {
// 	name: "Suraj",
// 	email: "Suraj@5260.dev",
// 	isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// createUser({ name: "suraj", isPaid: true });

// let newUser = { name: "suraj", isPaid: true, email: "suraj@s.com" };

// createUser(newUser);

// function createCourse(): { name: string; price: number } {
// 	return { name: "web dev", price: 69 };
// }

// type User = {
// 	name: string;
// 	email: string;
// 	isActive: boolean;
// };

// function createUser(user: User): User {
// 	return { name: "", email: "", isActive: true };
// }

// createUser({ name: "", email: "", isActive: true });

type User = {
	readonly _id: string;
	name: string;
	email: string;
	isActive: boolean;
	ccDetails?: number;
};

let myUser: User = {
	_id: "2234",
	name: "S",
	email: "S@S.com",
	isActive: false,
};

myUser.email = "asd";
// myUser._id = "qwd";

export {};
