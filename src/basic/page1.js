const Myuser = () => {
    let alluser = [
        {cityname : "Bangalore" , activeuser : ['Aman','Anisha']},
        {cityname : "chennai" , activeuser : ['Arpita']},
        {cityname : "Delhi" , activeuser : ['Ankita']},
        {cityname : "Bhubaneswar" , activeuser : ['Amisha','Rameswar']},
        {cityname : "Patna" , activeuser : ['Abhinash', 'Ashesna', 'Kavya']}
    ];
    return(
        <div className="container">
            <h1>Manger user : {alluser.length}</h1>
            {
                alluser.map((user, index) => {
                    return( 
                        <fieldset key={index}>
                            <legend> {user.cityname} </legend>
                            {
                                user.activeuser.map((fullname,index2) => {
                                    return(
                                        <p key={index2}> {fullname} </p>
                                    )
                                })
                            }
                        </fieldset>
                    )
                })
            }
        </div>
    )
}
export default Myuser;