import React from 'react';
import { Carousel } from 'react-bootstrap';
import room1 from '../assets/images/room1.jpg';  
import room2 from '../assets/images/room2.jpg';
import room3 from '../assets/images/room3.jpg';
import  '../pages/Home.css';
import Testimonials from '../components/Home/Testimonial';
const Home = () => {
  return (
    <div>
      <Carousel interval={2500} pause={false} fade>  {/* Automatically moves every 3 seconds */}
        <Carousel.Item>
          <img className="d-block w-100" src={room1} alt="Room 1" />
          <Carousel.Caption>
            <h3>Room 1</h3>
            <p>Elegant and spacious room.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={room2} alt="Room 2" />
          <Carousel.Caption>
            <h3>Room 2</h3>
            <p>Cozy and comfortable stay.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={room3} alt="Room 3" />
          <Carousel.Caption>
            <h3>Room 3</h3>
            <p>Modern amenities and stylish decor.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

        {/* Our Room Section */}
      <section className="our-room-section">
  <h2>OUR ROOMS</h2>
  <p>Discover comfort and style in our thoughtfully designed rooms.</p>

  <div className="room-cards">
    <div className="room-card">
      <img src={room1} alt="Single Room" />
      <h3>Single Room</h3>
      <p>Cozy comfort for solo travelers seeking relaxation.</p>
      <button className="book-btn">Book Now</button>
    </div>

    <div className="room-card">
      <img src={room2} alt="Double Room" />
      <h3>Double Room</h3>
      <p>Spacious and stylish, perfect for couples or companions.</p>
      <button className="book-btn">Book Now</button>
    </div>

    <div className="room-card">
      <img src={room3} alt="Suite" />
      <h3>Deluxe</h3>
      <p>Luxury and elegance combined for a premium stay.</p>
      <button className="book-btn">Book Now</button>
    </div>
  </div>
</section>


    </div>

    
  );
};

export default Home;
