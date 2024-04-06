import { useState } from "react";
const Hook6 = ()=>{
    let[allimage,updateImage]=useState(["taddy.jpg","resturent.jpg", "Mumbai.jpg", "Nagpur.jpg"]);
    let [showimage,updateShowImage]= useState(allimage[0]);
    return(
        <div className="container">
            <h1>
                State Management
            </h1>
            <div align = "center">
                <img src={showimage} height="400" width = "500"/>
                <br/><br/>
            </div>
            {
                allimage.map((url, index) => {
                    return(
                        <img key={index} src={url} height={150} width={150} onMouseEnter={updateShowImage.bind(this,url)}/>
                    )
                })
            }
        </div>
    )
}

export default Hook6;