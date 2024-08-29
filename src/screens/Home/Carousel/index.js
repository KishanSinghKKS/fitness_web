import React from "react";
import cn from "classnames";
import Slider from "react-slick";
import styles from "./Carousel.module.sass";

const items = [
    {
        title: "Rajesh Kumar",
        content:
            "I never thought I could shed those extra pounds until I joined the weight loss program at Fit4Sure! Thanks to my trainer, Priya, I've lost 15 pounds in just two months!",
        image: "url('/images/content/history-pic.png')",
        status: "pink",
        statusContent: "new",
    },
    {
        title: "Shalini Gupta",
        content:
            "As a busy professional, I struggled to find time for exercise. But thanks to the personalized guidance from my trainer, Rahul, I've not only lost weight but also improved my overall fitness levels.",
        image: "url('/images/content/history-pic.png')",
        status: "pink",
        statusContent: "new",
    },
    {
        title: "Aman Singh",
        content:
            "The weight loss program at Fit4Sure has completely transformed my life! I've lost 20 pounds and gained so much confidence. Thank you, Deepika, for your constant support and motivation!",
        image: "url('/images/content/history-pic.png')",
        status: "pink",
        statusContent: "new",
    },
    {
        title: "Anjali Patel",
        content:
            "I had tried various diets and workouts in the past with little success. But the tailored approach of the weight loss program at Fit4Sure, led by my trainer, Neha, finally helped me achieve my goals!",
        image: "url('/images/content/history-pic.png')",
        status: "pink",
        statusContent: "new",
    },
    {
        title: "Meena Sharma",
        content:
            "I was skeptical about online fitness coaching, but the results speak for themselves! Thanks to the expert guidance from my trainer, Vikram, I've lost inches off my waist and feel healthier than ever.",
        image: "url('/images/content/history-pic.png')",
        status: "pink",
        statusContent: "new",
    },
    {
        title: "Pooja Malhotra",
        content:
            "Joining the weight loss program at Fit4Sure was the best decision I've ever made! My trainer, Sanjay, not only helped me lose weight but also taught me sustainable habits for long-term health.",
        image: "url('/images/content/history-pic.png')",
        status: "pink",
        statusContent: "new",
    },
    {
        title: "Ritu Khanna",
        content:
            "I struggled with my weight for years, but the support and encouragement from my trainer, Suresh, made all the difference. I've lost 25 pounds and gained a new lease on life!",
        image: "url('/images/content/history-pic.png')",
        status: "pink",
        statusContent: "new",
    },
    {
        title: "Arjun Reddy",
        content:
            "I've tried numerous fad diets and quick fixes in the past, but none of them worked. The personalized approach of the weight loss program at Fit4Sure, led by my trainer, Reena, finally helped me achieve lasting results!",
        image: "url('/images/content/history-pic.png')",
        status: "pink",
        statusContent: "new",
    },
    {
        title: "Priya Sharma",
        content:
            "Thanks to the comprehensive support from my trainer, Sunil, I've not only lost weight but also improved my overall fitness and energy levels. I couldn't be happier with my results!",
        image: "url('/images/content/history-pic.png')",
        status: "pink",
        statusContent: "new",
    },
    {
        title: "Rohit Verma",
        content:
        
            "After years of struggling with yo-yo dieting, I finally found a program that works! Thanks to the expertise of my trainer, Ananya, I've lost weight steadily and feel more confident in my own skin.",
        image: "url('/images/content/history-pic.png')",
        status: "pink",
        statusContent: "new",
    },
];

const Carousel = () => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        adaptiveHeight: true,
    };

    return (
        <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <h2 className={cn("hero", styles.title)}>The Weight Loss <span>Story</span></h2>
        {/* <div className={styles.info}>
        Check out the different services offered
        </div> */}
        <div className={styles.history}>
            <div className={styles.wrap}>
                <Slider className="history-slider" {...settings}>
                    {items.map((x, index) => (
                        <div className={styles.slide} key={index}>
                            <div className={cn("history-item", styles.item)}>
                                <div
                                    className={styles.preview}
                                    style={{ backgroundImage: x.image }}
                                ></div>
                                <div className={styles.details}>
                                    <div
                                        className={cn(
                                            {
                                                "status-pink":
                                                    x.status === "pink",
                                            },
                                            {
                                                "status-green":
                                                    x.status === "green",
                                            },
                                            styles.status
                                        )}
                                    >
                                        {x.statusContent}
                                    </div>
                                    <div className={styles.title}>
                                        {x.title}
                                    </div>
                                    <div className={styles.content}>
                                        {x.content}
                                    </div>
                                </div>
                                <div className={styles.position}>
                                    {x.position}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
      </div>
    </div>
    );
};

export default Carousel;
