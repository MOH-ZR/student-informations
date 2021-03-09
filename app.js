'use strict';

const Student = function(id, name, email, mobile, age, tuition) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.mobile = mobile;
    this.age = age;
    this.tuition = tuition;
    this.render = function() {
        getFromLocalStorage();
        let tableElement = document.getElementById('info');
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');

        for (let i = 0; i < Student.allStudents.length; i++) {
            td1.textContent = Student.allStudents[i].id;
            td2.textContent = Student.allStudents[i].name;
            td3.textContent = Student.allStudents[i].email;
            td4.textContent = Student.allStudents[i].mobile;
            td5.textContent = Student.allStudents[i].age;
            td6.textContent = Student.allStudents[i].tuition;
        }

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);

        tableElement.appendChild(tr);

        let pElement = document.getElementById('total');
        pElement.textContent = 'Total: ' + total;

    };
    Student.allStudents.push(this);
}

Student.allStudents = [];
let total = 0;
let id = 0;

let formElement = document.getElementById('form');
formElement.addEventListener('submit', handler);

function handler(event) {
    event.preventDefault();
    let emailInput = document.getElementById('email');
    let phoneInput = document.getElementById('phone');
    let tuitionInput = document.getElementById('tuition');

    let studentName = emailInput.value.split('@')[0];
    let studentEmail = emailInput.value;
    let studentMobile = phoneInput.value;
    let studentAge = Math.floor(Math.random() * (24 - 18 + 1) + 18);
    let studentTuition = parseInt(tuitionInput.value);
    total += studentTuition;
    id++;
    let newStudent = new Student(id, studentName, studentEmail, studentMobile, studentAge, studentTuition);
    saveToLocalStorage();
    newStudent.render();
}

function saveToLocalStorage() {
    localStorage.setItem('students', JSON.stringify(Student.allStudents));
}

function getFromLocalStorage() {
    Student.allStudents = JSON.parse(localStorage.getItem('students'));
}