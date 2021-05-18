import { useHistory, useParams } from 'react-router-dom';

import DB_URL from '..';
import useFetch from '../Hooks/useFetch';

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch(DB_URL + id);

    const history = useHistory();

    const handleClick = () => {

        fetch(DB_URL + id, { method: 'DELETE' })
            .then(() => history.push('/'));
    };

    return (

        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div> { error } </div> }
            { blog && (

                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by: { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={ handleClick }>Delete Blog</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;