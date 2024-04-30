import React, {useEffect, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import CodeToShow from "./CodeToShow";

function LearnUseEffect() {
  const [action,setAction]=useState("Test")
  useEffect(()=>{
    if (action=="Mauvais") {
      alert("va prier !!!")
    }
      console.log(action)

  },[action])
  const codeToShow = CodeToShow;
  return (
    <div>
      <h2>Utilisation des useEffect</h2>

      <div className="description">
      
      </div>
      <hr />
      <button onClick={()=>{
        setAction("Bon")
      }}>Bon</button>
      <button onClick={()=>{
        setAction("Neutre")
      }}>Neutre</button>
      <button onClick={()=>{
        setAction("Mauvais")
      }}>Mauvais</button>
      <div className="codeBlock">
        <CopyBlock
          language="tsx"
          text={codeToShow.code1}
          showLineNumbers={true}
          theme={dracula}
          wrapLongLines={true}
          codeBlock
        />
      </div>
    </div>
  );
}

export default LearnUseEffect;
