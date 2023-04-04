import "./Homepage.css"
import {Link} from "react-router-dom"
import Navigation from "../components/Navigation";
import Container from "../components/Container";

function Homepage(){
    return( 
        <div>
            <Navigation />
            <Container>
                <h1>Home</h1>
            </Container>
        </div> 
    )
}

export default Homepage; 