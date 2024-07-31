import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Doctor Booking App",
    img: "https://figmaelements.com/wp-content/uploads/2020/10/personal-doctor-mobile.png",
    desc: "This app, built with React Native and JavaScript, helps folks book doctor appointments and find nearby doctors. It's like a handy tool that makes it easy to set up medical visits and locate the right doctor for you. It's simple to use and makes managing healthcare needs a breeze!",
    link: "https://github.com/bipin-gupta/previewScreen",
  },
  {
    id: 2,
    title: "Pedometer App",
    img: "StepCounter.png",
    desc: "This pedometer app tracks your progress by day, week, month, and year. Plus, it is easy to check progress throughout the day. One of Step-o-tree’s best features is that Step-o-tree plants a tree on certain crossing steps such as 6000 steps a day (apply to every user) Step-o-meter is available for free, or you can upgrade to Step-o-meter Premium for about $0.5 per month.",
    link: "https://github.com/bipin-gupta/step-o-tree-code",
  },
  {
    id: 3,
    title: "Football Website",
    img: "Chelsea.png",
    desc: "Welcome to our football club website, where HTML, CSS, and JavaScript come together to create an immersive experience for fans. Dive into our virtual stadium to shop for the latest gear, log in to access exclusive member benefits, and scroll through daily updates about the club. Become a part of our community by registering as a member, unlocking personalized recommendations and member-only discounts.",
    link: "https://github.com/bipin-gupta/chelsea-fc-fan-website-2",
  },
  {
    id: 4,
    title: "React Native Demo",
    img: "https://th.bing.com/th/id/OIP.uDMCW_1IznXiFGscE2Cy7gHaEK?rs=1&pid=ImgDetMain",
    desc: "React Native Project - XResearch Mobile App Welcome to my Mobile App project, a project built using React Native and Firebase for the Mobile App Development assignment. This app allows users to register, log in, view their user profile, navigate through different screens, and log out at any time. Below, you'll find a detailed overview of the app's features.",
    link: "https://github.com/bipin-gupta/React-Native-Project",
  },
  {
    id: 5,
    title: "React Router Demo",
    img: "https://res.cloudinary.com/practicaldev/image/fetch/s---dvPKy6Q--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://miro.medium.com/max/1400/0%2AID7KJ8DuspcjB343",
    desc: "The React Router DOM Demo Project showcases the usage and functionality of React Router DOM, a powerful library for handling routing in React applications. This project demonstrates how to implement various types of routes, navigate between different pages, and manage dynamic content seamlessly within a React application.",
    link: "https://github.com/bipin-griffith/React-Router",
  },
  {
    id: 6,
    title: "React Redux Demo",
    img: "https://i.ytimg.com/vi/k68j9xlbHHk/sddefault.jpg",
    desc: "The React Redux Demo Project is designed to demonstrate the core concepts and practical implementation of Redux within a React application. This project illustrates how to manage state effectively using Redux, including state actions, reducers, and middleware. It provides a comprehensive example of integrating Redux with a React application, showcasing best practices and common use cases.",
    link: "https://github.com/bipin-griffith/Redux",
  },
  {
    id: 7,
    title: "React Query(tanstack) Demo",
    img: "https://miro.medium.com/v2/resize:fit:1358/1*BV_VvSSOT4Pv0Cd4uXcyVA.png",
    desc: "The React Query TanStack Demo Project is designed to showcase the power and flexibility of React Query (part of TanStack) for managing server-state in React applications. This project provides a practical example of using React Query to fetch, cache, synchronize, and update server data, demonstrating how it can simplify data fetching and state management.",
    link: "https://github.com/bipin-griffith/React-Querry",
  },
  {
    id: 8,
    title: "React Native App",
    img: "https://dailytrust.com/wp-content/uploads/2024/05/react-native-app-development.jpeg",
    desc: "TThe React Native Frontend Demo Project is designed to showcase the capabilities of React Native for building cross-platform mobile applications. This project demonstrates how to create a fully functional mobile app with essential features, leveraging the power of React Native components, navigation, and state management. It provides a comprehensive example of building a modern mobile application with a clean and intuitive user interface.",
    link: "https://github.com/bipin-gupta/previewScreen",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const handleDemoButtonClick = () => {
    window.location.href = item.link;
  };

  return (
    <section ref={ref}>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" style={{ y }}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={handleDemoButtonClick}>See Code</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
