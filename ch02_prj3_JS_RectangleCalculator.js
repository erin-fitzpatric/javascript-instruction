let length = 100;
let width = 200;
let moreRectangles = "y";

while (moreRectangles == "y") {
	let area = width * length;
	let perimeter = 2 * width + 2 * length;
	console.log("Area: " + area);
	console.log("Perimeter: " + perimeter);
	moreRectangles = "n";
}
console.log("Good Bye!");	
