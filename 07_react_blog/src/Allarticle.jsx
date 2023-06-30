const Allarticle = ({article}) =>{
    const myDate = (element)=>{
        const dateTo = new Date(element).toDateString("M/Y")
        return dateTo
    }

    return(
        <div>
            <h2>{article.name}</h2>
            <p>{article.price}</p>
            <p>{article.description}</p>
            <p>{myDate(article.publishedAt)}</p>
            <p>{article.category}</p>
        </div>
    )
}

export default Allarticle