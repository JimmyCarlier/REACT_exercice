import Allarticle from "./Allarticle"

const ShowAllArticle = ({productsFromApi}) =>{
    return(
        <>
        {productsFromApi.map((element) =>(
            <Allarticle article={element}/>
        ))}
        </>
    )
}

export default ShowAllArticle