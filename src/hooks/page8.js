import { useState } from "react";

const Hook3 = () => {
    let [userlist, updatelist] = useState( ['user1','user2' ] ); 
    let[fullname, pickName] = useState("mahesh");
    const save = () => {
        //alert(fullname);
        updatelist([...userlist, fullname]);
        pickName("");
    }
    const del = (index) => {
        // alert(index)
        userlist.splice(index , 1); //a-b
        updatelist(userlist =[...userlist]); // a=a
    }
    return(
        <div>
            <h1> React input & out put using usestate() </h1>
            <p> your Name : {fullname} </p>
            <p>
                Enter New Name : <input type="text" onChange={obj => pickName(obj.target.value) } value={fullname} />
                <button onClick={save}> Save </button>
                
            </p>
            {
                userlist.map((userName, index) => {
                    return(
                        <p className="four" key={index}> {userName}
                            <br/>
                            <button onClick={del.bind(this, index)}> Delete </button>
                        </p>
                    )
                })
            }
        </div>
    )
}
export default Hook3;