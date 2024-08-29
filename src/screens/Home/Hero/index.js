import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Hero.module.sass";
import Image from "../../../components/Image";
import ScrollButton from "../../../components/ScrollButton";

const Hero = ({ scrollToRef }) => {
    return (
        <div className={styles.hero} id='hero'>
            <div className={cn("container", styles.container)}>
                <div className={styles.wrap}>
                    <div className={cn("stage", styles.stage)}>
                        START YOUR WEIGHT LOSS JOURNEY
                    </div>
                    <h1 className={cn("h1", styles.title)}>
                       Achieve Your Dream Weight Loss Fitness Goals Starting at Just ₹ 999 per month* at Fit4Sure
                    </h1>
                    <div className={styles.text}>
                     With budget-friendly pricing, our online weight loss fitness program matches you to your own personal trainer who designs a customized workout plan tailored to your body, weight loss goals, and lifestyle needs. 
                    </div>
                    <div className={styles.btns}>
                        <Link
                            className={cn("button", styles.button)}
                            to='https://wa.me/9120378932?text="Hello Are you from Fit4Sure?"'
                        >
                            What’s App
                        </Link>
                        <Link
                            className={cn("button-stroke", styles.button)}
                            to="/services"
                        >
                            Explore Plans
                        </Link>
                    </div>
                </div>
                <ScrollButton
                    onScroll={() =>
                        scrollToRef.current.scrollIntoView({
                            behavior: "smooth",
                        })
                    }
                    className={styles.scroll}
                />
                <div className={styles.gallery}>
                    <div className={styles.preview}>
                        <Image
                            srcSet="https://img.freepik.com/premium-photo/beautiful-slim-woman-with-tape-measuring_488220-70794.jpg?w=740"
                            srcSetDark="https://img.freepik.com/premium-photo/beautiful-slim-woman-with-tape-measuring_488220-70794.jpg?w=740"
                            src="https://img.freepik.com/premium-photo/beautiful-slim-woman-with-tape-measuring_488220-70794.jpg?w=740"
                            srcDark="/images/main.jpg"
                            alt="Watch"
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Hero;
