const Mycity = () => {
    let citylity = ['Delhi', 'Chennai', 'patna','Bhubaneswar','Bangalore']
    return(
        <div className="container">
            <h1>City list : { citylity.length }</h1>
            <p> {citylity[1]} </p>
            {
                citylity.map((cityname, index) => {
                    return( <p key={index} className="four"> { cityname } </p> )
                })
            }
        </div>
    )
}
export default Mycity;