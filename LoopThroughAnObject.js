"use strict"
const person = {
    name: "John Doe",
    age: 30,
    job: "Software Engineer"
  };
  

  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  

  
  for (let [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
  }