const Mybook = () => {
    let allbook = [
        {name : "html", cost : 5000, author : "Alex", publish : "true"},
        {name : "CSS", cost : 400, author : "Amit", publish : "false"},
        {name : "Bootstrap", cost : 8000, author : "Aman", publish : "true"},
        {name : "Javascript", cost : 4000, author : "Ashima", publish : "true"}
    ];
    return(
        <div className="container">
            <h1>Manger Books : { allbook.length }</h1>
            <table>
                <thead>
                    <tr>
                        <th>Book name</th>
                        <th>Book cost</th>
                        <th>Book Author</th>
                        <th>Publish status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allbook.map((book , index) => {
                            return(
                                <tr key={index}>
                                    <td>{ book.name }</td>
                                    <td>{ book.cost }</td>
                                    <td>{ book.author }</td>
                                    <td>{ book.publish.toString() }</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Mybook;