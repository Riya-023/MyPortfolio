import { getImageUrl } from "../../utils";
import styles from "../Contact/Contact.module.css";

const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:riyabhatia230@gmail.com">riyabhatia230@gmail.com</a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/mobileIcon.png")}
              alt="Mobile icon"
            />
            <a href="tel:+919871239725">(+91) 9871239725</a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="Linkedin icon"
            />
            <a href="https://www.linkedin.com/in/riya-b572a426b">
              https://www.linkedin.com/in/riya-b572a426b
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
            />
            <a href=" https://github.com/Riya-023">
              {" "}
              https://github.com/Riya-023
            </a>
          </li>
        </ul>
    </footer>
  );
};

export default Contact;
