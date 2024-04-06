import { useState } from "react";

const Hook2 = () => {
    let [fullname, updateName] = useState("");
    let [age, updateAge] = useState("");
    let [city, updateCity] = useState("");
    
    const one = () => {
        updateName("Sachin");
        updateAge("30");
        updateCity("Delhi");
    }

    const two = () => {
        let name = document.getElementById("fname").value;
        updateName(name);
    }

    return(
        <div className="container">
            <h1>About My Profile</h1>
            <p> My name is : {fullname} </p>
            <p> My age is : {age} </p>
            <p> My city is : {city} </p>
            <p> Enter your name : <input type="text" id="fname" /> </p>
            <button onClick={one}> Click me </button>
            <button onClick={two}> Click me </button>
        </div>
    )
}

export default Hook2;