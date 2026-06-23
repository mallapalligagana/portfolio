import React from 'react'
import { motion } from 'framer-motion'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
]

export default function Navbar(){
  return (
    <motion.header initial={{opacity:0}} animate={{opacity:1}} className="fixed top-4 left-0 right-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 glass py-2 rounded-xl">
        <a href="#home" className="font-semibold text-lg">M V Gagana</a>
        <nav className="hidden md:flex gap-4 items-center">
          {links.map(l=> (
            <a key={l.id} href={`#${l.id}`} className="text-slate-300 hover:text-white transition">{l.label}</a>
          ))}
        </nav>
        <div className="md:hidden">
          <button className="p-2">Menu</button>
        </div>
      </div>
    </motion.header>
  )
}
