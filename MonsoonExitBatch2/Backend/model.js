const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  EmpName: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  empId: {
    type: String,
    required: true,
    unique: true,
  },
  img_url: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
  collection: 'emps' 
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
