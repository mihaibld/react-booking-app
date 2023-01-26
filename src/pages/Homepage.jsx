import "./Homepage.css"
import {Link} from "react-router-dom"
import Navigation from "../components/Navigation";

function Homepage(){
    return( 
        <div>
            <Navigation />
            <h1>This is the Homepage Page</h1>
        </div>
    )
}

export default Homepage;