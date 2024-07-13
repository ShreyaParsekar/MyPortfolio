import {useRef} from 'react'
import "./parallax.css"
import { motion, useScroll, useTransform } from "framer-motion"

function Parallax ({type}) {
 
  const ref = useRef()

   const {scrollYProgress} =useScroll({
    target:ref,
    offset:["start start", "end start"]
   })
   const yText=useTransform(scrollYProgress,[0,1], ["0%", "100%"])
   const yBg=useTransform(scrollYProgress,[0,1], ["0%", "100%"])

  return (
    <div className="parallax" 
    ref={ref}
    style={{background:type==="skills" ? "linear-gradient(180deg, #0c0c1d, #111132)" 
    : "linear-gradient(180deg, #0c0c1d, #505064)"}}>
        <motion.h1 style={{y:yText}}>{type==="skills" ? "My Skills" : "What I have done"} </motion.h1>
      <motion.div className="land"></motion.div>
      <motion.div style={{x:yBg}} className="sky"></motion.div>
      <motion.div style={{y:yBg}} className="planets"></motion.div>

    </div>
  )
}

export default Parallax
