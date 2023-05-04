import React from 'react';
import { Carousel } from 'react-bootstrap';

const VideoSlider = () => {
    return (
        <div>
            <Carousel>
      <Carousel.Item>
        <iframe width="100%" height="500px" src="https://www.youtube-nocookie.com/embed/5ZiHkYhWEto" frameborder="0" allowfullscreen></iframe>
      </Carousel.Item>
      <Carousel.Item>
        <iframe width="100%" height="500px" src="https://www.youtube-nocookie.com/embed/xDcyHYZ7lwk" frameborder="0" allowfullscreen></iframe>
      </Carousel.Item>
      <Carousel.Item>
        <iframe width="100%" height="500px" src="https://www.youtube-nocookie.com/embed/BqGky4_c0Uw" frameborder="0" allowfullscreen></iframe>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default VideoSlider;