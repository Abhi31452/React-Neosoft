const mongoose = require("mongoose");

const empSchema =new mongoose.Schema(

    {
        _id : Number,
        empName : String ,
        basicSal : Number ,
        deptCode : String,
        joiningDate : Date,
        experience : Number,
        scode : Number,
        ccode : Number,
        employee_pic:{
            data : Buffer,
            contentType :String
        }
    }
)

const Employee = mongoose.model("employee", empSchema)

module.exports= Employee; 
