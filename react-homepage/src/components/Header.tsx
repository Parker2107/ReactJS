import AImage from "./account.jpg";
import CImage from "./cart.jpg";
function Header() {
  return (
    <header id="blah">
      <div className="header-left">
        <a className="logo" href="index.html">
          <span className="firstl">F</span>
          <span id="colorb">a</span>
          <span id="colorp">k</span>
          <span id="colory">e</span>
          <span id="colorr">S</span>
          <span id="colorlg">t</span>
          <span id="colorb">o</span>
          <span id="colorp">r</span>
          <span id="lastname">e</span>
        </a>
        <div className="search-container">
          <input type="text" id="searchbar" placeholder="Search products..." />
          <button className="searchbutton">Search</button>
        </div>
      </div>
      <div className="header-images">
        <a href="account.html">
          <img src={AImage} alt="image 2"></img>
        </a>
        <a href="cart.html">
          <img src={CImage} alt="image 1"></img>
        </a>
        <a></a>
      </div>
    </header>
  );
}
export default Header;
