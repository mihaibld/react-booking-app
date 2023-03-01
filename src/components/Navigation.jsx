import "./Navigation.css"
import {Link} from "react-router-dom"
import Container from "./Container";
import rotalogo from "../images/rota.png";

function Navigation() {
    return(
        <div className="navigation-container">
                <img src={rotalogo} alt="rotalogo"/>
                <h1><span className="logo-text">ROTA SNOWSPORTS&reg;</span></h1>
                <ul className="navigation-list">
                    <li className="navigation-list__item">
                        <Link to="/">Homepage</Link>
                    </li>
                    <li className="navigation-list__item">
                        <Link to="/courses">Courses</Link>
                    </li>
                    <li className="navigation-list__item">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="navigation-list__item">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul> 
        </div>
    )
}


export default Navigation; 