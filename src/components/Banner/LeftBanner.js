import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';
const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["A Front End Developer", "An Interactive UI developer", "A React Developer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  })
  return (
    <div>
      <div className="w-full lgl:w-1/2 flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
          <h1 className="text-6xl font-bold text-white">
            Hi, I'm <span className="text-designColor capitalize">ZUMA</span>
          </h1>
          <h2 className="text-2xl font-bold text-white">
            <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide"
            style={
              { padding: '5px' }
            }>
            A good User Interactive website attracts the right kind of visitors, guide them to the main services or products you offer and collects contact details for future on going relations.


          </p>
        </div>

        <Media />
      </div>
    </div>
  )
}

export default LeftBanner
