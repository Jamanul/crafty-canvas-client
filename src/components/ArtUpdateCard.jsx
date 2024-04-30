import { Rating } from "@smastrom/react-rating";
import React from "react";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ArtUpdateCard = ({ singleArt, artData, setArtData }) => {
  const {
    _id,
    artUrl,
    artName,
    rating,
    price,
    stockStatus,
    subCategory,
    customization,
  } = singleArt;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://crafty-canvas-server.vercel.app/my-arts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = artData.filter(
                (singleArtData) => singleArtData._id !== _id
              );
              setArtData(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="flex flex-col">
        <figure className=" w-96 h-96 p-4 pt-8 flex-grow">
          <img src={artUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl text-[#A55E3F]">{artName}</h2>
          <p className="flex gap-2 text-xl text-[#A55E3F]">
            Rating: <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
          </p>
          <div className="flex justify-between">
            <p className="text-[#A55E3F] text-xl ">Price: {price}$</p>
            <p className="text-[#A55E3F] text-xl ">Status: {stockStatus}</p>
          </div>
          <div>
            <p className="text-[#A55E3F] ">Customized: {customization}</p>
          </div>
          

          
            <div className="flex justify-between">
              <Link to={`/art-update/${_id}`}>
                <button className="btn bg-[#A55E3F] text-white">Update</button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn bg-[#A55E3F] text-white"
              >
                Delete
              </button>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default ArtUpdateCard;
