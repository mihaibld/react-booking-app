import "./Navigation.css"
import { Link, useLocation } from "react-router-dom"
import Container from "./Container";
import { useState } from "react";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

function Navigation() {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        setMenuItems([
            {
                name: "Home",
                link: "/"
            },

            {
                name: "Lessons",
                link: "/lessons"
            },

            {
                name: "About",
                link: "/about"
            },

            {
                name: "Contact",
                link: "/contact"
            },
        ])
    }, []);

    const location = useLocation();

    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

    const handleSelectChange = (event) => {
        const selectedLink = event.target.value;
        window.location.href = selectedLink;
    };

    return (
        <div className="navigation-container">
            <h1>ROTA</h1>
            {isTabletOrMobile ? (
                <div className="mobile-navigation">
                    {menuItems && (
                        <select value={location.pathname} onChange={handleSelectChange}>
                            {menuItems.map((menuItem) => (
                                <option key={menuItem.link} value={menuItem.link}>
                                    {menuItem.name}
                                </option>
                            ))}
                        </select>
                    )}
        </div>
    ) : (
        <ul className="navigation-list">
            {menuItems &&
                menuItems.map((menuItem) => (
                    <li key={menuItem.link} className="navigation-list__item">
                        <Link to={menuItem.link}>{menuItem.name}</Link>
                    </li>
                ))}
            </ul>
        )}
    </div>
    );
}
    
export default Navigation;