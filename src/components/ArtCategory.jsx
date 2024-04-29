import { useEffect, useState } from "react";
import SubCategoryCard from "./SubCategoryCard";

const ArtCategory = () => {
    const [artData,setArtData]= useState([])
    useEffect(()=>{
        fetch('/subCategoryData.json')
        .then(res=>res.json())
        .then(data=>setArtData(data))
    },[])
    return (
        <div>
            <h2 className='text-5xl text-center font-semibold text-[#A55E3F]'>Art & Craft Categories</h2>
        <h2 className='text-xl mt-4 mb-8 text-center text-[#A55E3F]'>Our painters are working on different varieties of paintings.Here we can see their genius work on different form's of art.Even on different varieties their genius is showing on the paintings. </h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                artData.map(singleArt=><SubCategoryCard key={singleArt.id} singleArt={singleArt}></SubCategoryCard>)
            }
        </div>
        </div>
        
    );
};

export default ArtCategory;