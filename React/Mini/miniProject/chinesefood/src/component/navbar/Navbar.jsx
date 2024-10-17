import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { resetUser, setUser } from "../../react-redux/userSlice";


let Navbar = () => {

  // document.querySelector("Link").addEventListener("mouseover",(event)=>{ event.target.style.color ="purple"; setTimeout(()=>{event.target.className="text-warning" },500) ;} , false);
  let cookie = new Cookies();
  const username = useSelector((state) => state.user.value);
  console.log(username);

  const dispatch = useDispatch();

  function logout() {
    cookie.remove("user");
    dispatch(resetUser());
    window.alert(" Log out ...")
  }

  let [hover, setHover] = useState(false);
  let [hoverhome, setHoverhome] = useState(false);
  let [hoverfood, setHoverfood] = useState(false);

  // console.log(hover ,"--hover" ,hoverhome)
  useEffect(() => {
    console.log("store:", username);
    const uname = cookie.get('user');
    if (uname !== undefined)
      dispatch(setUser(uname));

  })
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-danger " style={{ height: "100px" }}>
        <div className="container-fluid ">
          <Link className={`navbar-brand h1 font-weight-bold ${hover ? 'link-info' : 'text-warning'}`} style={{ fontSize: "calc(0.4*100px)" }} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} to={"/"}>Food Center</Link>


          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link active h-50 `} to="/"
                  style={{ color: hoverhome ? '#79d81b' : ' #dccadc ', transition: 'color 0.3s ease ', fontSize: "calc(0.25*100px)" }}
                  aria-current="page" onMouseOver={() => setHoverhome(true)} onMouseOut={() => setHoverhome(false)}>Home</Link>
              </li>
              {/* <li className="nav-item">
          <a className="nav-link active h-50 " 
            style={{color : hoverhome ? '#79d81b':' #dccadc ' , transition : 'color 0.3s ease ' , fontSize :"calc(0.25*100px)"}}
          aria-current="page" onMouseOver={()=> setHoverhome(true)} onMouseOut={()=>setHoverhome(false)} >About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active h-50 " 
            style={{color : hoverhome ? '#79d81b':' #dccadc ' , transition : 'color 0.3s ease ' , fontSize :"calc(0.25*100px)"}}
          aria-current="page" onMouseOver={()=> setHoverhome(true)} onMouseOut={()=>setHoverhome(false)} >Contact</a>
        </li> */}
              <li className="nav-item">
                <Link className="nav-link active h-50 " to={'/foodItems'}
                  style={{ color: hoverfood ? '#79d81b' : ' #dccadc ', transition: 'color 0.3s ease ', fontSize: "calc(0.25*100px)" }}
                  aria-current="page" onMouseOver={() => setHoverfood(true)} onMouseOut={() => setHoverfood(false)} >Food Item</Link>
              </li>

              <li className="nav-item">
                {!username == "" && <Link className="nav-link active h-50 " to={'/addFooditem'}
                  style={{ color: hoverfood ? '#79d81b' : ' #dccadc ', transition: 'color 0.3s ease ', fontSize: "calc(0.25*100px)" }}
                  aria-current="page" onMouseOver={() => setHoverfood(true)} onMouseOut={() => setHoverfood(false)} >Add Food Item</Link>
                }
              </li>

            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item h5 text-info">
                {username == "" && <Link className="nav-link active h-50 "
                  to={'/adminlogin'}>Login</Link>}
              </li>

              <li className="nav-item">
                {!username == "" && <Link className="nav-link active h-50 " onClick={logout}  >LogOut</Link>}
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  );

}

export default Navbar;