import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ChefDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const [chefDetails, setChefDetails] = useState([]);

  useEffect(() => {
    fetch("https://madchef-server-itsmdmahmud.vercel.app/chefdata")
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

  const [isButton1Disabled, setIsButton1Disabled] = useState(false);
  const [isButton2Disabled, setIsButton2Disabled] = useState(false);
  const [isButton3Disabled, setIsButton3Disabled] = useState(false);

  function handleClick1() {
    setIsButton1Disabled(true);
  }
  function handleClick2() {
    setIsButton2Disabled(true);
  }
  function handleClick3() {
    setIsButton3Disabled(true);
  }

  const notify1 = () => toast("Added first recipe to your favourite list!");
  const notify2 = () => toast("Added second recipe to your favourite list!");
  const notify3 = () => toast("Added third recipe to your favourite list!");

  return (
    <div className="container">
      <div className="chef-details-main d-flex justify-content-between align-items-center">        
        <div className="">
          <h1>{chefData?.name}</h1>
          <h4>Experience: {chefData?.experience_years} years</h4>
          <h5>Likes {chefData?.likes} million</h5>
          <p className="text-justify">{chefData?.details}</p>
        </div>
        <img src={chefData?.img} alt="" />
      </div>
      <div className="recipie-sections">      
        <div className="recipe-details position-relative">
            <img src={chefData?.recipe1?.image} alt="" />
            <h2>{chefData?.recipe1?.recipe_name}</h2>
            <h3>Ratings: {chefData?.recipe1?.rating} <Rating placeholderRating={chefData?.recipe1?.rating}
              emptySymbol={<FaRegStar/>} readonly placeholderSymbol={<FaStar/>}  fullSymbol={<FaStar/>}/>
            </h3>
            <h4>Ingredients:</h4>
            <p>{chefData?.recipe1?.ingredients}</p>
            <h4>Cooking Method:</h4>
            <p>{chefData?.recipe1?.cooking_method}</p>
            <button type="button" disabled={isButton1Disabled} onClick={() => { 
              handleClick1(); 
              notify1();
             }} className="btn btn-outline-primary position-absolute bottom-0 end-0">Favourite</button>
            <ToastContainer />
        </div>
        <div className="recipe-details position-relative">
            <img src={chefData?.recipe2?.image} alt="" />
            <h2>{chefData?.recipe2?.recipe_name}</h2>
            <h3>Ratings: {chefData?.recipe2?.rating} <Rating placeholderRating={chefData?.recipe2?.rating}
              emptySymbol={<FaRegStar/>} readonly placeholderSymbol={<FaStar/>}  fullSymbol={<FaStar/>}/>
            </h3>
            <h4>Ingredients:</h4>
            <p>{chefData?.recipe2?.ingredients}</p>
            <h4>Cooking Method:</h4>
            <p>{chefData?.recipe2?.cooking_method}</p>
            <button type="button" disabled={isButton2Disabled} onClick={() => { 
              handleClick2(); 
              notify2();
             }} className="btn btn-outline-primary position-absolute bottom-0 end-0">Favourite</button>
        </div>
        <div className="recipe-details position-relative">
            <img src={chefData?.recipe3?.image} alt="" />
            <h2>{chefData?.recipe3?.recipe_name}</h2>
            <h3>Ratings: {chefData?.recipe3?.rating} <Rating placeholderRating={chefData?.recipe3?.rating}
              emptySymbol={<FaRegStar/>} readonly placeholderSymbol={<FaStar/>}  fullSymbol={<FaStar/>}/>
            </h3>
            <h4>Ingredients:</h4>
            <p>{chefData?.recipe3?.ingredients}</p>
            <h4>Cooking Method:</h4>
            <p>{chefData?.recipe3?.cooking_method}</p>
            <button type="button" disabled={isButton3Disabled} onClick={() => { 
              handleClick3(); 
              notify3();
             }} className="btn btn-outline-primary position-absolute bottom-0 end-0">Favourite</button>
        </div>
        
       
      </div>
    </div>
  );
};

export default ChefDetails;
