import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/button/Button';


const About = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.imgContainer}>
        <Image
          src="/cat.jpg"
          alt="Hero image"
          fill
          className={styles.img}
        />
         <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award-winning digital experiences
          </h2>
        </div> 
      </div>

      {/* Content Section */}
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            We are a creative team passionate about blending design, technology,
            and storytelling. Our mission is to deliver digital experiences that
            inspire, engage, and create real impact. From strategy to execution,
            we craft with precision and passion.
          </p>
        </div>

        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            We build cutting-edge web experiences, apps, and digital products
            that solve real-world problems. Our process combines user-centered
            design, innovative technologies, and storytelling that connects with
            audiences on a deeper level.
          </p><br/>
          <Button url="/contact" text="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default About;
