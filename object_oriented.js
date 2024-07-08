#! /usr/bin/env node
import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programsStart = async (persons) => {
    do {
        console.log("Welcome!!");
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "whome would you like to intract with?",
            choices: ["staff", "student", "exit"]
        });
        if (ans.select == "staff") {
            console.log("you approach the staff room.please  feel free to ask any question");
        }
        else if (ans.select == "student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter  the student's name you wish to engage with:??"
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`hello i am  ${name.name}.Nice to meetyou!`);
                console.log("New Student Added");
                console.log("Current students list:");
                console.log(persons.students);
            }
            else {
                console.log(`Hello i am  ${student.name}.Nice to meeet you!`);
                console.log("Existing  student Lost:");
                console.log(persons.students);
            }
        }
        else if (ans.select == "exit") {
            console.log("Existing  the program...");
            process.exit();
        }
    } while (true);
};
programsStart(persons);
