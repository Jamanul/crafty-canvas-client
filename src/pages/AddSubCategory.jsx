import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { toast } from "react-toastify";
import { AuthContext } from "../FirebaseAuth/AuthProvider";

const AddSubCategory = () => {
  const {user}=useContext(AuthContext)
  const [rating, setRating] = useState(0);
  //console.log(rating)
  const handleAddArts = (e) => {
    e.preventDefault();
    const form = e.target;
    const id = form.id.value;
    const name = form.name.value;
    const image = form.image.value;
    const artDescription = form.artDescription.value;
    
    const art = {
      id,
      name,
      image,
      
      
    };
    fetch('http://localhost:5000/all-banner-data',{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(art),
    })
    .then(res=>res.json())
    .then(data=>{console.log(data)
    if(data.insertedId){
        toast.success('Art added Successfully')
    }
    })
    console.log(art);
  };
  return (
    <div className="min-h-screen">
      <div className="hero-content  flex-col lg:flex-row-reverse">
        <div className="card rounded-3xl shrink-0 w-full py-10 bg-base-200">
          <h1 className="text-5xl text-center text-[#A55E3F] font-bold">
            Add SubCategory
          </h1>
          <form onSubmit={handleAddArts} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="text-[#A55E3F] label-text">id</span>
              </label>
              <input
                type="text"
                name="id"
                placeholder="id"
                className="input text-[#A55E3F] bg-[#A55E3F1A] input-bordered"
                required
              />
            </div>
                <div>
                <label className="label">
                  <span className="text-[#A55E3F] label-text">name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input text-[#A55E3F] bg-[#A55E3F1A] input-bordered"
                  required
                />
              </div>
            
            <div className="form-control">
              <label className="label">
                <span className="text-[#A55E3F] label-text">image</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="image"
                className="input text-[#A55E3F] bg-[#A55E3F1A] input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-[#A55E3F] label-text">
                  Art Description
                </span>
              </label>
              <input
                type="text"
                name="artDescription"
                placeholder="Art Description"
                className="input text-[#A55E3F] bg-[#A55E3F1A] input-bordered"
                
              />
            </div>
            

            <div className="form-control mt-6">
              <button className="btn text-white bg-[#A55E3F]">Add SubCategory</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSubCategory;
