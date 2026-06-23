import React from 'react'

const edu = [
  {title:'Master of Technology (M.Tech)', inst:'Vellore Institute of Technology (VIT)', branch:'Computer Science and Engineering', dur:'July 2025 – Present', grade:'CGPA: 8.46'},
  {title:'Bachelor of Engineering (B.E.)', inst:'Dr. Ambedkar Institute of Technology', branch:'Information Science and Engineering', dur:'Aug 2020 – May 2024', grade:'CGPA: 8.63'},
  {title:'Higher Secondary (PUC)', inst:'Dr Academy', branch:'', dur:'', grade:'Percentage: 90.8%'},
  {title:'Secondary Education', inst:'Sri Chaitanya Techno School', branch:'', dur:'', grade:'CGPA: 9.8'}
]

export default function Education(){
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold">Education</h2>
      <div className="mt-6">
        {edu.map((e, idx)=> (
          <div key={idx} className="mb-6 flex items-start gap-4">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2" />
            <div>
              <h3 className="font-semibold">{e.title}</h3>
              <p className="text-sm text-slate-300">{e.inst} {e.branch && `• ${e.branch}`}</p>
              <p className="text-sm text-slate-400">{e.dur} {e.grade && `• ${e.grade}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
