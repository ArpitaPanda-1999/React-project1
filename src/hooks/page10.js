import { useState } from "react";

const Hook5 = () => {
    let[details, updatedetails] = useState({
        name : "?",
        email : "?",
        mobile : "?",
        skills : "?"
    });

    let[fullname, pickName] = useState("");
    let[email, pickEmail] = useState("");
    let[mobile, pickMob] = useState("");
    let[skills, pickSkill] = useState("");
    let[education, Pickedu] = useState("");


    const save = () => {
        updatedetails({
            name : fullname,
            email : email,
            mobile : mobile,
            skills : skills,
            education : education
        })
    }
    return(
        <div className="container">
            <h1> How to update an object </h1>
            <table align="left">
                <tbody>
                    <tr>
                        <td> Name </td>
                        <td> <input type="text" onChange={obj => pickName(obj.target.value)} /> </td>
                    </tr>
                    <tr>
                        <td> E-mail </td>
                        <td> <input type="email" onChange={obj => pickEmail(obj.target.value)}/> </td>
                    </tr>
                    <tr>
                        <td> Mobile no. </td>
                        <td> <input type="number" onChange={obj => pickMob(obj.target.value)}/> </td>
                    </tr>
                    <tr>
                        <td> Skills </td>
                        <td> <textarea cols="20" rows="5" onChange={obj => pickSkill(obj.target.value)}/> </td>
                    </tr>
                    <tr>
                        <td> Education </td>
                        <td> 
                           <select onChange={obj => Pickedu(obj.target.value)}>
                                <option value="SSC"> Choose </option>
                                <option value="10th"> 10th </option>
                                <option value="12th"> 12th </option>
                                <option value="Graduation"> Graduation </option>
                                <option value="Post Graduation"> Post Graduation </option>
                           </select>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} align="center">
                            <button onClick={save}> Process </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table align="right" width={"50%"}>
                <tbody>
                    <tr>
                        <td> Name </td>
                        <td> {details.name} </td>
                    </tr>
                    <tr>
                        <td> E-mail </td>
                        <td> {details.email} </td>
                    </tr>
                    <tr>
                        <td> Mobile no. </td>
                        <td> {details.mobile} </td>
                    </tr>
                    <tr>
                        <td> Skills </td>
                        <td> {details.skills} </td>
                    </tr>
                    <tr>
                        <td> Education </td>
                        <td> {education} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Hook5;