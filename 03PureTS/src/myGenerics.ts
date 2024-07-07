const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
	return val;
}

function identityTwo(val: any): any {
	return val;
}

function identityThree<Type>(val: Type): Type {
	return val;
}

// identityThree("3");

function identityFour<T>(val: T): T {
	return val;
}

interface Bottle {
	brand: string;
	type: number;
}

// identityFour<Bottle>({ brand: "st", type: 12 });

function getSearchProducts<T>(params: T[]): T {
	const myIndex = 6;
	return params[myIndex];
}

const getMoreSearchProducts = <T>(args: T[]): T => args[12];

interface Database {
	connection: string;
	username: string;
	password: string;
}

function anotherFunc<T, U extends Database>(one: T, two: U): object {
	return {
		one,
		two,
	};
}

// anotherFunc(21, {});

interface Quiz {
	name: string;
	type: string;
}

interface Course {
	name: string;
	author: string;
	subjects: string;
}

class Sellable<T> {
	public cart: T[] = [];

	addToCart(article: T) {
		this.cart.push(article);
	}
}
