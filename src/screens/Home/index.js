import React, { useRef } from "react";
// import styles from "./Home.module.sass";
import Hero from "./Hero";
import Clients from "../../components/Clients";
import Steps from "./Steps";
import Intro from "../../components/Intro";
import Workouts from "../../components/Workouts";
import Offer from "../../components/Offer";
import VideoPlayer from "./VideoPlayer";
import Carousel from "./Carousel";
import  Consultancy  from "./Consultancy";


const Home = () => {
  const scrollToRef = useRef(null);

  return (
    <>
      <Hero scrollToRef={scrollToRef} />
      <Clients />
      {/* <VideoPlayer/> */}
      <Steps scrollToRef={scrollToRef} />
      <Carousel/>
      <Consultancy/>
      <Intro />
      {/* BMI */}
      <Workouts />
      {/* <Offer className="section-border-top" /> */}
    </>
  );
};

export default Home;
