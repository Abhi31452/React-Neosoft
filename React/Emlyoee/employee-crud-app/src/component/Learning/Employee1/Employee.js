// import { useEffect, useRef, useState } from "react";
// import { Cards } from "./Cards";
// import e1 from './image/e1.png';
// import { useLoaderData } from "react-router-dom";
// import { deleteEmployeebyId, getAllEmployee, getEmployeesByName } from "../../../model/http";

// export function Employee() {

//     const data = useLoaderData();
//     console.log(data.data);

//     const [employee, setEmployee] = useState(data.data);
//     const [errorMessage ,setMessage] =useState("");
//     const nameNode=useRef();

//     async function getEmp() {
//         const data = await getAllEmployee();
//         console.log(data.data)
//         setEmployee(data.data);
//     }

//     // async function deleteById(id) {
//     //     let ans = window.confirm("Are u sure to delete ");
//     //     if (ans == true) {
//     //         const data = await deleteEmployeebyId(id)

//     //     }
//     //     console.log("Employee Id  : " + id);
//     // }


//     // [
//     //     {name :'Abhishek Auti', id:100, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC2ToROrxELPVz6bizXAkLyrkK9MIjj-iWa3w3eG4-CSA1JwoGHoIdo2mht3cKyXEBb4o&usqp=CAU', dept:'JS', phno : 9090909090 , address : 'WorkEdge Coworx - Coworking Noida, B 23, Sector 63 Road, B Block, Sector 63, Noida, Uttar Pradesh 201301'},
//     //     { name: 'Mayur Argade', id: 149, img:e1 ,dept: 'JS', phno: 9093434230, address: 'WorkEdge Coworx - Coworking Noida, B 23, Sector 63 Road, B Block, Sector 63, Noida, Uttar Pradesh 201301' },
//     //     { name: 'Deepak Kanojiya', id: 110, img:e1 , dept: 'JS', phno: 7867569090, address: 'WorkEdge Coworx - Coworking Noida, B 23, Sector 63 Road, B Block, Sector 63, Noida, Uttar Pradesh 201301' },
//     //     { name: 'Aniket Ramteke', id: 69, img:e1 , dept: 'JS', phno: 9243546690, address: 'WorkEdge Coworx - Coworking Noida, B 23, Sector 63 Road, B Block, Sector 63, Noida, Uttar Pradesh 201301' },
//     //     { name: 'Abhishek Patel', id: 58, img:e1 , dept: 'JS', phno: 7654729390, address: 'WorkEdge Coworx - Coworking Noida, B 23, Sector 63 Road, B Block, Sector 63, Noida, Uttar Pradesh 201301' },
//     //     { name: 'Hardik Jain', id: 210, img:e1 , dept: 'JS', phno: 7856909090, address: 'WorkEdge Coworx - Coworking Noida, B 23, Sector 63 Road, B Block, Sector 63, Noida, Uttar Pradesh 201301' },
//     //     ];
//     useEffect(() => {
//         getEmp();
//     }, [])

//     async function  searchEmp(ename){
//         console.log("name", ename);
//         if(ename!=="")
//         {
//             const data=await getEmployeesByName(ename);
//             console.log(data);
//             if(data.length>0)
//                 setEmployee(data);
//             else
//                 setMessage("NOT FOUND");
//         }
//         else{
//             setMessage("");
//             setEmployee(data);
//         }        
//     }


    // async function deleteById(_id){
    //     //console.log("data from child:"+_id);
    //     const ans=window.confirm("Do you really want to delete?");
    //     if(ans){
    //         const data=await deleteEmployeebyId(_id);
    //        // console.log(data); 
    //         if(data.deletedCount>0) /* data!=null */
    //         {
    //             window.alert("Employee deleted successfully....");
    //             getEmp();
    //         }
    //         else
    //             window.alert("Something went wrong while deleting....");
    //     }
    // }



//     // let Employeecard = employee.map((emp, i) => (
//     //     <Cards key={i} employee={emp} deletebyId={deleteById} />
//     // ));

//     const employeeCards=employee.map((employee, i)=><Cards key={'e'+i} employee={employee} />)

//     return (
//         <>
//         <section className="m-2">
//             <label>Employee name to search:</label>
//             <input type="text" ref={nameNode} onKeyUp={()=>searchEmp(nameNode.current.value)}></input>
//             <span className="text-danger text-bold"> {errorMessage}</span>
//         </section>

//         <div className="container shadow p-3 mb-5 bg-white  rounded-lg">
//             <div className="row">
//                 {employeeCards }

//             </div>
//         </div>
//         </>
        

//     );
// }
// export default Employee;

import { useEffect, useRef, useState } from "react";
import { Cards } from "./Cards";
import e1 from './image/e1.png';
import { useLoaderData } from "react-router-dom";
import { deleteEmployeebyId, getAllEmployee, getEmployeesByName } from "../../../model/http";

export function Employee() {
    const data = useLoaderData();
    console.log(data.data);

    const [employee, setEmployee] = useState(data.data || []);
    const [errorMessage, setMessage] = useState("");
    const nameNode = useRef();

    async function getEmp() {
        const data = await getAllEmployee();
        console.log(data.data);
        setEmployee(data.data || []);
    }

    async function deleteById(_id){
        //console.log("data from child:"+_id);
        const ans=window.confirm("Do you really want to delete?");
        if(ans){
            const data=await deleteEmployeebyId(_id);
           // console.log(data); 
            if(data.deletedCount>0) /* data!=null */
            {
                window.alert("Employee deleted successfully....");
                getEmp();
            }
            else
                window.alert("Something went wrong while deleting....");
        }
    }
    async function searchEmp(ename) {
        console.log("name", ename);
        if (ename && ename.trim() !== "") {
            const data = await getEmployeesByName(ename);
            console.log(data);
            if (data.length > 0) {
                setEmployee(data);
                setMessage("");
            } else {
                setMessage("NOT FOUND");
            }
        } else {
            setMessage("");
            setEmployee(data.data || []);
        }
    }

    useEffect(() => {
        getEmp();
    }, []);

    return (
        <>
            <section className="m-2">
                <label>Employee name to search:</label>
                <input
                    type="text"
                    ref={nameNode}
                    onChange={() => searchEmp(nameNode.current.value)}
                />
                <span className="text-danger text-bold"> {errorMessage}</span>
            </section>

            <div className="container shadow p-3 mb-5 bg-white rounded-lg">
                <div className="row">
                    {employee.map((emp, i) => (
                        <Cards key={'e' + i} employee={emp} deletebyId={deleteById} />
                    ))}
                </div>
            </div>
        </>
    );
}
export default Employee;
