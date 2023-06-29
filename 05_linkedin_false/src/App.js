import "./App.css";
import ProfileUser from "./ProfileUser";
import UserExperience from "./UserExperience";
import Header from "./Header";
import PostFeed from "./PostsFeed ";

function App() {
  const userInfosFromFakeApi = {
    firstName: "John",
    lastName: "Doe",
    age: 42,
    email: "contact@johndoe.fr",
    phone: "0123456789",
    adress: "1 rue de la Paix",
    city: "Paris",
    zipCode: "75000",
    country: "France",
    job: "Développeur web",
  };
  const postsFeedFromFakeApi = [
    {
      id: 1,
      title: "Vous ne devinerez jamais ce qui s'est passé",
      description: "Blablabla bla bla bla bla bla bla bla bla",
      image: "https://picsum.photos/200/300",
      isPublished: true,
      publishedAt: "2021-09-01T12:00:00.000Z",
      author: {
        id: 1,
        firstName: "John",
        lastName: "Doe",
      },
    },
    {
      id: 2,
      title: "Vous ne devinerez jamais ce qui s'est passé 2",
      description: "Blablabla bla bla bla bla bla bla bla bla",
      image: "https://picsum.photos/200/300",
      isPublished: false,
      publishedAt: "2021-09-01T12:00:00.000Z",
      author: {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
      },
    },
    {
      id: 3,
      title: "Vous ne devinerez jamais ce qui s'est passé 3",
      description: "Blablabla bla bla bla bla bla bla bla bla",
      image: "https://picsum.photos/200/300",
      isPublished: true,
      publishedAt: "2021-09-01T12:00:00.000Z",
      author: {
        id: 3,
        firstName: "Jean",
        lastName: "Bon",
      },
    },
    {
      id: 4,
      title: "Vous ne devinerez jamais ce qui s'est passé 4",
      description: "Blablabla bla bla bla bla bla bla bla bla",
      image: "https://picsum.photos/200/300",
      isPublished: true,
      publishedAt: "2021-09-01T12:00:00.000Z",
      author: {
        id: 4,
        firstName: "Json",
        lastName: "Statham",
      },
    },
  ];
  const experiencesFromFakeApi = [
    {
      id: 1,
      title: "Développeur front",
      company: "Company 1",
      description: "Développement d'une application web front",
      startDate: "2021-01-01",
      endDate: "2021-02-01",
      isCurrent: false,
    },
    {
      id: 2,
      title: "Développeur back",
      company: "Company 2",
      description: "Développement d'une application web back",
      startDate: "2022-02-01",
      endDate: "2022-03-01",
      isCurrent: false,
    },
    {
      id: 3,
      title: "Développeur fullstack",
      company: "Company 3",
      description: "Développement d'une application web fullstack",
      startDate: "2023-03-01",
      endDate: null,
      isCurrent: true,
    },
  ];

  return (
    <div className="App">
      <Header/>
      <ProfileUser userInfosFromFakeApi={userInfosFromFakeApi} />
      <UserExperience experiencesFromFakeApi={experiencesFromFakeApi}/>
      <h1 class="sectionOfComments">Top commentaire</h1>
      <PostFeed postsFeedFromFakeApi={postsFeedFromFakeApi}/>
    </div>
  );
  
}

export default App;
