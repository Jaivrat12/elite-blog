import { useHistory, useLocation, useParams } from 'react-router-dom';

import DB_URL from '..';
import useFetch from '../Hooks/useFetch';
import SkeletonBlogDetails from '../Skeletons/SkeletonBlogDetails';

const BlogDetails = () => {

    const location = useLocation();
    const { id } = useParams();
    const { data: blog, error } = useFetch(DB_URL + id);

    const history = useHistory();

    const handleClick = () => {

        fetch(DB_URL + id, { method: 'DELETE' })
            .then(() => history.push('/'));
    };

    return (

        <div className="blog-details">

            { !blog && !error && <SkeletonBlogDetails /> }
            { error && <div> { error } </div> }
            { blog && (

                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by: { location.author }</p>
                    <div className="blog-body">{ blog.body }</div>
                    <button onClick={ handleClick }>Delete Blog</button>
                </article>
            )}

        </div>
    );
};
 
export default BlogDetails;