import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = (): JSX.Element => {
  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split("/");
  return (
    <nav>
      {/* <div className="logo">
        <a href="#">Naveen Kumar</a>
      </div> */}
      <ul>
        <li className={splitLocation[1] === "" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        {/* <li className={splitLocation[1] === "projects" ? "active" : ""}>
          <Link to="/projects">Projects</Link>
        </li> */}
        <li className={splitLocation[1] === "blog" ? "active" : ""}>
          <Link to="/blog">Blog</Link>
        </li>
        <li className={splitLocation[1] === "contact" ? "active" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
