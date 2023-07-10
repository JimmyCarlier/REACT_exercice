const Coworking = ({element}) =>{
    return(
        <div className="Article">
        <h2>{element.name}</h2>
        <img src={element.image} alt="" className="image"/>
        <p>Address : {element.address}</p>
        <p>City : {element.city}</p>
        <p>Note : {element.rating}</p>
        </div>
    )
}

export default Coworking