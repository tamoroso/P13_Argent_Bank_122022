import { faSignOut, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../../redux/features/userSlice";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const user = useSelector((state) => state?.userState?.user);
  const dispatch = useDispatch();
  const location = useLocation();

  console.log(location);

  const MenuItems = () => {
    if (user && location.pathname === "/profile") {
      return (
        <div>
          <Link to="#">
            <FontAwesomeIcon icon={faUserCircle} size="lg" />
            {user?.firstName}
          </Link>
          <Link onClick={() => dispatch(logout())}>
            <FontAwesomeIcon icon={faSignOut} size="lg" />
            Sign Out
          </Link>
        </div>
      );
    }
    return (
      <div>
        <Link to="/login">
          <FontAwesomeIcon icon={faUserCircle} size="lg" />
          Sign In
        </Link>
      </div>
    );
  };

  return (
    <nav className={styles.main_nav}>
      <Link to="/" className={styles.main_nav_logo}>
        <img src="/assets/logo/argentBankLogo.png" alt="Argent Bank Logo" />
      </Link>
      <h1 className="sr-only">Argent Bank</h1>
      <MenuItems />
    </nav>
  );
};

export default NavBar;
