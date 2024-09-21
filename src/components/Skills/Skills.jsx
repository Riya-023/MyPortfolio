import styles from "../Skills/Skills.module.css";
import skills from "../../data/skills.json";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
        <h2 className={styles.title}>Skills</h2>
            <div className={styles.skills} >
                {
                  skills.map((skill, id) =>{
                    return (
                        <SkillsCard key={id} skill={skill}/>
                    )
                  })  
                }
            </div>
    </section>
  )
}

export default Skills
