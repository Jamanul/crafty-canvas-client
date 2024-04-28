import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { toast } from "react-toastify";

const AddArtsCrafts = () => {
  const [rating, setRating] = useState(0);
  //console.log(rating)
  const handleAddArts = (e) => {
    e.preventDefault();
    const form = e.target;
    const artName = form.artName.value;
    const price = form.price.value;
    const artUrl = form.artUrl.value;
    const artDescription = form.artDescription.value;
    const subCategory = form.subCategory.value;
    const processingTime = form.processingTime.value;
    const customization = form.customization.value;
    const stockStatus = form.stockStatus.value;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const art = {
      artName,
      price,
      artUrl,
      artDescription,
      subCategory,
      processingTime,
      customization,
      stockStatus,
      userName,
      userEmail,
      rating
    };
    fetch('http://localhost:5000/all-arts',{
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
            Add Your Arts & Crafts
          </h1>
          <form onSubmit={handleAddArts} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="text-[#A55E3F] label-text">Art name</span>
              </label>
              <input
                type="text"
                name="artName"
                placeholder="Art Name"
                className="input text-[#A55E3F] bg-[#A55E3F1A] input-bordered"
                required
              />
            </div>
            <div className="flex gap-6">
              {/* sub category */}

              <label className="form-control  w-1/2">
                <div className="label">
                  <span className="label-text text-[#A55E3F]">
                    Pick Your Category
                  </span>
                </div>
                <select
                  name="subCategory"
                  className="select bg-[#A55E3F1A] text-[#A55E3F] select-bordered"
                >
                  <option disabled selected>
                    Pick one
                  </option>
                  <option>Landscape painting</option>
                  <option>Portrait drawing</option>
                  <option>Water Color painting</option>
                  <option>Oil painting</option>
                  <option>Charcoal sketching</option>
                  <option>Cartoon Drawing</option>
                </select>
              </label>
              {/**-------------- */}
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="text-[#A55E3F] label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  className="input text-[#A55E3F] bg-[#A55E3F1A] input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-[#A55E3F] label-text">Art Photo Url</span>
              </label>
              <input
                type="text"
                name="artUrl"
                placeholder="Art Photo Url"
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
                required
              />
            </div>
            <div className="flex gap-6">
              <div className="w-1/2 form-control">
                <label className="label">
                  <span className="text-[#A55E3F] label-text">Rating</span>
                </label>
                <Rating
                  style={{ maxWidth: 150 }}
                  value={rating}
                  onChange={setRating}
                  isRequired
                />
              </div>

              <div className="w-1/2 form-control">
                <label className="label">
                  <span className="text-[#A55E3F] label-text">
                    Processing Time
                  </span>
                </label>
                <input
                  type="text"
                  name="processingTime"
                  placeholder="Processing Time"
                  className="input text-[#A55E3F] bg-[#A55E3F1A] input-bordered"
                  required
                />
              </div>
            </div>
            <div className="flex gap-6">
              <label className="form-control w-1/2">
                <div className="label">
                  <span className="label-text text-[#A55E3F]">
                    Customization
                  </span>
                </div>
                <select
                  name="customization"
                  className="select bg-[#A55E3F1A] text-[#A55E3F] select-bordered"
                >
                  <option disabled selected>
                    Pick one
                  </option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </label>

              <label className="form-control w-1/2">
                <div className="label">
                  <span className="label-text text-[#A55E3F]">
                    Stock Status
                  </span>
                </div>
                <select
                  name="stockStatus"
                  className="select bg-[#A55E3F1A] text-[#A55E3F] select-bordered"
                >
                  <option disabled selected>
                    Pick one
                  </option>
                  <option>In stock</option>
                  <option>Made to Order</option>
                </select>
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="text-[#A55E3F] label-text">User Name</span>
              </label>
              <input
                type="text"
                name="userName"
                placeholder="User Name"
                className="input  text-[#A55E3F] bg-[#A55E3F1A] input-bordered"
                
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-[#A55E3F] label-text">User Email</span>
              </label>
              <input
                type="email"
                name="userEmail"
                placeholder="User Email"
                className="input text-[#A55E3F] bg-[#A55E3F1A] input-bordered"
            
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn text-white bg-[#A55E3F]">Add Photo</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddArtsCrafts;
