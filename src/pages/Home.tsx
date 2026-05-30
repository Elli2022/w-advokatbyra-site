import React from "react";
import Navbar from "../components/Navbar";
// import Title from "../components/Title";
import Banner from "../components/Banner";
import LargeBanner from "../components/LargeBanner";
import Footer from "../components/Footer";
import Video from "../components/Video";
import { NewsSection } from "../components/NewsSection";
import HorisontalRule from "../components/HorisontalRule";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <LargeBanner />
      <Video />
      <NewsSection />
      <HorisontalRule />
      <Footer />
    </>
  );
}

export default Home;
