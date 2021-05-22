import useFetch from '../Hooks/useFetch';
import DB_URL from '..';

import BlogList from './BlogList';
import Warning from './Warning';
import SkeletonBlog from '../Skeletons/SkeletonBlog';

const Home = () => {

    const { data: blogs, error } = useFetch(DB_URL);
    const blogsQty = 100;
    
    return (

        <div className="home">

            <Warning />
            <h2>All Blogs!</h2>
            { !blogs && !error && Array.from(Array(blogsQty).keys()).map(n => <SkeletonBlog key={ n } />) }
            { !blogs && error }
            { blogs && <BlogList blogs={ blogs } /> }

        </div>
    );
};
 
export default Home;