import { useState } from "react";
const Hook1 = () => {
    let city = ['Chennai', 'Delhi'];
    let [a, b] = city; //destructuring of array
    console.log(useState()); // {undefined, function}
    let [x, y] = useState(1000); //x? y?

    const one = () =>{
        y(x+10);
    }
    const two = () =>{
        x--;
        y(x);
    }

    let [booklist, updatebook] = useState(['HTML', 'CSS', 'JAVASCRIPT']);
    
    const Addbook = () =>{
        updatebook([...booklist, 'BOOTSTRAP', 'JQUERY', 'REACT', 'VUE']); // meaning of  ... - spread operator
    }
    return(
        <div className="container">
            <h1> How to use useState() ? How it work ? </h1>
            {/* <p> {city[0]} </p>
            <p> {city[1]} </p> */}
            <p> {a} </p> 
            <p> {b} </p>
            <h2> The value is: {x} </h2>
            <p> The value is: {x}</p>
            <p> The x+x : {x + x} </p>
            <button onClick={one}> Click me </button>
            <button onClick={two}> Click me </button>
            <button onClick={Addbook}> Click me </button>
            {
                booklist.map((book, index) =>{
                    return(
                        <p key={index} className="four"> {book} </p>
                    )
                })
            }
        </div>
    )
}
export default Hook1;
