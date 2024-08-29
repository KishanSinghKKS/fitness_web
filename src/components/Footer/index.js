import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Icon from "../Icon";
import Image from "../Image";

const menu = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "Privacy Policy",
        url: "/privacypolicy",
    },
    {
        title: "Terms and Conditions",
        url: "/termsandconditions",
    },
    {
        title: "Cancellation and Refund",
        url: "/cancellationandrefund",
    },
];

const socials = [
    {
        title: "facebook",
        size: "16",
        url: "https://www.facebook.com/profile.php?id=100025336920838",
    },
    {
        title: "instagram",
        size: "18",
        url: "https://www.instagram.com/thakur.kishan_singh_?igsh=bHpxcXI2OWxlN3ds",
    },
    {
        title: "linkedin",
        size: "16",
        url: "www.linkedin.com/in/kishan-singh108",
    },
];

const Footer = () => {
    const [visible, setVisible] = useState(false);

    const { pathname } = useLocation();

    return (
        <footer className={styles.footer}>
            <div className={styles.body}>
                <div className={cn("container", styles.container)}>
                    <div className={styles.col}>
                        <div className={styles.box}>
                            <Link className={styles.logo} to="/">
                                <Image
                                    className={styles.pic}
                                    src="/images/logo-dark.svg"
                                    srcDark="/images/logo-light.svg"
                                    alt="Fitness Pro"
                                />
                            </Link>
                        </div>
                        <div
                            className={cn(styles.item, {
                                [styles.active]: visible,
                            })}
                        >
                            <div
                                className={styles.category}
                                onClick={() => setVisible(!visible)}
                            >
                                footer nav
                                <Icon name="arrow-bottom" size="9" />
                            </div>
                            <div className={styles.menu}>
                                {menu.map((x, index) => (
                                    <NavLink
                                        className={cn(styles.link, {
                                            [styles.active]: pathname === x.url,
                                        })}
                                        to={x.url}
                                        key={index}
                                    >
                                        {x.title}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.category}>contact</div>
                        <div className={styles.info}>
                            <p>Laxmanpur Colony</p>
                            <p>Bhojuveer</p>
                            <p>Varanasi</p>
                            <p>9772408073</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.foot}>
                <div className={cn("container", styles.container)}>
                    <div className={styles.copyright}>
                        Copyright ©. All rights reserved
                    </div>
                    <div className={styles.socials}>
                        {socials.map((x, index) => (
                            <a
                                className={styles.social}
                                href={x.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={index}
                            >
                                <Icon name={x.title} size={x.size} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
