import {useRef} from 'react'
import "./skills.css"
import { motion, useScroll, useTransform} from "framer-motion"
function Skills() {
    
    const ref= useRef();
    const {scrollYProgress} = useScroll({target:ref, offset: ["start start", "end start"]})
  const y =useTransform(scrollYProgress, [0,1],["0%", "-100%"]);
    const skills = [
      "HTML","JavaScript","ReactJS","CSS","UI & UX Design","Figma","Wireframing"
    ]
  return (
    <div className="skills" ref={ref}>
      <motion.ul style={{y}} className="ulList"   initial="hidden" animate="visible" >
        {skills.map((skill) => (
            <motion.li style={{y}}  key={skill}>{skill}</motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

export default Skills
