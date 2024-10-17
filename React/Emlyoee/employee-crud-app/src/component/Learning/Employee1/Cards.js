 import { Link } from 'react-router-dom';
import './Card.css';

import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import Button from '@mui/material/Button';



export function Cards({ employee ,deletebyId }) {
    let sample_pic = "https://www.nordstudio.ch/wp/wp-content/uploads/2018/02/mitarbeiter-business-fotos_06.jpg";
    return (
        <div className="card d-flex m-4 " style={{ width: '18rem' , boxShadow:'inset gray 0px 0px 60px -12px' }}>
          <img src={employee.employee_pic ?`data:image/png;base64,${employee.employee_pic}`:sample_pic} 
        height="170" width="170" alt="employee" />
            <Link to={`/editpic/${employee._id}`} className="btn btn-info m-2">Edit Pic</Link>
            <div className="card-body"> 
                <h4 className="card-title"> {employee.ename}</h4>  <hr/>
                <p className="card-text"> {employee._id}</p>
                <p className="card-text exo-light ">Dept: {employee.dept_code}</p>
                <p className="card-text exo-light ">Experience: {employee.experience}</p>
                <p className="card-text exo-light ">Email: {employee.email}</p>
                <p className="card-text exo-light ">secret Code: {employee.scode}</p>

                <Button fontSize="large" startIcon={<CreateIcon/>} className='border bg-info bg-gradient rounded p-2 fw-bolder' color='warning' to ={`/edit/employee/${employee._id}`}>Edit</Button>

                
                <Button  fontSize="large" startIcon={<DeleteIcon/>} className='border bg-info bg-gradient  rounded p-2 fw-bolder' color="error"  onClick={()=>deletebyId(employee.id)}> Delete</Button>

            </div>
        </div>
    );
}

export default Cards;
