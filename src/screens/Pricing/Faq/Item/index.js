import React, { useState } from "react";
import cn from "classnames";
import styles from "./Item.module.sass";
import Icon from "../../../../components/Icon";
import ScrollParallax from "../../../../components/ScrollParallax";

const Item = ({ item }) => {
    const [visible, setVisible] = useState(false);

    return (
        <ScrollParallax className={styles.item}>
            <div
                className={cn(styles.head, { [styles.active]: visible })}
                onClick={() => setVisible(!visible)}
            >
                <div className={styles.title}>{item.title}</div>
                <div className={styles.arrow}>
                    <Icon name="arrow-bottom" size="10" />
                </div>
            </div>
            <div className={cn(styles.body, { [styles.visible]: visible })}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <div className={styles.preview}>
                            <img
                                srcSet="/images/content/faq-pic@2x.png 2x"
                                src="/images/content/faq-pic.png"
                                alt="About pic"
                            />
                            <button className={cn("play-small", styles.play)}>
                                <Icon name="play" size="14" />
                            </button>
                        </div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.info}>
                            You don’t need to do anything else
                        </div>
                        <div className={styles.content}>
                            <p>
                                A yoga mat provides a stable and comfortable surface for your practice, helping with grip and cushioning during poses and exercises.
                            </p>
                            <p>
                                A yoga towel is often used to absorb sweat and provide a non-slip surface. It can be particularly useful in hot yoga classes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollParallax>
    );
};

export default Item;
