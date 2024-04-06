import { useState,useEffect } from "react";

const Myapi1 = () => {
    let[allBook, updateAllBook] = useState([]);
    let[allCity, updateAllCity] = useState([]);
    let[allJob, updateAllJob] = useState([]);

    const getBook = () =>{
        fetch("Book.json")
        .then((res) => res.json())
        .then((data) => {
            updateAllBook(data);
        });
    }

    const getCity = () =>{
        fetch("City.json")
        .then((res) => res.json())
        .then((data) => {
            updateAllCity(data);
        })
    }

    const getJob = () =>{
        fetch("Job.json")
        .then((res) => res.json())
        .then((data) => {
            updateAllJob(data);
        })
    }

    useEffect(() => {
        getJob();

    }, [true]);
    return(
        <div className="container">
            <h1>fetch(), useState(), useEffect() in React </h1>
            <div align = "center">
                <button onClick={getBook}>Book List</button>
                <button onClick={getCity}>City List</button>
            </div>
            <fieldset>
                <legend >All Book : {allBook.length} </legend>
                {
                    allBook.map((bookname, index) => {
                        return(
                            <p key={index}> {bookname} </p>
                        )
                    })
                }
            </fieldset>
            <fieldset>
                <legend>All City : {allCity.length}</legend>
                {
                    allCity.map((cityname, index) => {
                        return(
                            <p key={index}> {cityname} </p>
                        )
                    })
                }
            </fieldset>
            <fieldset>
                <legend>Job List : {allJob.length}</legend>
                {
                    allJob.map((jobname, index) => {
                        return(
                            <p key={index} > {jobname} </p>
                        )
                    })
                }
            </fieldset>
        </div>
    )
}

export default Myapi1;