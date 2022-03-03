import { Link } from "react-router-dom";
import harry from "../images/harry.jpeg";

const CharacterCard = ({ house }) => {
  const translateSpecies = () => {
    if (house.species === "human") {
      return "Humano";
    } else if (house.species === "half-giant") {
      return "Medio gigante";
    } else if (house.species === "werewolf") {
      return "Hombre lobo";
    } else if (house.species === "ghost") {
      return "Fantasma";
    }
  };
  return (
    <Link to={`/character/${house.id}`}>
      <img
        className={`section-${house.house}__list--img`}
        src={
          house.image === ""
            ? harry
            : house.image
        }
        alt={`Foto de ${house.name}`}
      />
      <h3 className={`section-${house.house}__list--h3`}>{house.name}</h3>
      <p className={`section-${house.house}__list--text`}>
        {translateSpecies()}
      </p>
    </Link>
  );
};

export default CharacterCard;
