import React from "react";
import Title from "../Layouts/Title";
function Resume() {
  return (
    <>
      <section
        id="resume"
        className="w-full py-10 border-b-[1px] border-b-black"
      >
        <div className="flex justify-center items-center text-center">
          <Title title="My Front End Skills are :" des="My Skills" />
        </div>
        <div className="btn-box">
          <a href="https://api39w.ilovepdf.com/v1/download/qzj1t1bw2l1zAx15Asmjhq5ljtvpdctc19mj5w5g74bs6yk5fxrbnw94v2zskld3qt88c79dxksw0Avkz0lg7pp2n32qlv5py760nbd68mvjkv9ck9wzrtrzsnlpxlAf09kwwp486xyp4my2w1xh35qqgx53qdyw1fw0x1nb531439r15mg1">
            <button className="button">
              <p className="button-text">Download Resume</p>
            </button>
          </a>
        </div>
        <div style={{ padding: "12px" }}>
          <ol className="text-base font-bodyFont leading-6 tracking-wide">
            <li>
              Generating Static and Dynamic web pages using HTML5, CSS3, JSX and
              ES6(javascript).
            </li>
            <li>
              GIT version Control, tracking changes with add, commit, pull,
              branching, merging and handling merge conflicts.
            </li>
            <li>
              Good Knowledge of State Management with React-Redux /RTK and other
              React Development Tools eg: HockeyApp,Bitrise & ESLint.
            </li>
            <li>React Hooks eg: useState,useRef,useEffect etc.</li>
            <li>Working with Graphql, Fetch API and Axios.</li>
            <li>Node + NPM packages.</li>
            <li>
              Javascript fundamentals eg: Arrays, Functions,Classes, Objects,
              DOM manipulation & Events Handling.
            </li>
            <li>
              Writing Readable codes and Reusable components, Deploying
              Responsive Web Applications.
            </li>
            <li>
              Creating fast and interactive React Applications with latest UI
              kits eg: Material UI, Ant designs, Chakra UI.
            </li>
            <li>Good Knowledge of Content Management Systems eg: GraphCMS.</li>
            <li>
              Excellent communication and Problem-solving/Debugging skills.
            </li>
            <li>Experience Working with Firebase Store and Authentication.</li>
          </ol>
        </div>
      </section>
    </>
  );
}

export default Resume;
