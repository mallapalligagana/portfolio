import React from 'react'

export default function Experience(){
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold">Experience</h2>
      <div className="mt-6 grid gap-4">
        <div className="glass p-4 rounded-md">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Intern – Full Stack Web Development Training</h3>
              <p className="text-sm text-slate-300">RineX • Nov 2022 – Jan 2023</p>
            </div>
          </div>
          <ul className="mt-3 list-disc list-inside text-slate-400">
            <li>Learned HTML, CSS, Bootstrap and frontend development.</li>
            <li>Designed and developed a restaurant management website frontend.</li>
            <li>Worked on responsive UI development and web design principles.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
