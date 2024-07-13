import React from 'react'
import "./hero.css"
import { motion } from "framer-motion"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

function Hero() {
  return (
    <div className="hero">
        <div className="wrapper1">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
            <motion.h2 variants={textVariants}>SHREYA PARSEKAR</motion.h2>
            <motion.h1 variants={textVariants}>Web developer and UI/UX desinger</motion.h1>
            <motion.div variants={textVariants} className="buttons">
                {/* <motion.button variants={textVariants}>See the latest works</motion.button> */}
                {/* <motion.button variants={textVariants}>Contact me</motion.button> */}
            </motion.div>
        </motion.div>
        </div>

        <div className="imagecon">
            <img src="/me.png" />
        </div>
      
    </div>
  )
}

export default Hero
