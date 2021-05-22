import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {

    let users = ['Bret', 'Antonette', 'Samantha', 'Karianne', 'Kamren', 'Leopoldo_Corkery',
                 'Elwyn.Skiles', 'Maxime_Nienow', 'Delphine', 'Moriah.Stanton'];

    return (

        <div className="blog-list">

            {
                blogs.map(blog => (

                    <div className="blog-preview" key={ blog.id }>
                        <Link
                            to={{
                                pathname: `/blogs/${ blog.id }`,
                                author: users[blog.userId - 1]
                            }}
                        >
                            <div>
                                <h2>{ blog.title }</h2>
                                <p>Written by: { users[blog.userId - 1] }</p>
                            </div>
                        </Link>
                    </div>
                ))
            }
            
        </div>
    );
};
 
export default BlogList;