import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllArtsCrafts = () => {
    const allArtData =useLoaderData()
    console.log(allArtData)
    //const {_id,artUrl,artName,rating,price,stockStatus,subCategory,artDescription,processingTime}=singleArt;
    return (
        <div>
            <h2 className='text-5xl text-[#A55E3F] text-center mb-4 mt-10'>All Arts & Crafts </h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th  className='hidden md:block'>No</th>
        <th >Art Name</th>
        <th>Rating</th>
        <th >Sub Category</th>
        <th  className='hidden md:block'>Processing Time</th>
        <th >More</th>
      </tr>
    </thead>
    <tbody>
    {
        allArtData.map((singleArt,idx)=>
            <tr  key={singleArt._id}>
            <th className='hidden md:block text-[#A55E3F]'>{idx+1}</th>
            <td className='text-[#A55E3F]'>{singleArt.artName}</td>
            <td className='text-[#A55E3F]'><Rating
                  style={{ maxWidth: 100 }}
                  value={singleArt.rating}
                  readOnly
                /></td>
            <td  className='hidden md:block text-[#A55E3F]'>{singleArt.subCategory}</td>
            <td className='text-[#A55E3F]'>{singleArt.processingTime} days</td>
            <td className='text-[#A55E3F]'> <Link to={`../art/${singleArt._id}`}> <button className="btn bg-[#A55E3F] text-white">View details</button></Link> </td>
          </tr> 
        )
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllArtsCrafts;