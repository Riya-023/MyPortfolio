import styles from "./Home.module.css";
import { getImageUrl } from "../../utils";

const Home = () => {
  return (
    <section id="home" className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Riya</h1>
            <p className={styles.description}>I'm a Full Stack Developer. Reach out if you'd like to learn more!</p>
        <a className={styles.contactBtn} href="mailto:riyabhatia230@gmail.com">Contact Me</a>
        </div>
        <img className={styles.heroImg} src={getImageUrl("hero/heroImage.jpg")} alt="Hero image of me" />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}

export default Home
