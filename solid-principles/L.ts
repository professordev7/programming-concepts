// Liskov Substitution Principle

// Objects in a program should be replaceable with instances of their
// subtypes without alterig the correctness of that program.
// NOTEs:
// - This principle encourages us to use Polymorphism from oop.

// *PROBLEM
// interface Shape {
// 	area(): number;
// }

// class Square implements Shape {
// 	public width: number;

// 	constructor(width: number) {
// 		this.width = width;
// 	}

// 	area() {
// 		return Math.pow(this.width, 2);
// 	}
// }

// class Triangle implements Shape { // xxx The compiler (TS) will check this subtype and show error. Because it doesn't implement the area() method.
// 	public base: number;
// 	public height: number;

// 	constructor(base: number, height: number) {
// 		this.base = base;
// 		this.height = height;
// 	}
// }

// function getArea(shapes: Shape[]) {
// 	return shapes.reduce((previous, current) => previous + current.area(), 0);
// }

// *SOLUTION
// So TypeScript ensures that our application adheres to the Liskov substituion principle.
interface Shape {
	area(): number;
}

class Square implements Shape {
	public width: number;

	constructor(width: number) {
		this.width = width;
	}

	area() {
		return Math.pow(this.width, 2);
	}
}

class Triangle implements Shape {
	public base: number;
	public height: number;

	constructor(base: number, height: number) {
		this.base = base;
		this.height = height;
	}

	area() {
		return (this.base * this.height) / 2;
	}
}

function getArea(shapes: Shape[]) {
	return shapes.reduce((previous, current) => previous + current.area(), 0);
}

const s1 = new Square(2);
const s2 = new Square(2);

console.log(getArea([s1, s2]));

export default {};
