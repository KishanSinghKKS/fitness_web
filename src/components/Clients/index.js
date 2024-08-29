import React from "react";
import cn from "classnames";
import styles from "./Clients.module.sass";
import ScrollParallax from "../ScrollParallax";

const list = [
  {
    title: "100+ Expert Trainers |",
  },
  {
    title: "10,000+ People Trained |",
  },
  {
    title: " 95% Success Rate",
  }
];

const Clients = () => {
  return (
    <div className={styles.clients}>
      <div className={cn("container", styles.container)}>
        <ScrollParallax className={styles.title}>
           Trusted by 10,000+ Users Worldwide
        </ScrollParallax>
        <div className={styles.list}>
          {list.map((x, index) => (
            <div className={styles.logo} key={index}>
               <div>{x.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
