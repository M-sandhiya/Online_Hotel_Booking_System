import React from 'react';
import { Home, Search } from 'lucide-react';
import SearchForm from './SearchForm';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import MainPageHome from '../../pages/Home';
import Testimonials from '../Home/Testimonial';
import './Hero.css';
const Hero = () => {
  return (
    <>
      <Header />
      <MainPageHome />
      <Testimonials/>
      <Footer />
    </>
  );
};

export default Hero;
