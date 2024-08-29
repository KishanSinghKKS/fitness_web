import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Hero.module.sass";
import ScrollButton from "../../../components/ScrollButton";
import Image from "../../../components/Image";
import ScrollParallax from "../../../components/ScrollParallax";

const Hero = ({ scrollToRef }) => {
  return (
    <div className={styles.hero}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <h1 className={cn("h1", styles.title)}>
            About us.
          </h1>
          <div className={styles.text}>
            Fit4Sure helps track your workouts, get better results, and be the best version of you. Less thinking, more lifting 🔥🏀
          </div>
          <div className={styles.btns}>
            <Link
              className={cn("button", styles.button)}
              onClick={() => window.location.replace("/#consultancy")}
            >
              Get Consultancy
            </Link>
          </div>
        </div>
        <ScrollButton
          onScroll={() =>
            scrollToRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className={styles.scroll}
        />
        <div className={styles.gallery}>
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/main-pic@2x.png 2x"
              srcSetDark="/images/content/main-pic-dark@2x.png 2x"
              src="/images/content/main-pic.png"
              srcDark="/images/content/main-pic-dark.png"
              alt="Main"
            />
          </div>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            delay={300}
          >
            <img
              srcSet="/images/content/ball@2x.png 2x"
              src="/images/content/ball.png"
              alt="Ball"
            />
          </ScrollParallax>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            delay={600}
          >
            <img
              srcSet="/images/content/ball-black@2x.png 2x"
              src="/images/content/ball-black.png"
              alt="Ball"
            />
          </ScrollParallax>
        </div>
      </div>
    </div>
  );
};

export default Hero;
