interface User {
	readonly dbId: number;
	email: string;
	userId: number;
	googleId?: string;
	// startTrial: () => string;
	startTrial(): string;
	getCoupon(couponname: string, value: number): number;
}

interface User {
	githubToken: string;
}

interface Admin extends User {
	role: "admin" | "ta" | "learner";
}

const Suraj: Admin = {
	dbId: 12,
	email: "s.com",
	userId: 123,
	role: "admin",
	githubToken: "asd56446",
	startTrial: () => {
		return "2";
	},
	getCoupon: (name: "suraj50", off: 123) => {
		return 12;
	},
};
