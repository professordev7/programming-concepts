// Open/Close Principle

// Software entities should be open for extension, but closed for modification.

// *PROBLEM
// NOTE:
// - If we try to add support for a new kind of shape (open for extension),
// We have to modify the getArea() (open for modification) and It's not good!
// class Rectangle {
// 	public width: number;
// 	public height: number;

// 	constructor(width: number, height: number) {
// 		this.width = width;
// 		this.height = height;
// 	}
// }

// class Circle {
// 	public radius: number;

// 	constructor(radius: number) {
// 		this.radius = radius;
// 	}
// }

// function getArea(shapes: (Rectangle | Circle)[]) {
// 	return shapes.reduce((previous, current) => {
// 		if (current instanceof Rectangle) {
// 			return current.width * current.height;
// 		} else if (current instanceof Circle) {
// 			return current.radius * current.radius * Math.PI;
// 		} else {
// 			throw new Error('Unknown shape!');
// 		}
// 	}, 0);
// }

// *SOLUTION
// => Use Polymorphism in Object-Oriented Programming
// Open for extension / Close for modification
interface Shape {
	area(): number;
}

class Rectangle implements Shape {
	public width: number;
	public height: number;

	constructor(width: number, height: number) {
		this.width = width;
		this.height = height;
	}

	area() {
		return this.width * this.height;
	}
}

class Circle implements Shape {
	public radius: number;

	constructor(radius: number) {
		this.radius = radius;
	}

	area() {
		return this.radius * this.radius * Math.PI;
	}
}

function getArea(shapes: Shape[]) {
	return shapes.reduce((previous, current) => previous + current.area(), 0);
}


export default {}