const EmpModel = require("../MongoDBModel/employee")


async function getAllEmployees() {
    try {
        console.log("getAll")
        const data = await EmpModel.find({}).exec();
        console.log(data);

    console.log("........................////////////////////////////////////")
        return data;
    } catch (error) {
        console.log(error)
    }
}

async function getEmployeeId(_id) {
    return await EmpModel.find({ _id }).exec();
}

async function deleteEmployeebyId(_id) {
    return await EmpModel.deleteOne({ _id }).exec();
}

async function addEmployee(employee ) {
    const Employee = new EmpModel(employee);
    return await Employee.save();
}

async function updateEmployee(_id, employee) {
    const filter = { _id: _id }; 
    console.log(filter._id); 
    const updates = employee; 

    try {
        const result = await EmpModel.updateOne(filter, updates); 
        return result; 
    } catch (error) {
        console.error("Error updating employee:", error); 
                throw error; 
    }
}

async function getEmployeeName(ename) {
    const regex = new RegExp(ename, 'i');
    console.log(ename,regex);

    const data1 = await EmpModel.find({ 'ename': regex }).exec();
    console.log(data1);
    return data1
}

async function uploadPic(id,employee_pic)
{
    const filter ={_id : id};
    console.log(typeof id);
    const update ={ employee_pic : employee_pic}
    const data = await EmpModel.updateOne(filter,update);
return data;
}

module.exports = { getAllEmployees, uploadPic ,getEmployeeId, deleteEmployeebyId, addEmployee, updateEmployee, getEmployeeName };