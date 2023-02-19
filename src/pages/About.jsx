import "./About.css"
import Navigation from "../components/Navigation";
import Container from "../components/Container";

function About(){
    return( 
        <div>
            <Navigation />
            <Container>
            <h1>This is the About Page</h1> 
            </Container>
        </div>
    )
}

export default About;