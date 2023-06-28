const Header = () => {
  return (
    <nav>
      <ul>
        <div className="headerLogo">
          <li>
            <img src="./img/linkedin.png" alt="" />
          </li>
          <li>
            <h1>Linkedin</h1>
          </li>
        </div>
        <div className = "navLink">
          <li>Home</li>
          <li>My space</li>
          <li>Contact</li>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
