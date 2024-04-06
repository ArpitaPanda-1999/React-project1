import { useState } from "react";
import { useParams, Link } from "react-router-dom";
 const Myapi3 = () =>{
    const{edu, name, city}=useParams();
    return(
        <div>
            <h1>How to use useParams</h1>
            <Link to="/api4/Arpi/Odisha/itus" className="user"> Arpi </Link>
            <Link to="/api4/manali/bharampur/Bca" className="user">manali</Link>
            <Link to="/api4/mama/polosara/MCA" className="user">Mama</Link>

            <h2>Your Name is : {name}</h2>
            <h2>Your city is : {city}</h2>
            <h2>Your education is : {edu}</h2>
        </div>
    )
 }
 
 export default Myapi3;