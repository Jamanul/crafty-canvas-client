import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";


const ArtDetails = () => {
    const singleArt = useLoaderData()
    const {_id,artUrl,artName,rating,price,stockStatus,subCategory,artDescription,processingTime}=singleArt;
    console.log(singleArt)
    return (
        <div className="flex flex-col gap-10">
            <div className="p-4 md:pt-12 ">
            <h2 className="text-3xl mb-2 text-[#A55E3F]">ArtWork:</h2>
            <img className="max-w-7xl md:px-12 rounded-3xl " src={artUrl} alt="" />
            </div>
            <div className="flex p-4  flex-col md:flex-row">
            <div className="space-y-2">
            <h2 className="card-title text-5xl text-[#A55E3F]">Name: {artName}</h2>
            <h2 className="text-2xl text-[#A55E3F]"><span className="text-3xl">Category: </span> {subCategory}</h2>
            <div className="flex gap-6">
            <p className='flex gap-2 text-xl text-[#A55E3F]'>Rating:  <Rating
                  style={{ maxWidth: 100 }}
                  value={rating}
                  readOnly
                /></p>
                <p className='text-[#A55E3F] text-xl '>Price: {price}$</p>
                <p className='text-[#A55E3F] text-xl '>Status: {stockStatus}</p>
                
            </div>
            <p className='text-[#A55E3F] text-2xl '><span className="text-3xl">About: </span> {artDescription}</p>
            <div className="flex gap-6">
            <p className='text-[#A55E3F] text-xl '><span className="text-2xl">Processing Time: </span> {processingTime} days</p>
            <p className='text-[#A55E3F] text-xl '><span className="text-2xl">Status: </span> {stockStatus} days</p>
            </div>
            </div>
            </div>
        </div>
    );
};

export default ArtDetails;