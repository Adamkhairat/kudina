import React from 'react';
import HeroSection from './Blocks/HeroSection';
import Navbar from './Blocks/Navbar';
import './styles.css'
 
const Home = () => {
  return (
    <div className='uk-container'>
      <Navbar />
      <HeroSection />
    </div>
   )
}
 
export default Home;