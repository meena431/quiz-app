import React, { useEffect, useState } from 'react'
import { navbarStyles } from '../assets/styles'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Award, LogOut, LogIn, X, Menu } from 'lucide-react';
import logo from "../assets/logo.png";

const Navbar = () => {

  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Useeffect hook to show the login state change
  useEffect(() => {
    try {
      const u = localStorage.getItem("authToken")
      setLoggedIn(!!u);
    }
    catch (e) {
      setLoggedIn(false);
    }

    const handler = (ev) => {
      const detailUser = ev?.detail?.user ?? null;
      setLoggedIn(!!detailUser);
    };
    window.addEventListener("authChanged", handler);

    return () => window.removeEventListener("authChanged", handler)
  }, [])

  // LOGOUT FUNCTION
  const handleLogout = () => {
    try {
      localStorage.removeItem("authToken");
      localStorage.clear();
    }
    catch (e) {
      // Ignore all the error
    }
    window.dispatchEvent(
      new CustomEvent("authChanged", { detail: { user: null } })
    );
    setMenuOpen(false);
    try {
      navigate('/login');
    }
    catch (e) {
      window.location.href = '/login';
    }
  };

  return (
    <nav className={navbarStyles.nav}>
      <div
        style={{
          backgroundImage: navbarStyles.decorativePatternBackground,
        }}
        className={navbarStyles.decorativePattern}>
      </div>

      <div className={navbarStyles.container}>
        <div className={navbarStyles.logoContainer}>
          <Link to="/" className={navbarStyles.logoButton}>
            <img
              src={logo}
              alt="Codexa logo"
              className={navbarStyles.logoImage}
            />
          </Link>
        </div>

        <div className={navbarStyles.titleContainer}>
          <div className={navbarStyles.titleBackground}>
            <h1 className={navbarStyles.titleText}>Codexa</h1>
          </div>
        </div>

        <div className={navbarStyles.desktopButtonsContainer}>
          <div className={navbarStyles.spacer}></div>

          <NavLink to='/result' className={navbarStyles.resultsButton}>
            <Award className={navbarStyles.buttonIcon} />
            My Result
          </NavLink>

          {loggedIn ? (
            <button
              onClick={handleLogout}
              className={navbarStyles.logoutButton}
            >
              <LogOut className={navbarStyles.buttonIcon} />
              Logout
            </button>
          ) : (
            <NavLink to='/login' className={navbarStyles.loginButton}>
              <LogIn className={navbarStyles.buttonIcon} />
              Login
            </NavLink>
          )}
        </div>

        <div className={navbarStyles.mobileMenuContainer}>
          <button
            onClick={() => setMenuOpen((s) => !s)}
            className={navbarStyles.menuToggleButton}
          >
            {menuOpen ? (
              <X className={navbarStyles.menuIcon} />
            ) : (
              <Menu className={navbarStyles.menuIcon} />
            )}
          </button>

          {menuOpen && (
            <div className={navbarStyles.mobileMenuPanel}>
              <ul className={navbarStyles.mobileMenuList}>
                <li>
                  <NavLink
                    to='/result'
                    className={navbarStyles.mobileMenuItem}
                    onClick={() => setMenuOpen(false)}
                  >
                    <Award className={navbarStyles.mobileMenuIcon} />
                    My Result
                  </NavLink>
                </li>

                {loggedIn ? (
                  <li>
                    <button type='button' onClick={handleLogout} className={navbarStyles.mobileMenuItem}>
                      <LogOut className={navbarStyles.mobileMenuIcon} />
                    </button>
                  </li>
                ) : (
                  <li>
                    <NavLink to='/login' className={navbarStyles.mobileMenuItem} onClick={() => setMenuOpen(false)}>
                      <LogIn className={navbarStyles.mobileMenuIcon} />
                      Login
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>

      <style>{navbarStyles.animations}</style>
      <div className="absolute bottom-0 left-0 w-full h-[2px] 
bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-70"></div>
    </nav >
  )
}

export default Navbar