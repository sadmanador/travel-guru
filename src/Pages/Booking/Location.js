import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import DestinationCard from "./DestinationCard";

const Location = () => {
  const destinations = useLoaderData();

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h1 className="text-5xl font-semibold">Location</h1>
        <p className="text-xl mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
          recusandae quo eum eos ut est nesciunt deserunt enim! Eum, corporis.
        </p>
        <button className="bg-orange-400 text-black font-semibold text-2xl rounded py-3 px-4 mt-4">
          Booking <FaLongArrowAltRight className="inline"></FaLongArrowAltRight>
        </button>
      </div>
      <div>
        {
          destinations.map(des => <DestinationCard key={destinations.location} destinations={destinations}></DestinationCard>)
        }
      </div>
    </div>
  );
};

export default Location;
