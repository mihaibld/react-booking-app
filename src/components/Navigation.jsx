import "./Navigation.css"
import { Link } from "react-router-dom"
import Container from "./Container"
import { useState } from "react"
import { useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { useMediaQuery } from "react-responsive"

function Navigation() {
  const [menuItems, setMenuItems] = useState([])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 767 })

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
      }
    ])
  }, [])

  function handleToggleMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="navigation-container">
      <Container>
        <div className="navigation-content">
          <div className="logo-container">
            <Link to="/">
              <h1>ROTA</h1>
            </Link>
          </div>
          {isMobile && (
            <div className="toggle-icon" onClick={handleToggleMenu}>
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
          )}
          <ul className={isMobileMenuOpen ? "mobile-navigation-list" : "navigation-list"}>
            {menuItems.map((menuItem) => (
              <li key={menuItem.link} className={isMobileMenuOpen ? "mobile-navigation-list__item" : "navigation-list__item"}>
                <Link to={menuItem.link}>{menuItem.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default Navigation