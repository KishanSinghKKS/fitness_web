import React, { useRef } from "react";
// import styles from "./Features.module.sass";
import Hero from "./Hero";
import ValueProps from "../../components/ValueProps";
import Program from "./Program";
import Review from "../../components/Review";
import Clients from "../../components/Clients";
import Workouts from "../../components/Workouts";
import Advantages from "../../components/Advantages";
import Offer from "../../components/Offer";
import Lifestyle from "./Lifestyle";

const Features = () => {
  const scrollToRef = useRef(null);

  return (
    <>
      <Hero scrollToRef={scrollToRef} />
      <ValueProps className="section-pb" />
      <Program />
      <Review className="section-pb64" />
      <Clients />
      <Workouts />
      <Lifestyle />
      <Advantages />
      <Offer className="section" />
    </>
  );
};

export default Features;
