import { useState } from 'react'

function App() {
  const [color, setColor] = useState("lavender")

  return (
    <>
      <div className="w-full h-screen duration-200 text-black text-3xl font-mono"
      style={{backgroundColor:color}}>
      Choose a color of your liking
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
           <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 
            py-2 rounded-3xl">
            <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"red"}}
            >red</button>
            <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"green"}}
            >green</button>
            <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"blue"}}
            >blue</button>
            <button onClick={() => setColor("olive")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"olive"}}
            >olive</button>
            <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"purple"}}
            >purple</button>
            </div>
           </div>
           </div>
      </div>
    </>
  )
}

export default App
