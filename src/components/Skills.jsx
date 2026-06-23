import React from 'react'
import { motion } from 'framer-motion'

const skillGroups = [
  {title:'Programming Languages', items:['C','C++','Java','Python','SQL','JavaScript']},
  {title:'Frontend', items:['HTML','CSS','Bootstrap','React']},
  {title:'Backend', items:['Spring Boot','Flask']},
  {title:'AI & ML', items:['Machine Learning','RAG','LegalBERT','Federated Learning','LIME','Gemini AI']},
  {title:'Database', items:['MySQL']},
  {title:'Tools', items:['Git','Linux','VS Code','Eclipse','Jupyter Notebook']}
]

export default function Skills(){
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold">Skills</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {skillGroups.map((g, idx)=>(
          <motion.div key={idx} className="glass p-4 rounded-lg">
            <h4 className="font-semibold">{g.title}</h4>
            <div className="mt-3 space-y-2">
              {g.items.map((s,i)=>(
                <div key={i}>
                  <div className="flex justify-between text-sm"><span>{s}</span><span className="text-slate-400">●</span></div>
                  <div className="w-full bg-white/5 h-2 rounded mt-1 overflow-hidden">
                    <motion.div initial={{width:0}} animate={{width: `${60 + (i*5)%40}%`}} className="h-2 bg-gradient-to-r from-purple-600 to-cyan-400" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
