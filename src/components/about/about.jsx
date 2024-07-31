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
              <motion.button
                variants={textVariants}
                onClick={() =>
                  document
                    .getElementById("Summary")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Summary
              </motion.button>
              <motion.button
                variants={textVariants}
                onClick={() =>
                  document
                    .getElementById("Experience")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Experience
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
        <div className="about-content">
          <section id="Summary">
            <h2>SUMMARY</h2>
            <p>
              Enriched by impactful experiences in developing diverse
              applications and websites, my unwavering passion for software
              development fuels a commitment to excellence. With a blend of
              motivation and meticulous attention to detail, I craft innovative
              solutions, driven by a relentless pursuit of growth and a
              dedication to delivering adaptive, high-quality outcomes in every
              project. Experienced in leveraging cutting-edge technologies and
              adaptable frameworks, I strive to create user-centric, efficient
              solutions, ensuring a seamless integration of functionality and
              design.
            </p>
          </section>
          <section id="Internships">
            <h2>INTERNSHIPS</h2>
            <div className="internship">
              <h3>Software Developer - Equitec - Technology for Finance</h3>
              <p>
                Software Development Intern with a focus on client-centric
                website development. Skilled in gathering client requirements,
                creating responsive web pages, and integrating diverse
                functionalities. Proficient in VBA, MVC, C#, JavaScript, and
                Bootstrap. Valuable experience in team-based project
                collaboration at Equitec Technology for Finance. Excited to
                leverage enriched skills in future endeavors.
              </p>
              <p>
                Technologies: ASP .NET, MVC Architect, ASP libraries, C#,
                jQuery, JavaScript, Bootstrap, VBA, HTML, CSS.
              </p>
            </div>
          </section>
          <section id="Experience">
            <h2>PROFESSIONAL EXPERIENCE</h2>
            <div className="experience">
              <h3>Full Stack Developer - Upcloud Technology</h3>
              <p>
                As an Upcloud Technology Full Stack Development Freelancer, I
                excel in client-centric mobile app development for Android and
                iOS. Proficient in Postman, Android Studio, and Visual Studio, I
                collaborate with a talented backend team to deliver innovative
                solutions that prioritize user experience.
              </p>
              <p>Technologies: React-Native, JavaScript, Node.JS.</p>
            </div>
            <br />
            <div className="experience">
              <h3>Full Stack Developer - Mix School</h3>
              <p>
                Full Stack Developer at Mix School, responsible for creating and
                deploying the prototype of the school's website using WordPress
                and GoDaddy hosting. Proficient in WordPress, MySql, Xampp
                servers, and various plugins like MailChimp and Forminator.
                Experience in deploying websites using GoDaddy hosting.
                Collaborated with a tech-driven team and actively crafted
                responsive web pages with diverse functionalities for an
                enhanced user experience.
              </p>
              <p>
                Technologies: WordPress, GoDaddy Hosting, XAMPP Control Panel,
                MailChimp, JavaScript, HTML, CSS.
              </p>
            </div>
          </section>
          <section id="Education">
            <h2>EDUCATION</h2>
            <div className="education">
              <h3>
                MSc in Computing (Computer Science) - Griffith College Dublin
              </h3>
              <p>
                I started my Master's degree at Griffith College Dublin,
                studying full-time for an MSc in Computing. I'm excited to learn
                advanced programming there. This program will not only improve
                my technical skills but also give me a good understanding of the
                latest programming ideas and methods.
              </p>
              <p>
                Key Modules: Cloud Platform and Application, Agile Software
                Development, Parallel and Distributed Programming, Information
                Security
              </p>
            </div>
            <br />
            <div className="education">
              <h3>
                Bachelor of Computer Applications (BCA) - Somaiya Vidyavihar
                University
              </h3>
              <p>
                I achieved an outstanding CGPI/CGPA of 9.67, earning an
                exceptional Grade A+ throughout my academic journey. This
                academic accomplishment reflects my consistent dedication to
                excellence and a strong commitment to learning.
              </p>
              <p>
                Key Modules: Software Engineering, Software Project Management,
                Mobile Programming, MERN Stack, Advanced Web Programming, OOPS
                with core Java, Python Programming, Artificial Intelligence and
                Machine Learning, Cloud Computing, Organizational Behavior.
              </p>
            </div>
            <br />
            <div className="education">
              <h3>
                Higher Secondary School Certificate (HSC) - NES Ratnam Junior
                College of Science
              </h3>
              <p>
                I maintain a strong academic record, achieving an overall grade
                of 80.10%. Notably, in Computer Science, I secured an
                exceptional score of 190/200. Through this academic journey,
                I've consistently demonstrated a deep understanding and passion
                for the field of Computer Science, which reflects in my
                exceptional performance.
              </p>
              <p>Key Modules: Computer Science, Mathematics</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
