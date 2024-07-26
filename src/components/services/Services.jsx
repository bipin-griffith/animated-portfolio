import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  // const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      animate="animate"
      whileInView="animate"
      ref={ref}
      // animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Better</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>
            <a href="#Contact">Lets Connect</a>
          </button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h3>Website Development</h3>
          <p>
            I create website with clients requirement and unique ideas with
            modern framework such as{" "}
            <b style={{ color: "orange" }}>MERN Stack</b>,{" "}
            <b style={{ color: "orange" }}>ASP .Net Framework</b>,{" "}
            <b style={{ color: "orange" }}>MVC Framework</b>,{" "}
            <b style={{ color: "orange" }}>WordPress</b>,{" "}
            <b style={{ color: "orange" }}>Wix</b>,{" "}
            <b style={{ color: "orange" }}>EditorX</b>,{" "}
          </p>
          <br />
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h3>Mobile App Development</h3>
          <p>
            Working experience with mobile app development for cross platform
            using <b style={{ color: "orange" }}>React Native</b>,{" "}
            <b style={{ color: "orange" }}>Flutter</b>,{" "}
            <b style={{ color: "orange" }}>Dart</b>
          </p>
          <br />
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h3>Programming Languages</h3>
          <p>
            Some of the different programming i know are{" "}
            <b style={{ color: "orange" }}>Javascript</b>,{" "}
            <b style={{ color: "orange" }}>C#</b>,{" "}
            <b style={{ color: "orange" }}>Python</b>,{" "}
            <b style={{ color: "orange" }}>Java</b>,{" "}
            <b style={{ color: "orange" }}>C++</b>,{" "}
            <b style={{ color: "orange" }}>Bootstrap</b>,{" "}
            <b style={{ color: "orange" }}>Ajax</b>,{" "}
            <b style={{ color: "orange" }}>Query</b>
          </p>
          <br />
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
