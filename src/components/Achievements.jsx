import React from 'react'

const items = [
  'Pursuing M.Tech at VIT',
  'Built AI-powered Legal Assistant using RAG',
  'Developed Full Stack E-commerce Platform',
  'Experience in AI, ML, and Web Development'
]

export default function Achievements(){
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold">Achievements</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {items.map((a, i)=> (
          <div key={i} className="glass p-4 rounded-md">{a}</div>
        ))}
      </div>
    </div>
  )
}
