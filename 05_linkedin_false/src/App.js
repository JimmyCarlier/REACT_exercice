import "./App.css";
import ProfileUser from "./ProfileUser";
import UserExperience from "./UserExperience";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <ProfileUser />
      <UserExperience />
    </div>
  );
}

export default App;
