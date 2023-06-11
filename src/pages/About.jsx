import "./About.css"
import Navigation from "../components/Navigation";
import Container from "../components/Container";

function About(){
    return( 
        <div className="about">
            <Navigation />
            <Container>
            <h1>About</h1> 
            </Container>
        </div>
    )
}

export default About;