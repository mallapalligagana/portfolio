import React from 'react'

export default function Contact(){
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-semibold">Get in touch</h2>
      <p className="mt-4 text-slate-400 max-w-2xl mx-auto">If you'd like to connect, feel free to reach out via email or LinkedIn.</p>
      <div className="mt-8 glass p-6 rounded-3xl border border-white/10 shadow-2xl">
        <p className="text-slate-300">Email: <a href="mailto:mallapalligagana@gmail.com" className="text-cyan-300">mallapalligagana@gmail.com</a></p>
        <p className="text-slate-300 mt-2">Phone: +91 6302974049</p>
        <p className="text-slate-300 mt-2">LinkedIn: <a href="https://www.linkedin.com/in/m-v-gagana-39a2912a5" target="_blank" rel="noreferrer" className="text-cyan-300">linkedin.com/in/m-v-gagana-39a2912a5</a></p>
      </div>
    </div>
  )
}
