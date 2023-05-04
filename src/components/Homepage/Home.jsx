import Carousel from "react-bootstrap/Carousel";
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import AllChef from "../AllChef/AllChef";
import { Link, useLoaderData } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import MultiCarousel from "../MultiCarousel/MultiCarousel";
import Gallery from "../Gallery/Gallery";
import VideoSlider from "../VideoSlider/VideoSlider";



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
      <div className="" ref={componentRef}>
      
      <div className="carouser-flyer container">
      <img className="first-img" src="https://i.ibb.co/1K8cFQ7/long-flyer-2.jpg" alt="" />
          
          <section className="my-5 container" >
        <Carousel className="">
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100 mx-auto "
              src="https://i.ibb.co/jD1rs8V/4201010.jpg"
              alt="First slide"
            />
            <Carousel.Caption className="bg-transparent d-inline">
              <h3 className="">Apple Juice</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100 mx-auto"
              src="https://i.ibb.co/19TvtZ8/1370528.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Green Ambrossia</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100 mx-auto"
              src="https://i.ibb.co/HgpzX8t/4201250.jpg"
              alt="Third slide"
            />
            <Carousel.Caption className="">
              <h3>Fruits Rolls</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>   
        <h4 className="quotes">“The food you eat can be either the safest and most powerful form of medicine or the slowest form of poison”  -Ann Wigmore.</h4>     
      </section>
      
          
          <img className="first-img" src="https://i.ibb.co/M6nPCLB/long-flyer-1.jpg" alt="" />  
      </div>      



      <div className="multi-carousel">
        <MultiCarousel/>
      </div>


      <div className="gallery container mt-5 mb-0">
        <Link to='/gallery'><h2 className="text-center text-dark mb-4">Image gallery</h2></Link>
        <h5 className="text-center mb-3">Click image gallery to see more..</h5>
        <Gallery/>
      </div>



      <div className="container">
        <VideoSlider></VideoSlider>
      </div>


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
