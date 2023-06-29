const PostFeed = ({postsFeedFromFakeApi}) => {
  return (
    <div className="containerOfComments">
      {postsFeedFromFakeApi.map((element) => {
        const date = new Date(element.publishedAt);

        return (
          element.isPublished && (
            <div className="cardOfComments">
              <h2>{element.title}</h2>
              <p>Commentaire : {element.description}</p>
              <img src={postsFeedFromFakeApi.image} alt="" />
              <p className="notImportent">
                Publié le :{date.toDateString()} de :{" "}
                {element.author.firstName + " " + element.author.lastName}
              </p>
            </div>
          )
        );
      })}
    </div>
  );
};

export default PostFeed;
