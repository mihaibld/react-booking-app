import {Link} from "react-router-dom"

function Navigation(){
    return(
        <div>
            <h1>Navigation</h1>
            <ul>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>  
        </div>
    )
}


export default Navigation;