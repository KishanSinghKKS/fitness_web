import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Workouts.module.sass";
import Image from "../Image";
import ScrollParallax from "../ScrollParallax";

const items = [
 "Personalized Training",
"Customized Diet Plans",
"Nutritional Guidance",
"Calorie Management",
"Fitness Tracking",
"Progress Monitoring",
// "Goal Setting",
// "Meal Planning Assistance",
// "One-on-One Support",
// "Expert Advice",
// "Community Support",
// "Flexible Subscription Options",
// "App Support",

];

const Workouts = () => {
  return (
    <div className={styles.section}>
      <div className={cn("container", styles.container)}>
        <div className={styles.gallery}>
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/phones@2x.png 2x"
              srcSetDark="/images/content/phones-dark@2x.png 2x"
              src="/images/content/phones.png"
              srcDark="/images/content/phones-dark.png"
              alt="Phones"
            />
          </div>
          <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <img
              srcSet="/images/content/ball-green-1@2x.png 2x"
              src="/images/content/ball-green-1.png"
              alt="Gloves"
            />
          </ScrollParallax>
          <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <img
              srcSet="/images/content/apple@2x.png 2x"
              src="/images/content/apple.png"
              alt="Apple"
            />
          </ScrollParallax>
        </div>
        <div className={styles.wrap}>
          <h2 className={cn("h2", styles.title)}>
          Why to Choose Fit4Sure,   <br></br>Weight Loss Program
          </h2>
          <div className={styles.info}>
          Fit4Sure is your go-to weight loss program offering personalized plans, expert guidance, and proven results at an affordable price.

          </div>
          <ul className={styles.list}>
            {items.map((x, index) => (
              <li className={styles.item} key={index}>
                {x}
              </li>
            ))}
          </ul>
          <div className={styles.btns}>
            <Link className={cn("button", styles.button)} to="/services">
            Explore Plans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workouts;
