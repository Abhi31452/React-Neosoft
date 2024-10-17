import './App.css';
import React from 'react';
import Header from '../component/header/Header.jsx'
import Footer from '../component/Footer/footer.js';
// import Carousel from '../component/Carousel/Carousel.js';
import { Learning } from '../component/Learning/Learning.jsx';
import Employee from '../component/Learning/Employee1/Employee.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../component/navbar/navbar.js';
import Counter1 from '../component/Counter/Counter1.js';
import EmployeeForm from '../component/EmployeeForm/Employeeform.js';
import { AdminLogin } from '../component/Admin/AdminLogin.js';
import { Outlet } from 'react-router-dom';

export const Mycontext = React.createContext();
export let appName ="NeoSoft Employee Management " ;//jsx expression

function App() {

  return (
    <Mycontext.Provider value={appName}>
      
          <div style={{backgroundColor:'#d9d8cf'}}>
      <h3 className="mainHeading"  style={{backgroundColor:'#d7f4af'}} > {appName}</h3>
      
      
      <Header/>
      <Navbar/>
      {/* <Learning/> */}
    {/* <EmployeeForm/>
    <AdminLogin/> */}
    <Outlet></Outlet>
    {/* <Counter1/> */}
      {/* <Employee/> */}
      {/* <Carousel/> */}
      <Footer/> 
   </div>
   </Mycontext.Provider>

  );
}

export default App;
