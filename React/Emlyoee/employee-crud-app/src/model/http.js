 import axios from "axios";

 const url ="http://localhost:4002";

 export async function getAllEmployee(){
    const data =await axios.get(`${url}/getAll`);
    console.log(data);
    return  data;
 }

 export async function getEmployeeById(_id){
    console.log(_id);
    const res= await axios.get(`${url}/getbyId/${_id}`)
    console.log(_id,res.data);
    return res.data;
 }

 export async function getEmployeesByName(ename){
    const response=await axios.get(`${url}/getemp/${ename}`); //`${url2}/${_id}`
    return response.data;
}

export async function deleteEmployeebyId(_id){
    const response = await axios.delete(`${url}/deleteEmployee/${_id}`);
    return response.data;
}

export async function addEmployee(formData) {
    const response = await axios.post(`${url}/addEmployee`,formData);
    return response.data;
}

export async function updateEmployee(employee){
    const response = await axios.put(`${url}/updateEmployee/${employee._id}`,employee)
    return response.data;
}

export async function uploadFile(_id,employee_pic){
    let formData=new FormData();
    formData.append('employee_pic',employee_pic)
    const response=await axios.put(`${url}/upload/${_id}`,formData)
    //console.log(response.data);
    return response.data;
}