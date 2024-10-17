
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { login } from '../../model/userModel';
import { setUser } from '../../react-redux/userSlice';

function AdminLogin() {
    const navigate = useNavigate();
    let username = useRef("");
    let password = useRef();
    const [errorMessage, setMessage] = useState("");
    const dispatch = useDispatch();

    function CollectData(ev) {
        ev.preventDefault();
        const username1 = username.current.value;
        const password1 = password.current.value;
        console.log(username1);
        console.log(password1);
        const res = login(username1, password1);


        if (res) {
            setMessage("");
            dispatch(setUser(username1));
            window.alert("You are logged in sucessfully...")
            navigate('/');
        }
        else
            setMessage("Incorrect username or password")
    }


    return (
        <div className='container rounded' style={{backgroundColor:'#D3D3D3', width:'500px' }}>
            <h4 className='text-center '> Admin login</h4>
            <div className='d-flex justify-content-center'>
                <form className='w-50 p3' onSubmit={CollectData}>
                    <div>
                        <small className="text-danger">{errorMessage}</small>
                    </div>
                    <div className='w-50 mb-3'>
                        <label htmlFor='uname' className='form-label'> username </label>
                        <input type='text' id='uname' className='form-input' ref={username} />
                    </div>

                    <div className='w-50 mb-3'>
                        <label htmlFor='pass' className='form-label'>password</label>
                        <input type='text' id='pass' className='form-input' ref={password} />
                    </div>

                    <Button type="submit" variant="contained" className=" m-2" color="secondary">Submit</Button>
                    <Button type="reset" variant="contained" color="secondary" className=" m-2" >Reset</Button>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin;