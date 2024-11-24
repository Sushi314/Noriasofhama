
import "../css/NavBar.css"; // Import styles for the NavBar

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="#introduction" className="navbar-link">Introduction</a>
        </li>
        <li className="navbar-item">
          <a href="#history" className="navbar-link">History</a>
        </li>
        <li className="navbar-item">
          <a href="#design" className="navbar-link">Design</a>
        </li>
        <li className="navbar-item">
          <a href="#preservation" className="navbar-link">Preservation</a>
        </li>
        <li className="navbar-item">
          <a href="#norias" className="navbar-link">Norias</a>
        </li>
        <li className="navbar-item">
          <a href="#conclusion" className="navbar-link">Conclusion</a>
        </li>
        <li className="navbar-item">
          <a href="#photo-album" className="navbar-link">Photo Album</a>
        </li>
        <li className="navbar-item">
          <a href="#references" className="navbar-link">References</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
