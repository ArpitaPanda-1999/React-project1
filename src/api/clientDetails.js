import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const ClientDetails = () => {
    let { clientid } = useParams();
    let[client, updateclient] = useState({address: {geo: {}} , company: {} });

    const getclient = ()=>{
        fetch("https://jsonplaceholder.typicode.com/users/" + clientid)
        .then(res=>res.json())
        .then(clientinfo=>{
            updateclient(clientinfo);
        })
    }
    useEffect(()=>{
        getclient();
    },[]);

    return(
        <div className="container">
            <h1>Client Details : {client.name}</h1>
            <table className="table" width={"800px"}>
                <tr>
                    <td>Client Name</td>
                    <td>{client.name}</td>
                </tr>
                <tr>
                    <td>Client Email</td>
                    <td>{client.email}</td>
                </tr>
                <tr>
                    <td>Client username</td>
                    <td>{client.username}</td>
                </tr>
                <tr>
                    <td colSpan={2}>Full Address</td>
                </tr>
                <tr>
                    <td>City</td>
                    <td>{client.address.city}</td> 
                </tr>
                <tr>
                    <td>Suite</td>
                    <td>{client.address.suite}</td>
                </tr>
                <tr>
                    <td>Street</td>
                    <td>{client.address.street}</td>
                </tr>
                <tr>
                    <td>Zipcode</td>
                    <td >{client.address.zipcode}</td>
                </tr>
                <tr>
                    <td>Lat / Lng</td>
                    <td>{client.address.geo.lat} / {client.address.geo.lng}</td>
                </tr>
                <tr>
                    <td colSpan={2}>Phone Details</td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>{client.phone}</td>
                </tr>
                <tr>
                    <td>Website</td>
                    <td>{client.website}</td>
                </tr>
                <tr>
                    <td colSpan={2}>Company Details</td>
                </tr>
                <tr>
                    <td>Company Name</td>
                    <td>{client.company.name}</td>
                </tr>
                <tr>
                    <td>catchPhrase</td>
                    <td>{client.company.catchPhrase}</td>
                </tr>
                <tr>
                    <td>bs</td>
                    <td>{client.company.bs}</td>
                </tr>
            </table>
        </div>
    )
}

export default ClientDetails;