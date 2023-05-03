import Carousel from "react-bootstrap/Carousel";
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import AllChef from "../AllChef/AllChef";
import { useLoaderData } from "react-router-dom";
import { Button } from "react-bootstrap";


const Home = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  const allData = useLoaderData();

  //   console.log(allData);
  return (
    <>
    <div  className="container d-flex align-items-center justify-content-center" >
      <Button className="d-flex align-items-center" onClick={handlePrint} >download Pdf</Button>
    </div>
      <div ref={componentRef}>
      <section className="my-5 container" >
        <Carousel className="">
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100 mx-auto "
              src="https://i.ibb.co/rHkVsVW/wp3108440.jpg"
              alt="First slide"
            />
            <Carousel.Caption className="bg-transparent d-inline">
              <h3 className="">Fast Foods</h3>
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
            <Carousel.Caption className="">
              <h3>Delicious Pizza</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        
      </section>

      <section className="container chef-section">
        <h1 className="text-center my-5">Top American Chefs</h1>
        <div className="all-chefs">
          {allData.map((singleChef) => (
            <AllChef key={singleChef.id} singleChef={singleChef}></AllChef>
          ))}
        </div>
      </section>
      </div>
    </>
  );
};

export default Home;
//<button className="chef-details btn btn-info">View details</button>
