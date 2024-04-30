import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../FirebaseAuth/AuthProvider";
import ArtUpdateCard from "../components/ArtUpdateCard";

const MyArtsCrafts = () => {
  const { user } = useContext(AuthContext);
  const [artData, setArtData] = useState([]);
  const [customizedData,setCustomizedData]=useState([])
  //console.log(user)
  useEffect(() => {
    fetch(`https://crafty-canvas-server.vercel.app/my-arts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setArtData(data);
        setCustomizedData(data)
      });
  }, [user]);
  const handleCustomizedData = (data)=>{
    if (data==='all'){
        setCustomizedData(artData)
    }
    if(data==='Yes'){
        const yesCustomized = artData.filter(singleData=>singleData.customization === 'Yes')
        setCustomizedData(yesCustomized)
    }
    if(data==='No'){
        const noCustomized = artData.filter(singleData=>singleData.customization === 'No')
        setCustomizedData(noCustomized)
    }
  }

  return (
    <div>
      <h2 className="text-5xl text-[#A55E3F] text-center mb-4 mt-10">
        My Arts and Crafts
      </h2>
      <div className="flex justify-center items-center">
        <details className="dropdown ">
        <summary className="m-1 btn bg-[#A55E3F] text-white ">Customized?</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <button onClick={()=>handleCustomizedData("all")} className="bg-[#A55E3F1A] text-[#A55E3F]">All</button>
          </li>
          <li>
            <button onClick={()=>handleCustomizedData("Yes")} className="bg-[#A55E3F1A] text-[#A55E3F]">Yes</button>
          </li>
          <li>
            <button onClick={()=>handleCustomizedData("No")} className="bg-[#A55E3F1A] text-[#A55E3F]">No</button>
          </li>
        </ul>
      </details></div>
      
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {customizedData.map((singleArt) => (
          <ArtUpdateCard
            key={singleArt._id}
            artData={artData}
            setArtData={setArtData}
            singleArt={singleArt}
          ></ArtUpdateCard>
        ))}
      </div>
    </div>
  );
};

export default MyArtsCrafts;
