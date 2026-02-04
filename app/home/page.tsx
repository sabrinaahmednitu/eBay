import React from 'react';
import HeroSections from './HeroSections';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';
import ProductCard from './ProductCard';


export default function homePage() {
  return <div>Home page
    <Navbar></Navbar>
    <ProductCard></ProductCard>
    <HeroSections></HeroSections>
    <Footer></Footer>
  </div>;
}
