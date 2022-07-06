// Part(1) Encapsulation, Inheritance
// NOTE: Keeping an object's internal state private, and generally making a clear division between its public interface and its private internal state, 
// is called encapsulation.

// NOTE: Interfaces allow you to specify what methods a class should implement.
// Interfaces make it easy to use a variety of different classes in the same way
interface IDepartment {
	description: () => void;
	addEmployee: (emp: { name: string }) => void;
	printEmployeeInformation: () => void;
}

class Department implements IDepartment {
	private employees: { name: string }[] = [{ name: 'John' }];

	constructor(private readonly title: string) {}

	description(this: Department) {
		console.log(`This is the ${this.title} Department.`);
	}

	addEmployee(employee: { name: string }) {
		this.employees.push(employee);
	}

	printEmployeeInformation() {
		if (this.employees && this.employees.length > 0) {
			console.log(
				`The are ${this.employees.length} ${
					this.employees.length > 1 ? 'employees' : 'employee'
				} at the university.`
			);
			console.log(`Employees List: `);
			console.log(this.employees);
		} else {
			console.log('No employee is registed yet!');
		}
	}
}

class ITDepartment extends Department {
	manager: string;
	seniorNetworkEngineerName: string = 'Jane';

	constructor(manager: string) {
		super('IT');

		this.manager = manager;
	}

	get networkTeamLeader() {
		if (this.seniorNetworkEngineerName) {
			return this.seniorNetworkEngineerName;
		}
		throw new Error('Unfortunately, Network team has no team leader yet!');
	}
	set networkTeamLeader(name: string) {
		if (!name) {
			throw new Error('Please enter the name...');
		}
		this.seniorNetworkEngineerName = name;
	}
}

const it = new ITDepartment('John Doe');
it.description();
it.printEmployeeInformation();
it.addEmployee({ name: 'Max' });
it.printEmployeeInformation();

console.log('Network Team leader is: ', it.networkTeamLeader); // x
it.networkTeamLeader = 'Jane Doe';
console.log('Network Team leader is: ', it.networkTeamLeader);
