
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../reactredux/counterSlice";

export function Increment(){
    const counter1=useSelector((storestate)=>storestate.counter.value);
    const dispatch=useDispatch();
    return (
        <>
        <p>
            {counter1}
        </p>
        <button onClick={()=>dispatch(increment())}>INCREMENT by 1</button>
        </>
    );
}
