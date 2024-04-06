import { useState  } from "react";
const ContactUs = () => {
    let[fullname, pickName] = useState("");
    let [nameerror, updatenameerror] = useState("");

    let[mobile, pickMobile] = useState("");
    let [mobileerror, updatemobileerror] = useState("");

    let[email, pickemail] = useState("");
    let [emailerror, updateemilerror] = useState("");

    let[tnc, picktnc] = useState(false);
    let [tncerror, updatetncerror] = useState("");

    const save = () => {
        let formStatus = true;
        var mpattern = /^[0]?[6789]\d{9}$/;
        var epatern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var pattern = /^([a-zA-Z])/;
        //name validation
        if ( fullname == "" || !pattern.test(fullname) ) { 
            updatenameerror("Invalid name");
            formStatus = false;
        }
        else{
            updatenameerror("");
        }
            
        //mobile validation
        if ( !mpattern.test(mobile) ) {
            updatemobileerror("Invalid mobile");
            formStatus = false;
        }
        else{
            updatemobileerror("");
        }

        //email validation
        if ( !epatern.test(email) ) {
            updateemilerror("Invalid email");
            formStatus = false;
        }
        else{
            updateemilerror("");
        }
        
        //tnc validation
        if ( tnc == false ) {
            updatetncerror("Please accept terms and conditions");
            formStatus = false;
        }
        else{
            updatetncerror(""); 
        }   

    }

    return(
        <div className="container">
            <h1>Contact us</h1>
            <table>
                <tbody>
                    <tr>
                        <td>Full Name</td>
                        <td><input type="text" onChange={obj => pickName(obj.target.value)}/> {nameerror} </td>
                    </tr>
                    <tr>
                        <td>Mobile</td>
                        <td><input type="number" onChange={obj => pickMobile(obj.target.value)}/> {mobileerror} </td>
                    </tr>
                    <tr>
                        <td>E-mail id</td>
                        <td><input type="email" onChange={obj => pickemail(obj.target.value)}/> {emailerror} </td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td>
                            <select>
                                <option value= "" >Choose city</option>
                                <option>Bangalore</option>
                                <option>Magalore</option>
                                <option>Chennai</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Message</td>
                        <td>
                            <textarea cols={35} rows={7} maxLength={200}></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <input type="checkbox" onChange={obj => picktnc(obj.target.checked)}/>
                            I accept the terms and conditions
                            {tncerror}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} align="center">
                            <button onClick={save}>Submit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ContactUs;