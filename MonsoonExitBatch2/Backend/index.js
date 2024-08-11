const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://abhinavnairb21cs1202:abhinav@cluster0.4nj2edp.mongodb.net/empdb?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('DB is connected');
}).catch((err) => {
  console.error('DB connection error:', err);
});

const Employee = require("./model"); 


app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const result = await Employee.create(req.body); 
    res.status(201).send({ message: "Employee added", data: result });
  } catch (error) {
    console.error("Error adding employee:", error);
    res.status(500).send({ message: "Error adding employee", error });
  }
});

app.get("/get", async (req, res) => {
  try {
    const employees = await Employee.find(); 
    res.status(200).send(employees); 
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).send({ message: "Error fetching employees", error });
  }
});


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
