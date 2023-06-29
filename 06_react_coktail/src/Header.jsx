const Header = ({userFromApi}) => {
  return (
    <nav>
      <ul>
        <li>
          <img src="" alt="" />
        </li>
        <li><h1>Coktail Land</h1></li>
        <div className="menuBar">
          <li>Carte</li>
          <li>Contact</li>
        </div>
        <li>Bienvenue {userFromApi.firstName}</li>
      </ul>
    </nav>
  );
};

export default Header;
