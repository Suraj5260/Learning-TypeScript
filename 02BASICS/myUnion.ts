let score: number | string = 44;
score = 90;
score = "sds";

type User = {
	user: string;
	id: number;
};

type Admin = {
	username: string;
	id: number;
};

let Suraj: User | Admin = {
	user: "Suraj",
	id: 996,
};

Suraj = {
	username: "Suraj5260",
	id: 556,
};

//  Array

const data1: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (number | string)[] = [1, "2", "3"];
