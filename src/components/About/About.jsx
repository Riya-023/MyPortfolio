import React from "react";
import { getImageUrl } from "../../utils";
import styles from "../About/About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              I'm a front-end developer skilled in creating responsive, user-friendly websites with a focus on clean design and optimization. Eager to contribute and grow in the field.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              I have a solid understanding of backend development, including APIs and system optimization, and I'm eager to apply my skills in real-world projects to build scalable, high-performance systems.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
