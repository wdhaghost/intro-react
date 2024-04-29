import * as React from "react";
import Student from "../../Models/Student";
import { CopyBlock, dracula } from "react-code-blocks";
import CodeToShow from "./CodeToShow";
function DataManagement() {
  const codeToShow = CodeToShow;
  var nombre :number = 400
  var text :string =""

  const StudentTs :Student ={
    Lastname:"Kujo",
    Firstname:"Jotaro",
    Class:"A3 Dev"
  }
  return (
    <div>
      <h2>Gestion de la donnée</h2>

      <div className="description">
        Utiliser des accolades pour afficher de la data
        <p>{StudentTs.Firstname} {StudentTs.Lastname} {StudentTs.Class}</p>
      </div>
      <hr />
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

export default DataManagement;
