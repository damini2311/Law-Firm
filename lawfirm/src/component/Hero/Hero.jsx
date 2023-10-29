import React from "react";
import heroimg from "../../assests/heroimg.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.mid}>You don't have to Fight them Alone</p>
      </div>
      <div className={styles.heroimg}>
        <img src={heroimg} alt="heroimg" />
      </div>
    </div>
  );
};

export default Hero;
