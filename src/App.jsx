import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Loading from './components/Loading'

export default function App() {
  return (
    <div className="min-h-screen text-slate-100">
      <Loading />
      <Navbar />
      <main className="px-6 md:px-16 lg:px-28">
        <section id="home" className="pt-24"><Hero /></section>
        <section id="about" className="pt-24"><About /></section>
        <section id="education" className="pt-24"><Education /></section>
        <section id="experience" className="pt-24"><Experience /></section>
        <section id="projects" className="pt-24"><Projects /></section>
        <section id="skills" className="pt-24"><Skills /></section>
        <section id="achievements" className="pt-24"><Achievements /></section>
        <section id="contact" className="pt-24 pb-24"><Contact /></section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
