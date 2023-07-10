import Coworking from "./Coworking"

const Allspace = ({coworkingsFromFakeApi}) =>{
    return(
        <div className="allArticle">
        {coworkingsFromFakeApi.map((element) =>(
                <Coworking element={element} />
            
        ))}
        </div>
    )
}

export default Allspace