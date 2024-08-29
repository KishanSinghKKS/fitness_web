import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import cn from "classnames";
import styles from "./Header.module.sass";
import Icon from "../Icon";
import Image from "../Image";

const navLinks = [
    {
        title: "Services",
        url: "/services",
    },
    {
        title: "Blogs",
        url: "/blogs",
    },
];

const socials = [
    {
        title: "facebook",
        size: "16",
        url: "https://www.facebook.com/people/Kishan-Singh/pfbid0XACV51UQ1bpdiYHrZhLuhsFKXo7vJPcKXazoJbovThrNBxv6roUQpMeqt6H8Z8fJl/",
    },
    {
        title: "instagram",
        size: "18",
        url: "https://www.instagram.com/thakur.kishan_singh_?igsh=bHpxcXI2OWxlN3ds",
    },
    {
        title: "linkedin",
        size: "16",
        url: "https://www.linkedin.com/in/kishan-singh108/",
    },
];

const contact = [
    {
        title: "Montanachester",
        content: "06787 Block Estates",
    },
    {
        title: "Lake Gene",
        content: "167 Emard River",
    },
    {
        title: "North Hassiefort",
        content: "032 Leonora Spurs",
    },
];

const Headers = () => {
    const [visibleNav, setVisibleNav] = useState(false);

    const { pathname } = useLocation();

    return (
        <header className={styles.header}>
            <div className={cn("container", styles.container)}>
                <Link
                    className={styles.logo}
                    to="/"
                    onClick={() => setVisibleNav(false)}
                >
                    <Image
                        className={styles.pic}
                        src="/images/logo-dark.svg"
                        srcDark="/images/logo-dark.svg"
                        alt="Fitness Pro"
                    />
                </Link>
                <div
                    className={cn(styles.wrap, { [styles.active]: visibleNav })}
                >
                    <nav className={styles.nav}>
                        {navLinks.map((x, index) =>
                            (
                                <NavLink
                                    className={cn(styles.link, {
                                        [styles.active]: pathname === x.url,
                                    })}
                                    to={x.url}
                                    key={index}
                                    onClick={() => setVisibleNav(false)}
                                >
                                    {x.title}
                                </NavLink>
                            )
                        )}
                    </nav>
                    <div className={styles.details}>
                        <div className={styles.contact}>
                            {contact.map((x, index) => (
                                <div className={styles.element} key={index}>
                                    <div className={styles.category}>
                                        {x.title}
                                    </div>
                                    <div className={styles.text}>
                                        {x.content}
                                    </div>
                                </div>
                            ))}
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
                        <Link
                            className={cn(
                                "button button-small",
                                styles.button
                            )}
                            to='https://wa.me/9120378932?text="Hello Are you from Fit4Sure?"'
                        >
                            What’s App
                        </Link>
                        <Link
                            className={cn(
                                "button-stroke button-small",
                                styles.button
                            )}
                            onClick={() => window.location.replace("/#consultancy")}
                            smooth={true}
                        >
                            FREE Consulting
                        </Link>
                    </div>
                </div>
                <Link
                    className={cn("button button-small", styles.button)}
                    to='https://wa.me/9120378932?text="Hello Are you from Fit4Sure?"'
                    target="_blank"
                >
                    What’s App
                </Link>
                <Link
                    className={cn("button-stroke button-small", styles.button)}
                    onClick={() => window.location.replace("/#consultancy")}
                    smooth={true}
                >
                    FREE Consulting
                </Link>
                <button
                    className={cn(styles.burger, {
                        [styles.active]: visibleNav,
                    })}
                    onClick={() => setVisibleNav(!visibleNav)}
                ></button>
            </div>
        </header>
    );
};

export default Headers;
