import { Link } from "react-router-dom";

const SubCategoryCard = ({singleArt}) => {
    const {name,id,image}=singleArt;
    return (
        <Link to={`/subCategory/${id}`}> 
        <div className="card bg-base-100 shadow-xl">
        <div className="flex flex-col">
        <figure className=' w-96 h-96 p-4 pt-8 flex-grow'><img  src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-2xl text-[#A55E3F]">{name}</h2>
        </div>
        </div>
      </div>
        </Link>
       
    );
};

export default SubCategoryCard;