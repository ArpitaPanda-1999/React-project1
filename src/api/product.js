import {useState, useEffect} from "react";
const Mypro = () => {
    let[allpro, updateallpro] = useState([]);
    
    const getpro = () => {
        fetch("http://localhost:1234/products")
        .then((res) => res.json())
        .then((data) => {
            updateallpro(data);
        })
    }

    useEffect(() => {
        getpro();
    }, []);

    let[pname, setpname] = useState("");
    let[pprice, setpprice] = useState("");
    let[pcategory, setpcatagory] = useState("");
    let[pcolor, setpcolor] = useState("");

    const save = () => {
        if(editproduct == ""){
            let url = ""
            let newpro = {
                pname : pname,
                pprice : pprice,
                pcategory : pcategory,
                pcolor : pcolor
            }
            let postData = {
                headers : {
                    "Content-Type" : "application/json"
                },
                method : "POST",
                body : JSON.stringify(newpro)
            }
            fetch(url, postData)
            .then((res) => res.json())
            .then((data) => {
                getpro();
                setpname("");
                setpprice("");
                setpcatagory("");
                setpcolor("");
            }) 
        }
        else{
            let url = "http://localhost:1234/products/" + editproduct
            let newpro = {
                pname : pname,
                pprice : pprice,
                pcategory : pcategory,
                pcolor : pcolor
            }
            let postData = {
                headers : {
                    "Content-Type" : "application/json"
                },
                method : "PUT",
                body : JSON.stringify(newpro)
            }
            fetch(url, postData)
            .then((res) => res.json())
            .then((data) => {
                getpro();
                setpname("")
                setpprice("");
                setpcatagory("");
                setpcolor("");
            })
        }
    }

    const deletepro = (id) => {
        let url = "http://localhost:1234/products/" + id
        let postData = {
            method : "DELETE"
        }
        fetch(url, postData)
        .then((res) => res.json())
        .then((data) => {
            getpro();
        })
    }
    
    let[editproduct, seteditproduct] = useState("");
    const editpro = (editid) => {
        seteditproduct(editid.id);
        setpname(editid.pname);
        setpprice(editid.pprice);
        setpcatagory(editid.pcategory);
        setpcolor(editid.pcolor);
    }

    return (
            <div className="container" align = "center">
                <h1>CRUD using API</h1>
                <table className="table">
                    <tr>
                        <th>Product Name</th>
                        <input type="text"  placeholder="Enter Product Name" onChange={(obj) => setpname(obj.target.value)} value={pname} />
                    </tr>
                    <tr>
                        <th>Product Price</th>
                        <input type="text" placeholder="Enter Product Price" onChange={(obj) => setpprice(obj.target.value)} value={pprice} />

                    </tr>
                    <tr>
                        <th>Product Category</th>
                        <input type="text" placeholder="Enter Product Category" onChange={(obj) => setpcatagory(obj.target.value)} value={pcategory} />
                    </tr>
                    <tr>
                        <th>Product Color</th>
                        <input type="text" placeholder="Enter Product Color" onChange={(obj) => setpcolor(obj.target.value)} value={pcolor} />
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button onClick={save}> Save </button>
                        </td>
                    </tr>
                </table>
                
                <table className="table">
                    <thead>
                        <tr>
                            <th>Product Id</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Product Category</th>
                            <th>Product Color</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allpro.map((pro, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{pro.pname}</td>
                                        <td>{pro.pprice}</td>
                                        <td>{pro.pcategory}</td>
                                        <td>{pro.pcolor}</td>
                                        <td><button onClick={deletepro.bind(this, pro.id)}>Delete</button></td>
                                        <td><button onClick={editpro.bind(this, pro)}>Edit</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
    )
}

export default Mypro;