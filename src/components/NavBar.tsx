
import "../css/NavBar.css"; // Import styles for the NavBar

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="#introduction" className="navbar-link">Introduction</a>
        </li>
        <li className="navbar-item">
          <a href="#thenoria" className="navbar-link">The Noria</a>
        </li>
        <li className="navbar-item">
          <a href="#noriastransform" className="navbar-link">Noria's Transfrom</a>
        </li>
        <li className="navbar-item">
          <a href="#conclusion" className="navbar-link">Conclusion</a>
        </li>
        <li className="navbar-item">
          <a href="#photo-album" className="navbar-link">Photo Album</a>
        </li>
        <li className="navbar-item">
          <a href="#workcited" className="navbar-link">WorkCited</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
