import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const ProtectedRoutes = ({children})=>{
    const username = useSelector((state) => state.user.value);
    if(!username){
       return <Navigate to="/adminlogin" replace/>
    }else{
        return <>{children}</>
    }
}
export default ProtectedRoutes;