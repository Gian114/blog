import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav>
            <ul>
                <Link to="/">Home</Link>
                <li><a href="#info">Info</a></li>
                <li><a href="#pensieri">Pensieri</a></li>
                <li><a href="#sport">Sport</a></li>
                <li><a href="#intrattenimento">Intrattenimento</a></li>
            </ul>
        </nav>
    );

}

export default Navbar;