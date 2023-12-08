import React from "react";
import { AppContext } from "../App";
import { useContext } from "react";



const cart =()=>{
    const{cart}=useContext(AppContext);
    return(
        <>
        <div>
         cart
        </div>
        </>
    )
}

export default cart