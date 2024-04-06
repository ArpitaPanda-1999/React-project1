import { useState } from "react";

const Hook4 = () => {
    let[alluser, updateUser] = useState( [
        {name : "arpita", mobile : "345678", age : 65, edu : "M.Tech"},
        {name : "amisha", mobile : "876588", age : 23, edu : "B.Tech"}
    ] );

    let[fullname, pickName] = useState("");
    let[mobilenum, pickMob] = useState("");
    let[age, pickAge] = useState("");
    let[education, Pickedu] = useState("");
    let[msg, updateMsg] = useState("Enter user details...");
    let[btntext ,update] = useState("save user");

    const save = () => {
        let newuser = {name : fullname, mobile : mobilenum, age : age, edu : education };

        if (userindex !== -1) {
            alluser[userindex] = newuser;
            updateindex(-1);
            updateMsg(fullname + " updated successfully");
            update("save user");
        } else {
            updateUser( [...alluser, newuser] );
            updateMsg(fullname + " added successfully");
        }

        pickName("");
        pickMob("");
        pickAge("");
        Pickedu("")
    }

    const deleteuser = (index, name) => {
        alluser.splice(index, 1);
        updateUser([...alluser]);
        updateMsg(name + " deleted successfully");
    }
    
    let[userindex, updateindex] = useState(-1);
    const editUser = (user, index) => {
        updateindex(index);
        pickName(user.name);
        pickMob(user.mobile);
        pickAge(user.age);
        Pickedu(user.edu);
        update("update user");
    }
    return(
        <div className="container">
            <h1> Array of object Add, List, Delete</h1>
            <p>Total user : {alluser.length} # {userindex} </p>
            <p>{msg}</p>
            <table align="left">
                <tbody>
                    <tr>
                        <td>Fullname</td>
                        <td><input type="text" onChange={obj => pickName(obj.target.value)} value={fullname} /></td>
                    </tr>
                    <tr>
                        <td>Mobile no</td>
                        <td><input type="number" onChange={obj => pickMob(obj.target.value)} value={mobilenum} /></td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td><input type="number" onChange={obj => pickAge(obj.target.value)} value={age}/></td>
                    </tr>
                    <tr>
                        <td>Education</td>
                        <td><input type="text" onChange={obj => Pickedu(obj.target.value)} value={education}/></td>
                    </tr>
                    <tr>
                        <td colSpan={2} align="center">
                            <button onClick={save}> {btntext} </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                        <th>SL. no</th>
                        <th>Full name</th>
                        <th>Mobile name</th>
                        <th>Age</th>
                        <th>Education</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alluser.map((user, index) => {
                            return(
                                <tr key={index}>
                                    <td> {index} </td>
                                    <td> {user.name} </td>
                                    <td> {user.mobile} </td>
                                    <td> {user.age} </td>
                                    <td> {user.edu} </td>
                                    <td> <button onClick={editUser.bind(this, user, index)}> edit </button> </td>
                                    <td> <button onClick={deleteuser.bind(this, index, user.name)}> delete </button> </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Hook4;
