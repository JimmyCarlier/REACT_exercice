const LateralBar = ({userFromApi}) =>{

    const date = new Date(userFromApi.birthDate)

    return(
        <div className="userInformation">
            <h2>Connecté en tant que {userFromApi.firstName + userFromApi.lastName}</h2>
            <ul>
                <li>Age : {userFromApi.age}</li>
                <li>email : {userFromApi.email}</li>
                <li>phone : {userFromApi.phone}</li>
                <li>adress : {userFromApi.adress}</li>
                <li>city : {userFromApi.city}</li>
                <li>Code Postal : {userFromApi.zipcode}</li>
                <li>Pays : {userFromApi.country}</li>
                <li>Métier : {userFromApi.job}</li>
                <li>Anniversaire : {date.toLocaleDateString()}</li>
            </ul>
        </div>
    )
}

export default LateralBar