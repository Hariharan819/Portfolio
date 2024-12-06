import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[900px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BE in , Electronics and Communication Engineering"
            subTitle="Kongunadu college of Engineering & Technology(2020 - 2024)"
            result="8.07/10"
            des="As an ECE graduate, I gained a foundation in programming, software development, and problem-solving, alongside basic knowledge of electronics and communication systems."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Kalaimagal Matric Hr.Sec.School(2018 - 2020)"
            result="73/100"
            des="Secondary education focuses on foundational academic learning and skill development, covering key subjects such as Mathematics and Computer Science."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education