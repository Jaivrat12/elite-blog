import useFetch from '../Hooks/useFetch';
import DB_URL from '..';

import BlogList from './BlogList';
import Warning from './Warning';

const Home = () => {

    const { data: blogs, isPending, error } = useFetch(DB_URL);
    
    return (

        <div className="home">

            <Warning />

            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={ blogs } title="All Blogs!" /> }

        </div>
    );
};
 
export default Home;