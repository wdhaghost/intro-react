import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import CodeToShow from "./CodeToShow";
function LearnUseRef() {
  const codeToShow = CodeToShow;
  const count =useRef<number>(0)
  const [page,setPage] =useState(0)

useEffect(()=>{},[page])


  return (
    <div>
      <h2>Utilisation des useRef</h2>

      <div className="description">
       
      </div>
      <hr />
      <div>{page}</div>
      <button onClick={()=>{
        count.current=count.current+1
        console.log(count.current)
        if(count.current>10){
          count.current=0
          setPage(page+1)
        }
      }}>Increment Count</button>
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

export default LearnUseRef;
