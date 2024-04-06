import {useState, useEffect} from "react";

const Myapi2 = () => {

    let[blogList, updateBlogList] = useState([]);
    const getBlog = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
            updateBlogList(data);
        })
    }

    useEffect(() => {
        getBlog();
    },[true]);

    return(
        <div className="container">
            <h1>Read data from Live server useEffect(), useState(), fetch() </h1>
            {
                blogList.map((blog, index) => {
                    return(
                        <div key={index} className="Myblog"> 
                            <h3>{blog.title}</h3>
                            <p>{blog.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Myapi2;