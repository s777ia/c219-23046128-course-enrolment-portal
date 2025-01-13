import { useParams } from "react-router-dom";
import { getModules } from "../api";

export default function Module() {
  const { diplomaId, moduleId } = useParams()

  const { name, desc, lecturer } = getModules({ diplomaId, moduleId });

  return (
    <>
      <h3>{name}</h3>
      <p>{desc}</p>

      <h4>{lecturer.name}</h4>
      <span>
        {lecturer.title}
      </span>
    </>
  );
}
