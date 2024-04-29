import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SubCategoryPage = () => {
    const [artData,setArtData]=useState([])
    const subCategoryId = useParams()
    console.log(subCategoryId)
    const {id} = subCategoryId
    console.log(id)
    
    useEffect(()=>{
        fetch( `http://localhost:5000/my-sub-category/${id}`)
        .then(res=>res.json())
        .then(data=>{
        setArtData(data)
        })
    },[id])
    console.log(artData)
    return (
        <div>
            
        </div>
    );
};

export default SubCategoryPage;