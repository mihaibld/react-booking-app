import "./Homepage.css"
import {Link} from "react-router-dom"
import Navigation from "../components/Navigation";
import Container from "../components/Container";

function Homepage(){
    return( 
        <div>
            <Navigation />
            <Container>
                <h1>This is the Homepage Page</h1>
            </Container>
        </div> 
    )
}

export default Homepage; 