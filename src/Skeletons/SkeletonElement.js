import './Skeleton.css';

const SkeletonElement = ({ type, color='' }) => {
    
    return (

        <div className={ `skeleton ${ type } ${ color }` }></div>
    );
}
 
export default SkeletonElement;