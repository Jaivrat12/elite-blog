import SkeletonElement from "./SkeletonElement";
import SkeletonAuthor from "./SkeletonAuthor";
import Shimmer from "./Shimmer";

const SkeletonBlogDetails = () => {
    
    return (

        <div className="skeleton-wrapper">
            <div className="skeleton-blog">
                <SkeletonElement type="title" color="pink" />
                <SkeletonAuthor />
                <SkeletonElement type="text" />
                <SkeletonElement type="text" />
                <SkeletonElement type="text" />
            </div>
            <Shimmer />
        </div>
    );
}
 
export default SkeletonBlogDetails;