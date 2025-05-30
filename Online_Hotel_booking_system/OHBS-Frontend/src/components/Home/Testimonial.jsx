import React from 'react';
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import { Carousel } from 'react-bootstrap';

const Testimonial = () => {
    
const testimonials = [
  {
    text: "Joining this institute was the best decision I made for my career. The faculty here are not just experts but also mentors who genuinely care about our growth.",
    name: "Arjun Reddy",
    role: "Software Engineer at Infosys",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    text: "The structured curriculum and hands-on projects gave me the confidence to excel in my job interviews. I couldn't have done it without their guidance.",
    name: "Priya Sharma",
    role: "Data Analyst at TCS",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "The practical approach to teaching here is outstanding. I gained not just theoretical knowledge but real-world skills that made me industry-ready.",
    name: "Vivek Patel",
    role: "Full Stack Developer at Wipro",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    text: "The personalized attention and regular doubt-clearing sessions made a huge difference in my learning journey. Highly recommend this institute!",
    name: "Sanya Gupta",
    role: "UX Designer at Capgemini",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
  },
  {
    text: "The projects and assignments here are top-notch. They mirror real-world challenges, which prepared me well for my job as a developer.",
    name: "Rohit Singh",
    role: "Backend Developer at Cognizant",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
  },
];
  return (
    <>
      {/* Testimonials Section */}
      <div className="testimonial-section" data-aos="fade-up">
        <h2 className="testimonial-title">Success stories from our learners</h2>
        <Carousel className="testimonial-carousel">
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <div className="testimonial-wrapper">
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-img-wrapper">
                  <img src={testimonial.image} alt={`testimonial-${index}`} className="testimonial-img"/>
                </div>
                <div className="testimonial-person-info">
                  <p>
                    <b>{testimonial.name}</b><br />
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      {/* Testimonials Ends */}
    </>
  );
};

export default Testimonial;
