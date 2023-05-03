import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ChefDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const [chefDetails, setChefDetails] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5500/chefdata")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setChefDetails(data);
        }
      });
  }, []);

  const chefData = chefDetails.find((chef) => chef.id == id);
  // const { name, specialty, rating } = chefData;
  // console.log();

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">        
        <div>
          <h1>{chefData?.name}</h1>
          <h4>Experience: {chefData?.experience_years} years</h4>
          <h5>Likes {chefData?.likes} million</h5>
          <p className="text-justify">{chefData?.details}</p>
        </div>
        <img src={chefData?.img} alt="" />
      </div>
      <div className="recipie-sections">
        <div className="recipe-details">
            <img src={chefData?.recipe1?.image} alt="" />
            <h2>{chefData?.recipe1?.recipe_name}</h2>
            <h4>Ratings: {chefData?.recipe1?.rating}</h4>
            <h5>{chefData?.recipe1?.ingredients}</h5>
            <p>{chefData?.recipe1?.cooking_method}</p>
        </div>
        <div className="recipe-details">
            <img src={chefData?.recipe2?.image} alt="" />
            <h2>{chefData?.recipe2?.recipe_name}</h2>
            <h4>Ratings: {chefData?.recipe2?.rating}</h4>
            <h5>{chefData?.recipe2?.ingredients}</h5>
            <p>{chefData?.recipe2?.cooking_method}</p>
        </div>
        <div className="recipe-details">
            <img src={chefData?.recipe3?.image} alt="" />
            <h2>{chefData?.recipe3?.recipe_name}</h2>
            <h4>Ratings: {chefData?.recipe3?.rating}</h4>
            <h5>{chefData?.recipe3?.ingredients}</h5>
            <p>{chefData?.recipe3?.cooking_method}</p>
        </div>
        
       
      </div>
    </div>
  );
};

export default ChefDetails;
