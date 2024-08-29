import React from "react";
import cn from "classnames";
import styles from "./Post.module.sass";

const Post = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.preview}>
              <img src="/images/content/history-pic.png" alt="People" />
            </div>
          </div>
          <div className={styles.col}>
            <h2 className={cn("h2", styles.title)}>Root of Yoga</h2>
            <div className={styles.info}>
              Yoga, meaning "union" in Sanskrit, is more than just a physical exercise. It is a holistic system that intertwines the mind, body, and spirit. With roots dating back over 5,000 years, yoga has evolved into various styles and practices, each offering a unique approach to achieving harmony and balance.{" "}
            </div>
            <div className={styles.content}>
              <p>
                The ancient yogis sought to understand the essence of existence and the interconnectedness of all things. Today, yoga serves as a timeless guide, providing tools to navigate the complexities of contemporary life.
              </p>
              <p>
                In the hustle and bustle of modern life, where stress and demands seem to be constant companions, finding a sanctuary for both the body and the mind becomes crucial. Yoga, an ancient practice that originated in India, has become a beacon of tranquility and holistic well-being for people around the world. In this blog, we will explore the transformative power of yoga, delving into its history, benefits, and how it can be a guiding light on your journey of self-discovery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
