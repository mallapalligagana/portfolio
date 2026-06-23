import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Github, Mail } from 'lucide-react'
import profilePhoto from '../assets/profile.svg'

export default function Hero(){
  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
      <motion.div initial={{x:-40, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.7}}>
        <p className="text-sm text-slate-400">Hello, I'm</p>
        <h1 className="text-4xl md:text-6xl font-bold">M V Gagana</h1>
        <p className="mt-2 text-xl text-slate-300">Full Stack Developer | AI & Machine Learning Enthusiast</p>
        <p className="mt-4 text-slate-400 max-w-xl">M.Tech Computer Science student passionate about building intelligent systems, scalable web applications, and AI-powered solutions.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#projects" className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-cyan-400 text-black font-medium">View Projects</a>
          <a href="/resume.pdf" download className="px-4 py-2 rounded-md glass border">Download Resume</a>
          <a href="#contact" className="px-4 py-2 rounded-md glass border">Contact Me</a>
        </div>
        <div className="mt-6 flex gap-4 items-center text-slate-200">
          <a href="https://www.linkedin.com/in/m-v-gagana-39a2912a5/"aria-label="LinkedIn"><Linkedin/></a>
          <a href="https://github.com/mallapalligagana" aria-label="GitHub"><Github /></a>
          <a href="mailto:mallapalligagana@gmail.com" aria-label="Email"><Mail /></a>
        </div>
      </motion.div>
      <motion.div initial={{x:40, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.8}} className="flex items-center justify-center">
        <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-500 to-cyan-400 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/15" />
          <img src={"gagana_imagee.jpeg"} alt="M V Gagana" className="w-full h-full object-cover" />
        </div>
      </motion.div>
    </div>
  )
}
