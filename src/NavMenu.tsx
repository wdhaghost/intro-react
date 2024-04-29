import { Link } from "react-router-dom";

function NavMenu() {
  return (
    <ul>
      <li>
        <Link className="link" to={"datamanagement"}>
          {" "}
          Gestion de la donnée{" "}
        </Link>
      </li>
      <li>
        <Link className="link" to={"learnUseState"}>
          {" "}
          Utilisation des useStates{" "}
        </Link>
      </li>
      <li>
        <Link className="link" to={"useContext"}>
          {" "}
          Utilisation de useContext{" "}
        </Link>
      </li>
      <li>
        <Link className="link" to={"useEffect"}>
          {" "}
          Utilisation de useEffect{" "}
        </Link>
      </li>
      <li>
        <Link className="link" to={"useAPI"}>
          {" "}
          Appel à une API{" "}
        </Link>
      </li>
    </ul>
  );
}

export default NavMenu;
