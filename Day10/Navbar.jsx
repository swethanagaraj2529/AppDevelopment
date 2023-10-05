import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
 import { NavLink } from './MyConstant';
import './Navbar.css';
import Popup from './Popup';

const Navbar = () => {
    const navLinks = NavLink;
    const [activeLink, setActiveLink] = useState(0);
    const [hovered, setHovered] = useState(false);
    const bgBoxRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);

    useEffect(() => {
        const index = navLinks.findIndex((item) => item.path === location.pathname);
        if (index !== -1) {
            setActiveLink(index);
        } else {
            setActiveLink(0);
        }
    }, [location, navLinks]);

    const handleMouseEnter = (event, index) => {
        setActiveLink(index);
        setHovered(true);
        const link = event.currentTarget;
        const left = link.offsetLeft;
        const width = link.offsetWidth;
        bgBoxRef.current.style.left = left + 'px';
        bgBoxRef.current.style.width = width + 'px';
    };

    const handleMouseLeave = () => {
        setActiveLink(0);
        setHovered(false);
        bgBoxRef.current.style.width = '0px';
    };

    const toggleLogoutPopup = () => {
        setLogoutPopupOpen(!isLogoutPopupOpen);
    };

    const handleGotItClick = () => {
        navigate('/login')
    };

    return (
        <nav className='navbar_container'>
            <ul>
                <div className={`bg-hover-box ${hovered ? 'active' : ''}`} ref={bgBoxRef}></div>
                {navLinks.map((item, index) => (
                    <li
                        className={`nav_link ${index === activeLink ? 'active' : ''}`}
                        key={item}
                        onMouseEnter={(event) => handleMouseEnter(event, index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {item.name === 'Logout' ? (
                            <Link className="nav_item" to="" onClick={toggleLogoutPopup}>
                                <span className="nav_icon">{item.icon}</span>
                                <span className="nav_name">{item.name}</span>
                            </Link>
                        ) : (
                            <Link className="nav_item" to={item.path}>
                                <span className="nav_icon">{item.icon}</span>
                                <span className="nav_name">{item.name}</span>
                            </Link>
                        )}
                    </li>
                ))}
            </ul>

            {isLogoutPopupOpen && (
                <div className="popup-centered">
                    <Popup
                        togglePopup={toggleLogoutPopup}
                        message={{
                            type: 'Logout Confirmation',
                            content: 'Are you sure you want to logout?',
                            btn: 'Yes'
                        }}
                        handleGotItClick={handleGotItClick}
                    />
                </div>
            )}
        </nav>
    );
}

export default Navbar;