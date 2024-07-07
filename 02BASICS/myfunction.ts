function addTwo(num: number): number {
	return num + 2;
	// return "Hello!!";
}

function getUpper(val: string) {
	return val.toUpperCase();
}

function SignUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

addTwo(5);
getUpper("as");
SignUpUser("suraj", "Suraj123", false);
loginUser("a", "sa");

// function getVal(myVal: number) {
// 	if (myVal > 5) {
// 		return true;
// 	}
// 	return "200 OK";
// }

const getHello = (s: string): string => {
	return "";
};

// const heros = ["thor", "spiderman", "ironman"]
const heros = [1, 2, 3];

heros.map((hero): string => {
	return `hero id ${hero}`;
});

function consoleError(errmsg: string): void {
	console.log(errmsg);
	// return 43
}
function handleError(errmsg: string): never {
	throw new Error(errmsg);
}

export {};
