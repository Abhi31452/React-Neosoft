const express = require("express")
const cors = require("cors")
const multer = require("multer")

const mongoose = require("mongoose")
const mongodb = require('./Config/mongodb')
const Employee = require("./MongoDBModel/employee")
const { getAllEmployees, getEmployeeId, deleteEmployeebyId, addEmployee, updateEmployee ,getEmployeeName, uploadPic } = require("./Api/EmployeeApi")

const upload = multer();

const app =  express();
app.use(cors({origin:'*'}));

app.use(express.json());

const port = 4002;

app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});

app.get("/" , function(req,res){
console.log(req);
res.send("Welcome............");
});

app.get("/getAll" ,async function (req,res){
    const data =  await getAllEmployees();
    res.send(data);
})

app.get("/getbyId/:id" , async function(req,res) {
    console.log(req.params.id)
    const data = await getEmployeeId(req.params.id);
    res.send(data);
})

app.get("/getemp/:ename" , async function (req,res){
    console.log(req.params.ename)
    const data = await getEmployeeName(req.params.ename);
    res.send(data);
})

app.delete("/deletebyId/:_id" , async function (req,res){
    const data  = await deleteEmployeebyId(req.params._id);
    res.send(data);
})

app.post("/addEmployee" ,upload.single("employee_pic"), async function (req,res){
    console.log(req.body)
    const {_id, empName ,basicSal ,deptCode ,joiningDate , experience, scode ,ccode } = req.body;
    
    console.log("employee_pic",req.file.buffer);
    const newEmployee = new Employee(
        {
            _id,
            empName,
            basicSal,
            deptCode,
            joiningDate,
            experience,
            scode,
            ccode,
            employee_pic :req.file.buffer,
 
        });
    
        // const data = await newEmployee.save();
        const data = await addEmployee(newEmployee);
        console.log("saved data : ",data);
        // console.log("employee_pic",req.file.buffer);
        
        return res.status(200).json({
           success:true,
           data: data
        })
})

app.put("/updateEmployee/:_id" ,async(req,res)=>{
    console.log(req.body);
    const {_id, ... employee} = req.body;
    const data = await updateEmployee(req.params._id ,employee );
    res.send(data);
})

app.put("/upload/:id" , upload.single("employee_pic") ,async(req,res)=>{
    const data = await uploadPic(req.params.id, req.file.buffer);
    res.send(data)
})