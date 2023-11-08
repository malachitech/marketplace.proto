import React from 'react';
import { BiCartAlt, BiHeart, BiSearchAlt } from "react-icons/bi";
import { SiExpertsexchange } from "react-icons/si";
import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.topHeader}>
                <div className={styles.logo}>
                    <SiExpertsexchange />
                </div>

                <div className={styles.searchInputContainer}>
                    <input
                        type="text"
                        className={styles.searchInput}
                        placeholder="Search..."
                    />
                    <button className={styles.searchButton}>
                        <BiSearchAlt />
                    </button>
                </div>

                <div className={styles.shopBtns}>
                    <button className={styles.wishlist}>
                        <BiHeart />
                    </button>
                    <button className={styles.cart}>
                        <BiCartAlt /><span>2</span>
                    </button>
                </div>

            </div>

            <div className={styles.bottomHeader}>
                
                    <select className={styles.customDropdown}>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                
                <nav className={styles.navbar}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
                {/* This content would display dynamically. If user is logged in then it won't show. */}
                <div className={styles.authNavbar}>
                    <ul>
                        <li><a href="/">Sign In</a></li>
                        <li><a href="/">Sign Up</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;