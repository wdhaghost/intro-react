
import StudentText from "./StudentText"
export default function SecondaryComponent (props:any)  {
    return (
    <ul>
        <li> Nom de l'étudiant: {props.Lastname?props.Lastname:"non rensignéx"}</li>
        <li> Prénom de'étudiant: {props.Firstname?props.Firstname:"Non rensigné"}</li>
        <li> Classe de l'étudiant: {props.Class?props.Class:"Non rensigné"}</li>
        <StudentText {...props}/>
    </ul>
)
}