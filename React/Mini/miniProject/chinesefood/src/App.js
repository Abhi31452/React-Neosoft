import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer className="footer"/>
 
    </>
  );
}

export default App;
