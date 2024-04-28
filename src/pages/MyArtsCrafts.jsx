import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../FirebaseAuth/AuthProvider';
import ArtUpdateCard from '../components/ArtUpdateCard';

const MyArtsCrafts = () => {
    const {user} = useContext(AuthContext) 
    const [artData,setArtData]=useState([])
    //console.log(user) 
    useEffect(()=>{
        fetch( `http://localhost:5000/my-arts/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
        setArtData(data)
        })
    },[user])
    return (
        <div>
            <h2 className='text-5xl text-[#A55E3F] text-center mb-4 mt-10'>My Arts and Crafts</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >
            {
                artData.map(singleArt=><ArtUpdateCard key={singleArt._id} artData={artData} setArtData={setArtData} singleArt={singleArt}></ArtUpdateCard>)
            }
           </div>
        </div>
    );
};

export default MyArtsCrafts;