import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { Link } from 'react-router-dom';

const ArtCard = ({singleArt}) => {
    const {_id,artUrl,artName,rating,price,stockStatus,subCategory}=singleArt;
    return (
        <div className="card bg-base-100 shadow-xl">
        <div className="flex flex-col">
        <figure className=' w-96 h-96 p-4 pt-8 flex-grow'><img  src={artUrl} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-2xl text-[#A55E3F]">{artName}</h2>
          <p className='flex gap-2 text-xl text-[#A55E3F]'>Rating:  <Rating
                  style={{ maxWidth: 100 }}
                  value={rating}
                  readOnly
                /></p>
          <div className="flex justify-between">  <p className='text-[#A55E3F] text-xl '>Price: {price}$</p>
            <p className='text-[#A55E3F] text-xl '>Status: {stockStatus}</p></div>
            <p className='text-[#A55E3F] '>Category: {subCategory}</p>
            
          <div className="card-actions justify-end">
            <Link to={`art/${_id}`}> <button className="btn bg-[#A55E3F] text-white">View details</button></Link> 
          </div>
        </div>
        </div>
      </div>
    );
};

export default ArtCard;