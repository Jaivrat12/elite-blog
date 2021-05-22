import SkeletonElement from "./SkeletonElement";

const SkeletonAuthor = () => {
    
    return (

        <div className="skeleton-author">
            <SkeletonElement type="avatar" />
            <SkeletonElement type="small-text" />
        </div>
    );
}
 
export default SkeletonAuthor;