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

    // Method to add a course
    addCourse(course) {
        this.academicDetails.courses.push(course);
    }

    // Method to record a grade for a course
    recordGrade(course, grade) {
        if (this.academicDetails.courses.includes(course)) {
            this.academicDetails.grades[course] = grade;
        } else {
            console.log(`Course ${course} not found.`);
        }
    }

    // Method to update tuition payment status
    updateTuitionStatus(status) {
        this.administrativeDetails.tuitionPaid = status;
    }

    // Method to graduate the student
    graduate() {
        this.administrativeDetails.enrollmentStatus = 'graduated';
        console.log(`${this.personalDetails.name} has graduated.`);
    }

    // Method to delete the student profile
    deleteProfile() {
        this.personalDetails = null;
        this.academicDetails = null;
        this.administrativeDetails = null;
        console.log(`Profile for student ID ${this.personalDetails.studentId} has been deleted.`);
    }

    // Method to display student information
    displayInfo() {
        console.log('Personal Details:', this.personalDetails);
        console.log('Academic Details:', this.academicDetails);
        console.log('Administrative Details:', this.administrativeDetails);
    }
}

// Example usage:
const student1 = new Student('John Doe', 20, 'S12345', 'Computer Science');
student1.addCourse('Data Structures');
student1.recordGrade('Data Structures', 'A');
student1.updateTuitionStatus(true);
student1.displayInfo();

// Graduate the student
student1.graduate();

// Delete the student profile after graduation
student1.deleteProfile();