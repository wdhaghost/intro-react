import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export default function Card(){
    const mode=useContext<string>(ThemeContext)
    return(
        <div className={mode} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aliquam, distinctio nam cupiditate mollitia quisquam. Dolorem atque nam fugit, incidunt est dicta quibusdam recusandae saepe tenetur, natus odit placeat cupiditate.
        </div>
    )
}