import express from "express";
import { filter } from "lodash";
import fetch from "node-fetch"; // for dad jokes API

const app = express();
app.use(express.json()); // to parse JSON body

// 👉 Simple in-memory object for students
let students = [
  { id: 1, name: "Ani", age: 22 },
  { id: 2, name: "Kailash", age: 23 }
];

// ========== 2. GET all students ==========
app.get("/students", (req, res) => {
  res.json(students);
});
  
// ========== 3. POST (add new student) ==========
app.post("/students", (req, res) => {
  console.log(req.body); // log the incoming data'
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    age: req.body.age
  };

  if(students.find(s => s.name === req.body.name)){
    res.send("hey he already exist")
  }
  students.push(newStudent);
  res.status(201).json(newStudent);
});
  
  // ========== 4. PUT (replace full student data) ==========
  app.put("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = students.findIndex(s => s.id === id);
  
    if (index === -1) return res.status(404).json({ message: "Student not found" });
  
    // full replace
    students[index] = {
      id,
      name: req.body.name,
      age: req.body.age
    };
  
    res.json(students[index]);
  });
  
  // ========== 5. PATCH (update part of student data) ==========
  app.patch("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);
  
    if (!student) return res.status(404).json({ message: "Student not found" });
  
    // update only the fields provided
    if (req.body.name !== undefined) student.name = req.body.name;
    if (req.body.age !== undefined) student.age = req.body.age;
  
    res.json(student);
  });
  

  function filterquick(id){
    const filteredStudents = []
    for(const s of students){
      if(s.id === id) filteredStudents.push(s);
    }
    return filteredStudents;
  }
  // ========== 6. DELETE student ==========
  app.delete("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    students = filterquick(id);
    res.json({ message: "Student deleted" });
  });
  
  // ========== Start Server ==========
  app.listen(3000, () => {
    console.log("🚀 Server running on http://localhost:3000");
  });