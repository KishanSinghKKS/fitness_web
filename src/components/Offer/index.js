import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Offer.module.sass";

const Offer = ({ className }) => {
  return (
    <div className={cn(className, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={cn("stage", styles.stage)}>
          try it today🎾
        </div>
        <h2 className={cn("h1", styles.title)}>
          Anywhere you want.<br></br><span>Anytime you want.</span> 
        </h2>
        <div className={styles.text}>
          Get started with tips and strategies from the best
        </div>
        <Link className={cn("button", styles.button)} onClick={() => window.location.replace("/#consultancy")}>
          Get Consultancy
        </Link>
      </div>
    </div>
  );
};

export default Offer;
