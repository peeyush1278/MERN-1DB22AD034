class Student {
    constructor(name, age, studentId, major) {
        this.personalDetails = {
            name: name,
            age: age,
            studentId: studentId,
        };
        this.academicDetails = {
            major: major,
            courses: [],
            grades: {},
        };
        this.administrativeDetails = {
            enrollmentStatus: 'enrolled',
            tuitionPaid: false,
        };
    }

    addCourse(course) {
        this.academicDetails.courses.push(course);
    }

    recordGrade(course, grade) {
        if (this.academicDetails.courses.includes(course)) {
            this.academicDetails.grades[course] = grade;
        } else {
            console.log(`Course ${course} not found.`);
        }
    }

    updateTuitionStatus(status) {
        this.administrativeDetails.tuitionPaid = status;
    }

    graduate() {
        this.administrativeDetails.enrollmentStatus = 'graduated';
        console.log(`${this.personalDetails.name} has graduated.`);
    }

    deleteProfile() {
        const studentId = this.personalDetails.studentId; // Store studentId before nullifying
        this.personalDetails = null;
        this.academicDetails = null;
        this.administrativeDetails = null;
        console.log(`Profile for student ID ${studentId} has been deleted.`);
    }

    displayInfo() {
        console.log('Personal Details:', this.personalDetails);
        console.log('Academic Details:', this.academicDetails);
        console.log('Administrative Details:', this.administrativeDetails);
    }
}

const student1 = new Student('John Doe', 20, 'S12345', 'Computer Science');
student1.addCourse('Data Structures');
student1.recordGrade('Data Structures', 'A');
student1.updateTuitionStatus(true);
student1.displayInfo();

student1.graduate();

student1.deleteProfile();