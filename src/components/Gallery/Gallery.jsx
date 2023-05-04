import React from 'react';

const Gallery = () => {
    return (
        <>
            {/* <!-- Gallery --> */}
<div className="row">
  <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src="https://i.ibb.co/QdSrhQy/coffee-vs-tea.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

    <img
      src="https://i.ibb.co/vCWkBM5/food-infographic-what-are-you-eating.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://i.ibb.co/cFwrTgt/Vegan-Vs-Vegetarian.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />

    <img
      src="https://i.ibb.co/ygMrVv5/Cupcake-Anatomy-1536x933.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://i.ibb.co/jVg0yrF/food-facts-1536x877.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <img
      src="https://i.ibb.co/74fzNcG/Brain-food-infographic.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>
</div>
{/* <!-- Gallery --> */}
        </>
    );
};

export default Gallery;