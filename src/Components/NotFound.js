import { Link } from 'react-router-dom'

const NotFound = () => {
    
    return (

        <div className="not-found">
            <h2>Error 404 - Not Found!</h2>
            <p>Where the heck do you wanna go?! { '¯\\_(ツ)_/¯' }</p>
            <Link to="/">Back to the Homepage</Link>
        </div>
    );
};
 
export default NotFound;