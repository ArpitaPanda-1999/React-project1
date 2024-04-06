import {useState, useEffect} from "react";

const Myemp = () => {
    let[allemp, updateallemp] = useState([]);

    const getemp = () => {
        fetch("http://localhost:1234/emplist")
        .then((res) => res.json())
        .then((data) => {
            updateallemp(data);
        })
    }

    useEffect(() => {
        getemp();
    }, []);
    
    let[fullname, setfullname] = useState("");
    let[city, setcity] = useState("");
    let[skills, setskills] = useState("");
    let[salary, setsalary] = useState("");

    const save = () => {
        if(editid == ""){
            let url = "http://localhost:1234/emplist"
            let newemp = {
                name : fullname,
                city : city,
                skills : skills,
                salary : salary
            }
            let postData = {
                headers : {
                    "Content-Type" : "application/json"
                },
                method : "POST",
                body : JSON.stringify(newemp)
            }
            fetch(url, postData)
            .then((res) => res.json())
            .then((data) => {
                getemp();
                setfullname("");
                setcity("");
                setskills("");
                setsalary("");
            })
        }
        else{ 
            let url = "http://localhost:1234/emplist/" + editid
            let newemp = {
                name : fullname,
                city : city,
                skills : skills,
                salary : salary
            }
            let postData = {
                headers : {
                    "Content-Type" : "application/json"
                },
                method:"PUT",
                body : JSON.stringify(newemp)
            }
            fetch(url, postData)
            .then((res) => res.json())
            .then((data) => {
                getemp();
                setfullname("");
                setcity("");
                setskills("");
                setsalary("");
                seteditid("");
            })

        }
    }
    const deleteEmp = (id) => { 
        let url = "http://localhost:1234/emplist/" + id
        let postData = {
            method : "DELETE"
        }
        fetch(url, postData)
        .then((res) => res.json())
        .then((data) => {
            getemp();
        })
    }
    
    let[editid, seteditid] = useState("");
    const editEmp = (empdata) => {
        seteditid(empdata.id);
        setfullname(empdata.name);
        setcity(empdata.city);
        setskills(empdata.skills);
        setsalary(empdata.salary);
    }
    
    return(
        <div className="container">
            <h1>Manage Employee : {allemp.length}</h1>
            <div align="center">
                <input type="text" placeholder="Enter Employee name" onChange={(obj) => setfullname(obj.target.value)} value={fullname} />
                <input type="text" placeholder="Enter Employee city" onChange={(obj) => setcity(obj.target.value)} value={city} />
                <input type="text" placeholder="Enter Employee skills" onChange={(obj) => setskills(obj.target.value)} value={skills} />
                <input type="text" placeholder="Enter Employee salary" onChange={(obj) => setsalary(obj.target.value)} value={salary} />
                <button onClick={save}> Save Employee </button>
            </div>
            <table align="center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Skills</th>
                        <th>Salary</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allemp.map((emp, index) => {
                            return(
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.city}</td>
                                    <td>{emp.skills}</td>
                                    <td>{emp.salary}</td>
                                    <td><button onClick={deleteEmp.bind(this, emp.id)}>Delete</button></td>
                                    <td><button onClick={editEmp.bind(this, emp)}>Edit</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
            
}


export default Myemp;