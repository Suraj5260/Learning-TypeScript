abstract class TakePhoto {
	constructor(public cameraMode: string, public filter: string) {}

	abstract getSepia(): void;
	getReelTime(): number {
		return 8;
	}
}

class Instagram extends TakePhoto {
	constructor(public CM: string, public FF: string, public burst: number) {
		super(CM, FF);
	}
	getSepia(): void {
		console.log("sepia");
	}
}

const Suraj = new Instagram("test", "test", 4);
Suraj.getReelTime();
