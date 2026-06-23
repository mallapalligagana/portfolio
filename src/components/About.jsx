import React from 'react'
import { motion } from 'framer-motion'

const items = ['Problem Solving','Team Collaboration','AI Development','Full Stack Development','Machine Learning']

export default function About(){
  return (
    <div className="max-w-4xl mx-auto">
      <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} className="text-3xl font-semibold">About</motion.h2>
      <motion.p className="mt-4 text-slate-300">Self-driven Information Science graduate currently pursuing M.Tech in Computer Science and Engineering at VIT. Strong foundations in software development, artificial intelligence, machine learning, and scalable web applications. Passionate about problem-solving, innovation, and continuous learning.</motion.p>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
        {items.map(i=> (
          <div key={i} className="glass p-3 rounded-md text-center">{i}</div>
        ))}
      </div>
    </div>
  )
}
