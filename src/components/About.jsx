import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn,textVariant} from '../utils/motion';

const ServiceCard = ({index,title,icon}) => {
  return (
    <Tilt
      className="xs:w-[250xp] w-full"
      options={{ max: 30, scale: 1, speed: 400 }}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <motion.div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </motion.div>
      </motion.div>
    </Tilt>
  );
}

const About = () => {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      
      <motion.div variants={textVariant()}>
      <span className="hash-span" id="about">
        &nbsp;
      </span>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed distinctio impedit voluptate earum est reprehenderit magnam fugiat corporis praesentium explicabo culpa, voluptatem, mollitia, dolorem illum fugit. Quisquam voluptate sit numquam dolorem culpa, exercitationem incidunt iusto sint commodi reprehenderit provident vel, optio dolorum iste nisi, perferendis eveniet blanditiis quae autem?
      </motion.p>
      <div className="mt-20 grid grid-cols-2 gap-10 ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </motion.div>
  );
}




const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};


export default About

