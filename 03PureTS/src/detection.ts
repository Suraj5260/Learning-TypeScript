// Type Narrowing

// use typeof ketword to be sure of the type of the variable

interface User {
	name: string;
	email: string;
}

interface Admin {
	name: string;
	email: string;
	isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
	if ("isAdmin" in account) {
		return "its an Admin";
	}
	return "its a User";
}

// in is also an important keyword as helps to know if the interface has the specific property or not

function logValue(x: Date | string) {
	if (x instanceof Date) {
		console.log(x.toUTCString());
	} else {
		console.log(x.toUpperCase());
	}
}

// instaceof tells if the new keyword is used to make the variable.

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
	return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
	if (isFish(pet)) {
		pet;
		return "fish food";
	} else {
		pet;
		return "bird food";
	}
}

// is keyword manually tells ts what the type is .

interface Circle {
	kind: "circle";
	radius: number;
}

interface Square {
	kind: " square";
	side: number;
}

interface Rectangle {
	kind: "rectangle";
	length: number;
	width: number;
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
	if (shape.kind === "circle") {
		return Math.PI * shape.radius ** 2;
	}
	// return shape.side ** 2;
}

function getArea(shape: Shape) {
	switch (shape.kind) {
		case "circle":
			return Math.PI * shape.radius ** 2;

		case " square":
			return shape.side ** 2;

		case "rectangle":
			return shape.length * shape.width;

		default:
			const _defaultForShape: never = shape;
			return _defaultForShape;
	}
}
