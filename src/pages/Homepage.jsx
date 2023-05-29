import "./Homepage.css";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Container from "../components/Container";

function Homepage() {
    return (
        <div className="homepage">
            <Navigation />
            <Container>
                <div className="welcome-box">
                <h1></h1>
                <p>Feel free to discover and explore how to become a snowsurfer.</p>
                <a
                    className="instagram-link"
                    href="https://www.instagram.com/rotasnowsports/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className="instagram-logo"
                        src="\src\images\instagramlogo.png"
                        alt="Instagram Logo"
                    />
                </a>
                </div>
            </Container>
        </div>
    );
}

export default Homepage;
