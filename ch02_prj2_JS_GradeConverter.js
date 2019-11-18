console.log("Welcome to the Grade Converter App!");

let moreGrades = "y";
while (moreGrades == "y") {
	for (let i = 0; i < 5; i++) {
		// generate random # between 60 and 100
		let input = (Math.floor(Math.random() * 41)) + 60;
		console.log("Numeric Grade = " + input);


		if (input <= 59) {
			console.log("Letter grade: F");
			break;
		}
		else if (input < 67) {
			console.log("Letter grade: D");
			break;
		}
		else if (input < 80) {
			console.log("Letter grade: C");
			break;
		}
		else if (input < 88) {
			console.log("Letter grade: B");
			break;
		}
		else {
			console.log("Letter grade: A");
		}

		moreGrades = "n";

	}
}

console.log("Good bye!");

