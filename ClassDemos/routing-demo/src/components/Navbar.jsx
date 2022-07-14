import { Link } from 'react-router-dom';

const Navbar = props => {

    return(
        <div>
            <h1>
                <Link to={"/about"} > About </Link> 
                | 
                <Link to={"/contact"} > Contact </Link> 
                | 
                <Link to={"/cities/Raleigh"} > Raleigh </Link> 
                |
                <Link to={"/cities/Cary"} > Cary </Link> 
            </h1>
        </div>
    )
}

export default Navbar;