import { useEffect, useState } from "react";
import { Employee } from "../../classes/Employee/Employee";
import { useLoaderData, useLocation } from "react-router-dom";
import { addEmployee, updateEmployee } from "../../model/http";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';



export function EmployeeForm() {

    // let [id, setid] = useState(0);
    let location =useLocation();
    let emp = useLoaderData();
    let [employee,setEmployee] = useState(initialEmp);
    const formData = new FormData();
    let Dept_code = ['JS' , 'Dotnet' ,'Java','php'];
    const [file, setFile] = useState("")

    useEffect(()=>{
        // console.log(location)
        // console.log(" Employee.....",employee)
    })
    
    function initialEmp(){
        if(location.pathname.includes("/addEmployee"))
        {
            return new Employee();
        }else{
            console.log(" Data in Employee" ,emp[0]._id);
            return emp[0];
        }
    }

    function changeState(ev) {
        console.log(ev.target.id)
        // console.log(ev.target.value)
        if(ev.target.id == "employee_pic"){
            setFile(ev.target.files[0])
            console.log(file);
        
        formData.append('employee_pic',file);
            
        }else{
        setEmployee({...employee ,[ev.target.id] :ev.target.value})
        }
    }

    function CollectData(ev){
        ev.preventDefault();
    
        Object.entries(employee).forEach(([key , value])=>{
            if(key !=='employee_pic'){
                        console.log(key ,value);
            formData.append(key,value);}
        })
        

        if(location.pathname.includes("/addEmployee")){
            console.log("hiiiiii")
            addEmp();
        }else{
        updateEmp();
        }
      
    }

    async function addEmp()
    {
        console.log("//////add Emp")
        const emp =await addEmployee(formData);
        if(emp!=null){
            window.alert("Emplopyee Added " + employee._id)
            
        }else{
            window.alert("Some Error")
        }
    } 

    async function updateEmp(){
        const data = await updateEmployee(employee);
    }
    return (
        <>
            <div className=" h1 text-center text-bold "> Employee Form </div>
            <div className="d-flex justify-content-center bottom-left-0 ">

            <form className="w-50 p-3 " style={{border : "2px solid grey"}} onSubmit={CollectData} method="post" encType="multipart/form-data">
                    <div className="mb-3">
                        <label htmlFor="_id" className="form-label"> Enter Id</label>
                        <input type="number" id="_id" value={employee._id} className="form-control" onChange={changeState} readOnly ={ location.pathname.includes('/edit/employee')}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="ename" className="form-label"> Enter Name</label>
                        <input type="text" id="ename" value={employee.ename} onChange={changeState} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label"> Enter email</label>
                        <input type="email" id="email" value={employee.email} onChange={changeState} className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="sal" className="form-label"> Salary</label>
                        <input type="number" id="sal" value={employee.sal} onChange={changeState} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exp" className="form-label"> Experience</label>
                        <input type="number" id="exp" value={employee.exp} onChange={changeState} className="form-control" />
                    </div><br></br>
              
                    <div className="mb-3">
                        <select htmlFor="exp" className="form-control"value={employee.dept_code}  onChange={changeState} required > Dept Code
                        {Dept_code.map((dept ,i)=><option key={i}>{dept}</option>)}
                       
                    </select>
                    </div>


                    <div className="mb-3">
                        <label htmlFor="scode" className="form-label"> Enter Secerte code </label>
                        <input type="number" id="scode" value={employee.scode} onChange={changeState} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="employee_pic" className="form-label"> Upload Pic</label>
                        <input type="file" id="employee_pic"  value={employee.employee_pic} required onChange={changeState} className="form-control"></input>
                    </div>
               
                    <Button type="Submit" className="m-2" color="success" variant="contained"> Submit</Button>
                    <Button variant="contained" color="secondary" >Reset</Button>
            </form >
    
    </div>

        </>

    );
}

export default EmployeeForm;