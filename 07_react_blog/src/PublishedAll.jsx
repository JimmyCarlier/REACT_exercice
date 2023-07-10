import Allarticle from "./Allarticle";

const PublishedAll = ({ productsFromApi }) => {

  const test = productsFromApi.sort(
    (a, b) => new Date(a.publishedAt) - new Date(b.publishedAt)
  );
  
  const secondTest = test.slice(-3)

  return (
    <>
      {secondTest.map((element) => (
        <Allarticle article={element} />
      ))}
    </>
  );
};

export default PublishedAll;
