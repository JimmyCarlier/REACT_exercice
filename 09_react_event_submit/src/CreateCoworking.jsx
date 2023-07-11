const Formulaire = () =>{
    const hundleSubmit = (event) =>{
        event.preventDefault()
        const titre = event.target.titre.value;
        const comment = event.target.commentaire.value;
        const address = event.target.address.value;

        console.log(titre + " " + comment + " " + address)
    }
    return(
        <>
        <form onSubmit={hundleSubmit}>
        <label htmlFor="titre">Titre</label>
        <input type="text" name="titre"></input>
        <label htmlFor="commentaire">Commentaire</label>
        <textarea name="commentaire"></textarea>
        <label htmlFor="address">Adresse</label>
        <input type="text" name="address"></input>
        <button>Envoyer</button>
        </form>
        </>
    )
}

export default Formulaire