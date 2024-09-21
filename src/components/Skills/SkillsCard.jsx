import { getImageUrl } from "../../utils";
import styles from "./SkillsCard.module.css";

const SkillsCard = ({skill :{title, imageSrc, description, skills}}) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={getImageUrl(imageSrc)} alt={`Image of ${title}`} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return(
              <li className={styles.skill} key={id}>{skill}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillsCard;
