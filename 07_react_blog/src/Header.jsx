const Header = ({ cartFromApi }) => {
    
  return (
    <header>
      <h1>Le bon Meuble</h1>
      <img src="../img/deus.jpg" alt="" />
      <nav>
        <ul class="navigation">
          <li>Home</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </nav>
      <div>
        <ul>
        <li><img src="../img/pannier.avif" alt="" className="logo"/></li>
        <li><p className="number">{cartFromApi.items[0].quantity}</p></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
