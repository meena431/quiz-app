import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom'; // portal to break out of overflow containers
import { navbarStyles } from '../assets/styles';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Award, LogOut, LogIn, X, Menu } from 'lucide-react';
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [buttonRect, setButtonRect] = useState(null); // Track the button's exact position on screen

  // Handle position tracking for the mobile menu dropdown
  const handleToggleMenu = (e) => {
    if (!menuOpen) {
      // Get the bounding rectangle coordinates of the hamburger button
      const rect = e.currentTarget.getBoundingClientRect();
      setButtonRect(rect);
    }
    setMenuOpen((s) => !s);
  };

  // Keep track of window resize to recalculate position or close menu
  useEffect(() => {
    const handleResize = () => setMenuOpen(false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // useEffect hook to monitor the authorization state changes
  useEffect(() => {
    try {
      const u = localStorage.getItem("authToken");
      setLoggedIn(!!u);
    } catch (e) {
      setLoggedIn(false);
    }

    const handler = (ev) => {
      const detailUser = ev?.detail?.user ?? null;
      setLoggedIn(!!detailUser);
    };
    window.addEventListener("authChanged", handler);

    return () => window.removeEventListener("authChanged", handler);
  }, []);

  // LOGOUT FUNCTION
  const handleLogout = () => {
    try {
      localStorage.removeItem("authToken");
      localStorage.clear();
    } catch (e) {
      // Ignore errors safely
    }
    window.dispatchEvent(
      new CustomEvent("authChanged", { detail: { user: null } })
    );
    setMenuOpen(false);
    try {
      navigate('/login');
    } catch (e) {
      window.location.href = '/login';
    }
  };

  return (
    <nav className={navbarStyles.nav}>
      {/* Absolute Decorative Background Element */}
      <div
        style={{
          backgroundImage: navbarStyles.decorativePatternBackground,
        }}
        className={navbarStyles.decorativePattern}
      ></div>

      <div className={navbarStyles.container}>
        {/* Brand Logo Layout Container */}
        <div className={navbarStyles.logoContainer}>
          <Link to="/" className={navbarStyles.logoButton} onClick={() => setMenuOpen(false)}>
            <img
              src={logo}
              alt="Codexa logo"
              className={navbarStyles.logoImage}
            />
          </Link>
        </div>

        {/* Brand Core Title Display */}
        <div className={navbarStyles.titleContainer}>
          <div className={navbarStyles.titleBackground}>
            <h1 className={navbarStyles.titleText}>Codexa</h1>
          </div>
        </div>

        {/* Desktop View Action Navigation Layout */}
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

        {/* Mobile View Toggle Menu Controller */}
        <div className={navbarStyles.mobileMenuContainer}>
          <button
            onClick={handleToggleMenu}
            className={navbarStyles.menuToggleButton}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <X className={navbarStyles.menuIcon} />
            ) : (
              <Menu className={navbarStyles.menuIcon} />
            )}
          </button>

          {/* PORTAL OVERLAY: Drops the list directly into document body to completely bypass layout truncation */}
          {menuOpen && buttonRect && createPortal(
            <div 
              className={navbarStyles.mobileMenuPanel}
              style={{
                position: 'fixed',
                top: `${buttonRect.bottom + window.scrollY + 8}px`, // 8px spacer below navbar button
                left: `${buttonRect.right - 208}px`, // 208px is the equivalent width (w-52) to align right edge
                width: '13rem', // w-52 match
                zIndex: 999999
              }}
            >
              <ul className={navbarStyles.mobileMenuList} style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                
                {/* 1. Results Action Track Link */}
                <li>
                  <NavLink
                    to='/result'
                    className={navbarStyles.mobileMenuItem}
                    onClick={() => setMenuOpen(false)}
                  >
                    <Award className={navbarStyles.mobileMenuIcon} />
                    <span>My Result</span>
                  </NavLink>
                </li>

                {/* 2. Authentication Context-Driven Actions */}
                {loggedIn ? (
                  <li>
                    <button 
                      type='button' 
                      onClick={handleLogout} 
                      className={navbarStyles.mobileMenuItem}
                    >
                      <LogOut className={navbarStyles.mobileMenuIcon} />
                      <span>Logout</span>
                    </button>
                  </li>
                ) : (
                  <li>
                    <NavLink 
                      to='/login' 
                      className={navbarStyles.mobileMenuItem} 
                      onClick={() => setMenuOpen(false)}
                    >
                      <LogIn className={navbarStyles.mobileMenuIcon} />
                      <span>Login</span>
                    </NavLink>
                  </li>
                )}

              </ul>
            </div>,
            document.body
          )}
        </div>
      </div>

      <style>{navbarStyles.animations}</style>
      
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-70 z-10"></div>
    </nav>
  );
};

export default Navbar;