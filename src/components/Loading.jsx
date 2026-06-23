import React, {useEffect, useState} from 'react'

export default function Loading(){
  const [show, setShow] = useState(false)
  useEffect(()=>{ setShow(true); const t=setTimeout(()=>setShow(false),700); return ()=>clearTimeout(t) }, [])
  if(!show) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-28 h-28 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400 animate-pulse flex items-center justify-center text-black font-bold">MV</div>
    </div>
  )
}
