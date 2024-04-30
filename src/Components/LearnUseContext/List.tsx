import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export default function List(){
    const mode=useContext<string>(ThemeContext)
    return(
        <ul className={mode} >f
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    )
}