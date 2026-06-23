import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title:'Legalque – AI Legal Assistant',
    tech:'Python, RAG, LegalBERT, Gemini 2.5, Sentence Transformers',
    desc:'Built an AI-powered legal assistant using Retrieval Augmented Generation. Integrated LegalBERT for legal query understanding and Reciprocal Rank Fusion for improved retrieval.',
    features:['Legal Query Classification','Semantic Search','RAG Pipeline','AI Response Generation']
  },
  {
    title:'Bank Loan Prediction System',
    tech:'Python, CatBoost, XGBoost, MLP, Federated Learning, Flask',
    desc:'Developed a privacy-preserving loan approval prediction system with explainable AI using LIME and a Flask web app for prediction.',
    features:['Loan Risk Prediction','Explainable AI','Secure Learning','Web Dashboard']
  },
  {
    title:'Shop INDIA – E-commerce Platform',
    tech:'Spring Boot, Java, MySQL, HTML, CSS, JavaScript',
    desc:'Developed a full-stack e-commerce application with CRUD operations, Spring Security, and role-based access control.',
    features:['Authentication','Product Management','Shopping Workflow','Secure APIs']
  }
]

export default function Projects(){
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold">Projects</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {projects.map((p, i)=> (
          <motion.div key={i} whileHover={{scale:1.02}} className="glass p-4 rounded-xl">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-slate-300 mt-1">{p.tech}</p>
            <p className="text-sm text-slate-400 mt-2">{p.desc}</p>
            <ul className="mt-3 list-disc list-inside text-slate-400 text-sm">
              {p.features.map((f, idx)=>(<li key={idx}>{f}</li>))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
