import Carousel from "react-bootstrap/Carousel";
import React from "react";
import AllChef from "../AllChef/AllChef";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const allData = useLoaderData();

//   console.log(allData);
  return (
    <>
      <section className="my-5 container">
        <Carousel>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100 mx-auto "
              src="https://i.ibb.co/rHkVsVW/wp3108440.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Fast Foods</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100 mx-auto"
              src="https://i.ibb.co/w7NDsBw/wp3982991-food-wallpapers.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Colourful Sweets</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100 mx-auto"
              src="https://i.ibb.co/PTFDHqy/wp3983057-1.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Delicious Pizza</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      <section className="container chef-section">
        <h1 className="text-center my-5">Top American Chefs</h1>
        <div className="all-chefs">
        {
            allData.map(singleChef => <AllChef
                key={singleChef.id}
                singleChef={singleChef}
            ></AllChef>
                
                )
        }
        </div>
      </section>
    </>
  );
};

export default Home;
//<button className="chef-details btn btn-info">View details</button>