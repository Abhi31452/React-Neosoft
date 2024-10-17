import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { deletebyId } from '../../model/http';
import Button from '@mui/material/Button';

import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useSelector } from 'react-redux';

function FoodCard({ food }) {
  let nav = useNavigate();


  const username = useSelector((state) => state.user.value);

  // Log food.image_url to the console
  console.log('Food Image URL:', food.image_url);

  // console.log(food,"food.name")
  async function deleteId(id) {
    console.log("data from child " + id);
    let ans = window.confirm("sure");
    console.log("23....",ans)
    nav('/foodItems')

    if (ans) {
      const data = await deletebyId(id);
      console.log(data)
      nav('/');
    }
  }

  return (
    < >

      <div className="card justify-content-around" style={{ width: '280px', hieght:'110px', margin:'2px' }}>
        <img src={food.image_url} style={{hieght:'60px' , width : 'auto'}} className="card-img-top" alt={food.name} />
        <div className="card-body">
          <h5 className="card-title"> {food.id}</h5>
          <h5 className="card-title"> {food.name}</h5>
          <p className="card-text"> {food.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> {food.price}</li>
          <li className="list-group-item"> {food.category}</li>
          <li className="list-group-item"> {food.quantity_in_stock}</li>
          <li className="list-group-item"> {food.rating}</li>
        </ul>
        <div className=" d-flex flex-column m-3">
          {/* <Link to= {`/updatefood/${food.id}`} className="card-link">Edit</Link> */}
          {/* <Link className="card-link"  onClick={()=>deleteId(food.id)}>Delete</Link> */}
         {!username =="" && <Button className='p-2' component={Link} to={`/updatefood/${food.id}`} variant="contained" startIcon={<BorderColorIcon />}>
            Edit
          </Button>}
          {!username =="" && <Button className='p-2' variant="outlined" startIcon={<DeleteIcon />}  onClick={() => deleteId(food.id)}>
            Delete
          </Button>}
        </div>
      </div>

    </>
  )
}

export default FoodCard
