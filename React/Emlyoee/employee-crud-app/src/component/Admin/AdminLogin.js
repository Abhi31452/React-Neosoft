import { useRef, useState } from "react";
import Button from '@mui/material/Button';
import { login } from "../../model/UserModel";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../react-redux/userSlice";

export function AdminLogin(){
    const navigate=useNavigate();
    const [errorMessage, setMessage]=useState("");
    let usernameNode=useRef();
    let passwordNode=useRef();
    const dispatch = useDispatch();
    
    function collectData(ev){
        ev.preventDefault();
        const username=usernameNode.current.value;
        const password=passwordNode.current.value;
        // console.log(username);
        // console.log(password);
        const res=login(username, password);
        // we will test admin credentials
        if(res) {
            setMessage("");
            dispatch(setUser(username));
            window.alert("You are logged in sucessfully...")
            navigate('/');
        }
        else
            setMessage("Incorrect username or password")
    }
    return (
        <>
        <h4 className="text-center">ADMIN LOGIN</h4>
         <div className="d-flex justify-content-center">
             <form className="w-50 bg-secondary p-3" onSubmit={collectData}>
                <div>
                    <small className="text-danger">{errorMessage}</small>
                </div>
               <div className="w-50  mb-3">
                   <label htmlFor="username" className=" text-info form-label">USERNAME</label>
                   <input type="text" className="form-control" id="username"  ref={usernameNode} required />
               </div>
               <div className="w-50 mb-3">
                   <label htmlFor="password" className="text-info form-label">PASSWORD</label>
                   <input type="password" className="form-control" id="password" ref={passwordNode}  required />
               </div>
               <Button type="submit" variant="contained"  className="m-2" color="secondary">Submit</Button>
               <Button type="reset" variant="contained" color="secondary" >Reset</Button>
           </form> 
         </div>
        </>
    );

}