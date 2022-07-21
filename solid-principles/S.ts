// Single Responsibilty Principle

// A class should have only a single responsibility.
// NOTEs:
// - The most effective way to break applications is to create GOD classes.
// - A God class is a class that knows too much or does too much. The God object is an example of an anti-pattern.




// *PROBLEM:
// GOD class example:
// NOTES:
// - We don't need validateEmail() for this class.
// - GOD classes leads to bigger maintenance mess due to changes to each properties and methods.
// class Person {
//     public name: string;
//     public surname: string;
//     public email: string;

//     constructor(name: string, surname: string, email: string) {
//         this.surname = surname;
//         this.name = name;

//         if (this.validateEmail(email)) {
//             this.email = email;
//         } else {
//             throw new Error('Invalid email!')
//         }
//     }

//     validateEmail(email: string) {
//         const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

//         return re.test(email);
//     }
//     greet() {
//         alert('Hi!')
//     }
// }


// NOTEs:
// Single Responsibility makes it so much easier to see what a class does and 
// how you can extend/improve it.
// *SOLUTION
// Divide into two different classes:


class Email {
	public email: string;

	constructor(email: string) {
		if (this.validateEmail(email)) {
			this.email = email;
		} else {
			throw new Error('Invalid email!');
		}
	}

	validateEmail(email: string) {
		const re =
			/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

		return re.test(email);
	}
}

class Person {
	public name: string;
	public surname: string;

	constructor(name: string, surname: string) {
		this.surname = surname;
		this.name = name;
	}

	greet() {
		alert('Hi!');
	}
}
