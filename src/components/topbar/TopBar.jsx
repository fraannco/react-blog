import { Link } from "react-router-dom";
import "./topbar.css";

const TopBar = () => {
  const user = false;

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <Link to="/" className="link">
            <li className="topListItem">Home</li>
          </Link>
          <Link to="/about" className="link">
            <li className="topListItem">About</li>
          </Link>
          <Link to="/contact" className="link">
            <li className="topListItem">Contact</li>
          </Link>
          <Link to="/write" className="link">
            <li className="topListItem">Write</li>
          </Link>
          <Link to="/" className="link">
            <li className="topListItem">{user && "Logout"}</li>
          </Link>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImage"
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/" className="link">
                Login
              </Link>
            </li>

            <li className="topListItem">
              <Link to="/" className="link">
                Register
              </Link>
            </li>
          </ul>
        )}

        <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default TopBar;
