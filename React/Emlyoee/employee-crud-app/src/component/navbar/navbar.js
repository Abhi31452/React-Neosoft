import { useContext, useEffect } from "react";
// import { Mycontext } from "../../app/App";
import {appName} from "../../app/App.js"
import { Link } from "react-router-dom";
import { useSelector ,useDispatch } from "react-redux";
import { resetUser, setUser } from "../../react-redux/userSlice.js";
import Cookies from "universal-cookie";

let Navbar = ()=>{
  let cookie = new Cookies();
  let contextData  = useContext(appName);

  const username=useSelector((state)=>state.user.value);
  console.log(username);
  
  const dispatch=useDispatch();

  function logout(){
    cookie.remove("user");
    dispatch(resetUser());
 window.alert(" Log out ...")
  }

  useEffect(()=>{
    console.log("store:", username);
    const uname = cookie.get('user');
    if(uname!==undefined)
      dispatch(setUser(uname));
  
  })
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary" >
  <div className="container-fluid bg-info">
    <a className="navbar-brand" href="#">{contextData}   </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/employees"} >ShowEmployees </Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to={"/addEmployee"}>Add Employee</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>

      </form>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        {username =="" &&  <Link className="nav-link" to={"/adminLogin"}>Login</Link>}
        </li>
        <li className="nav-item">
          {!username =="" &&  <Link  onClick={logout}  className="nav-link" >Log  Out </Link> }
        </li>
        </ul>
    </div>
  </div>
</nav>
  );
}

export default Navbar;