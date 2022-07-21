// Interface Segregation

// Many client-specific interfaces are better than one general-purpose interface.
// NOTEs:
// - This principle helps us prevent violations of the Single Responsibility Principle and Seperation of Concerns (SoC).

// *PROBLEM
// We have two domain entities: Rectangle, Circle.
// We have area() service in the domains.
// We want to serialize them in the infrastructure layer. => add serilize() to the Shape Interface.

// interface Shape {
// 	area(): number;
// 	serilize(): string;
// }

// class Rectangle implements Shape {
// 	public width: number;
// 	public height: number;

// 	constructor(width: number, height: number) {
// 		this.width = width;
// 		this.height = height;
// 	}

// 	public area() {
// 		return this.width * this.width;
// 	}

// 	public serilize(): string {
// 		return JSON.stringify(this);
// 	}
// }

// class Circle implements Shape {
// 	public radius: number;

// 	constructor(radius: number) {
// 		this.radius = radius;
// 	}

// 	public area() {
// 		return Math.pow(this.radius, 2) * Math.PI;
// 	}

// 	public serilize(): string {
// 		return JSON.stringify(this);
// 	}
// }

// // > QUESTION: Do we really need serialize() in our domain layer??? NO!
// function getArea(shapes: Shape[]) {
// 	return shapes.reduce((previous, current) => previous + current.area(), 0);
// }

// // > QUESTION: Do we really need area() in our infrastructure layer??? NO!
// // ...
// const rectangle = new Rectangle(1, 2);
// rectangle.serilize();

// NOTEs:
// - Adding serilize() to the Shape Interface was a violation of SoC and SRP.
// - Shape is a [business concern] and serializable is an [infrastructure concern]. We shouldn't miz these two different concerns.
// - Interface Segregation: Many client-specific interfaces are better than one general-purpose interface.

// *SOLUTION:

interface RectangleInterface {
	width: number;
	height: number;
}

interface CircleInterface {
	radius: number;
}

interface Shape {
	area(): number;
}

interface Serializable {
	serilize(): string;
}

// ===> Implementing Domain Layer <===
class Rectangle implements RectangleInterface, Shape {
	public width: number;
	public height: number;

	constructor(width: number, height: number) {
		this.width = width;
		this.height = height;
	}

	public area() {
		return this.width * this.height;
	}
}

class Circle implements CircleInterface, Shape {
	public radius: number;

	constructor(radius: number) {
		this.radius = radius;
	}

	public area() {
		return this.radius * this.radius * Math.PI;
	}
}

function getArea(shapes: Shape[]) {
	return shapes.reduce((previous, current) => previous + current.area(), 0);
}

// ===> Implementing Infrastructure Layer <===
class RectangleDTO implements RectangleInterface, Serializable {
	public width: number;
	public height: number;

	constructor(width: number, height: number) {
		this.width = width;
		this.height = height;
	}

	public serilize(): string {
		return JSON.stringify(this);
	}
}

class CircleDTO implements CircleInterface, Serializable {
	public radius: number;

	constructor(radius: number) {
		this.radius = radius;
	}

	public serilize(): string {
		return JSON.stringify(this);
	}
}

// CONCLUSION:
// - We used mutiple interfaces instead of one general-purpose interface
// => Prevent violation of Single Responsibility Principle (no GOD class) and Seperation of Concerns (domain/infrastructure layers).
// - Rectangle and RectangleDTO are the same?! (violation of DRY-don't Repeat Yourself)
// NO! They are two different concerns. We two pieces of code look equal, it doesn't mean they have the same functionality.
// DRY vs. SOLID ? DRY is less important than the SOLID.

export default {};
