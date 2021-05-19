import { Link } from 'react-router-dom';

const Navbar = () => {
    
    return (

        <nav className="navbar">

            <h1>The Elite Blog</h1>
            
            <div className="links">
                <Link to="elite-blog/">Home</Link>
                <Link to="elite-blog/create">New Blog</Link>
            </div>

        </nav>
    );
};
 
export default Navbar;