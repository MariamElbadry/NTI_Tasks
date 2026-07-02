class Person {
    name;
    #id;
    #email;

    constructor(name, id, email) {
        this.name = name;
        this.#id = id;
        this.#email = email;
    }
    get id() {return this.#id;}
    get email() {return this.#email; }
    role() {
        console.log("Just a person in the system.");
    }
}

class Principal extends Person {
    constructor(name, id, email) {
        super(name, id, email);
        this.members = [];
    }

    add_member() {
        if (member.constructor.name === "Teacher" || member.constructor.name === "Student") {
            this.members.push(member);
            console.log(user.member + " added.");
        } else {
            console.log("Invalid member.");
        }
    }

    remove_member(id) {
        const index = this.members.findIndex(member => member.id === id);

        if (index !== -1) {
            console.log(this.members[index].name + " is removed.");
            this.member.splice(index, 1);
        } else {
            console.log("This member is not found.");
        }
    }

    role() {
        console.log("Principal adds and removes users.");
    }
}

class Teacher extends Person {
    constructor(name, id, email, subject) {
        super(name, id, email);
        this.subject = subject;
        this.students = [];
    }

    garde(studentName, grade) {
        this.students.push({studentName,grade});
        console.log(studentName + " is graded.");
    }

    listStudents() {
        console.log(this.students);
    }

    role() {
        console.log("Teacher teaches and grades students");
    }
}

class Student extends Person {
    constructor(name, id, email) {
        super(name, id, email);
        this.enrollments = [];
    }

    enroll(course) {
        this.enrollments.push({course: course});
        console.log("you enrolled in this course.");
    }

    viewEnrollmentss() {
        console.log(this.enrollments);
    }

    action() {
        console.log("Students enroll in courses.");
    }
}


const principal = new Principal("Mr. Ahmed");
const teacher = new Teacher("Ms. Sara");
const student = new Student("Ali");


principal.addMember(teacher);
principal.addMember(student);

console.log();
teacher.gradeStudent(student, "A");
console.log();

student.enrollSubject("Mathematics");
student.enrollSubject("Physics");

console.log();

const members = [principal, teacher, student];
members.forEach(member => member.describeRole());
