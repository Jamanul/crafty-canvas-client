import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SubCategoryPageCard from '../components/SubCategoryPageCard';

const SubCategoryPage = () => {
    const [artData,setArtData]=useState([])
    const subCategoryId = useParams()
    console.log(subCategoryId)
    const {id} = subCategoryId
    console.log(id)
    
    useEffect(()=>{
        fetch( `https://crafty-canvas-server.vercel.app/my-sub-category/${id}`)
        .then(res=>res.json())
        .then(data=>{
        setArtData(data)
        })
    },[id])
    console.log(artData)
    return (
        <div>
            <h2 className='text-5xl text-[#A55E3F] text-center mb-4 mt-10'>Art Category</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
            {
                artData.map(singleArt=><SubCategoryPageCard key={singleArt._id} singleArt={singleArt}></SubCategoryPageCard>)
            }
            </div>
        </div>
    );
};

export default SubCategoryPage;