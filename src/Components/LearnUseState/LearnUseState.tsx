import React, { ChangeEvent, useEffect, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import CodeToShow from "./CodeToShow";
import Student from "../../Models/Student";
function LearnUseState() {
  const codeToShow = CodeToShow;
  const [student,setStudent]= useState<Student>({Id:4,Lastname:"Kujo",Firstname:"Jolyne",Class:"Stone Ocean"})
  const [selectState,setSelectState] = useState<boolean>(false)
  const handleChange=(input :string,event :any)=>{
    switch(input){

      case "Firstname":
      setStudent({...student,
        Firstname:event.target.value
      })
      break;
      case "Lastname":
      setStudent({...student,
        Lastname:event.target.value
      })
      break;
      case "Class":
        setStudent({...student,
          Class:event.target.value
        })
        break;

    }

  }
  const [count,setCount]=useState<number>(0)
  function handleClick(){
    setCount(count+1)
  }
  useEffect(()=>{
    if(selectState){
      alert("ouais ouais ouais")
    }
  },[selectState])
  return (
    <div>
      <h2>Utilisation des useState</h2>

      <div className="description">
       
      </div>
      <hr />
      <div>{count}</div>
      <button onClick={()=>handleClick()}>Incrémente</button>
      <input type="text" onChange={(event)=>handleChange("Lastname",event)} />
      <input type="text" onChange={(event)=>handleChange("Firstname",event)} />
      <input type="text" onChange={(event)=>handleChange("Class",event)} />
      <ul>
        <li>{student.Lastname} </li>
        <li>{student.Firstname} </li>
        <li>{student.Class} </li>
      </ul>
      <div>
        <p>{selectState?"case sélectionnée":"case non selectionné"}</p>
        <input type="checkbox" name="selection" id="selection" onChange={(e:any)=>{
          setSelectState(e.target.checked)
        }}/>
      </div>
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

export default LearnUseState;
