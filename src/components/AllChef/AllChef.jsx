import React from "react";
import LazyLoad from "react-lazy-load";
import { Link, useLoaderData, useParams } from "react-router-dom";

const AllChef = ({singleChef}) => {
    const {id, name, experience_years, likes, details, img } = singleChef;
  // const {id} = useParams();
  // const chefData = useLoaderData();
  // console.log(chefData);

  return (
    <div className="chef-details" key={id}>
      <LazyLoad height={300} width={300} threshold={1}><img className="" src={img} alt="img" /></LazyLoad>
      
      <h3>{name}</h3>
      <p>Experience: {experience_years} years</p>
      <p>Numburs of recipe: 3</p>
      <p>Likes {likes} million</p>
      {/* <button className="chef-details btn btn-info">View details</button> */}
      <Link to={`chefdetails/${id}`}><button className="chef-details btn btn-info">View Details</button></Link>
    </div>
  );
};

export default AllChef;
