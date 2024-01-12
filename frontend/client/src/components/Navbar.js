import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.user);

  const authLinks = (
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/dashboard" exact>
          Dashboard
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/logout" exact>
          Logout
        </NavLink>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/login" exact>
          Login
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/register" exact>
          Register
        </NavLink>
      </li>
    </ul>
  );

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Auth Site
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" exact>
                  Home
                </NavLink>
              </li>

              {isAuthenticated ? authLinks : guestLinks}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
