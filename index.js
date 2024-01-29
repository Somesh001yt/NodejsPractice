const express = require("express");
const mongoose = require("mongoose");
require("./config");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.json());

const classRoutes = require("./routes/classRoutes");
const studentRoutes = require("./routes/studentsRoutes");
const subjectRoutes = require("./routes/subjectRoutes");
const teacherRoutes = require("./routes/teacherRoutes");

app.use("/", studentRoutes);
app.use("/", classRoutes);
app.use("/", subjectRoutes);
app.use("/", teacherRoutes);

app.get('/' , (req , res) => {
  try{
   res.send('Hello')
  }catch (error){
    console.log(error)
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
