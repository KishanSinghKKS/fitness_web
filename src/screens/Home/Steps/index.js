import React from "react";
import cn from "classnames";
import styles from "./Steps.module.sass";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Register With Us",
    color: "#3772FF",
    images: "/images/content/download.svg",
    content:
      "Register with us and start your fitness journey with ease. ",
  },
  {
    title: "Select Your Trainer",
    color: "#9757D7",
    images: "/images/content/whistle.svg",
    content:
      "Browse our expert fitness team and pick your personal coach for a customized workout experience."
  },
  {
    title: "Set Your Goals",
    color: "#EF466F",
    images: "/images/content/medal.svg",
    content:
      "Consult with your trainer to define clear fitness targets. We tailor plans to fit your ambitions!",
  },
  {
    title: "Schedule Workouts",
    color: "#45B26B",
    images: "/images/content/stopwatch.svg",
    content:
      "Choose convenient workout times via the app. Fit4Sure ensures every session is enjoyable and effective.",
  },
];

const Steps = ({ scrollToRef }) => {
  return (
    <div className={cn("section", styles.section)} ref={scrollToRef} id='steps'>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}>How it works</h2>
          <div className={styles.info}>
            Start Your Fit4Sure Journey in 4 Easy Steps!
          </div>
        </div>
        <div className={styles.list}>
          {items.map((x, index) => (
            <ScrollParallax className={styles.item} key={index}>
              <div
                className={styles.preview}
                style={{ backgroundColor: x.color }}
              >
                <img src={x.images} alt={`Step ${index}`} />
              </div>
              <div className={styles.number}>Step {index + 1}</div>
              <div className={styles.subtitle}>{x.title}</div>
              <div className={styles.content}>{x.content}</div>
            </ScrollParallax>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
