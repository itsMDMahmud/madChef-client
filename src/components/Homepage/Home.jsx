import Carousel from 'react-bootstrap/Carousel';
import React from "react";

const Home = () => {
  return (
    <section className='my-5'>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-75 mx-auto "
            src="https://i.ibb.co/rHkVsVW/wp3108440.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First Foods</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-75 mx-auto"
            src="https://i.ibb.co/w7NDsBw/wp3982991-food-wallpapers.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Colourful Sweets</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  interval={2000}>
          <img
            className="d-block w-75 mx-auto"
            src="https://i.ibb.co/PTFDHqy/wp3983057-1.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Delicious Pizza</h3>            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Home;
