import React from 'react'
import {BallCanvas} from "./canvas"
import { technologies } from '../constants'
import { motion } from 'framer-motion'

const Tech = () => {
  return (
    <motion.div variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }} className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
      <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology)=> (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
      </div>
    </motion.div>
  )
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


export default Tech