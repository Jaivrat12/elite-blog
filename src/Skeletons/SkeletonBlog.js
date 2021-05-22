import SkeletonElement from "./SkeletonElement"
import SkeletonAuthor from "./SkeletonAuthor"
import Shimmer from "./Shimmer"

const SkeletonBlog = () => {

    return (

        <div className="skeleton-wrapper">
            <div className="skeleton-blog">
                <SkeletonElement type="text" color="pink" />
                <SkeletonElement type="text" color="pink" />
                <SkeletonAuthor />
            </div>
            <Shimmer />
        </div>
    );
}
 
export default SkeletonBlog;