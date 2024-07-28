import "./about.scss";
import { motion } from "framer-motion";
import Cursor from "../cursor/Cursor";
import Navbar from "../navbar/Navbar";

const textVariants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  fadeIn: {
    opacity: 0,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const photoVariants = {
  initial: {
    scale: 0.5,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const About = () => {
  return (
    <>
      <Cursor />
      <Navbar />
      <div className="about">
        <div className="about-wrapper">
          <motion.div
            className="about-textContainer"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h2 variants={textVariants}>Bipin Gupta</motion.h2>
            <motion.h1 variants={textVariants}>Software Developer</motion.h1>
            <motion.div variants={textVariants} className="about-buttons">
              <motion.button variants={textVariants}>
                <motion.a variants={textVariants} href="#Biography">
                  Biography
                </motion.a>
              </motion.button>
              <motion.button variants={textVariants}>
                <motion.a variants={textVariants} href="#Experience">
                  Experience
                </motion.a>
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div
            className="about-photoContainer"
            variants={photoVariants}
            initial="initial"
            animate="animate"
          >
            <img src="/hero-bipin.png" alt="About" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
