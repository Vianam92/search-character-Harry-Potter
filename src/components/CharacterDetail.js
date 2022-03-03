import { Link } from "react-router-dom";
import slytheryn from "../images/slyderin.png";
import gryffindor from "../images/gryffindor.png";
import hupepuf from "../images/huplepuff.png";
import ravenclew from "../images/ravenclaw.png";
import heart from "../images/pulse.svg";
import CharacterNotFound from "./CharacterNotFound";
import "../styles/CharacterDetail.scss";

const CharacterDetail = ({ house }) => {
  const isImage = () => {
    if (house.house === "Gryffindor") {
      return gryffindor;
    } else if (house.house === "Slytherin") {
      return slytheryn;
    } else if (house.house === "Ravenclaw") {
      return ravenclew;
    } else if (house.house === "Hufflepuff") {
      return hupepuf;
    }
  };
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
  return house === undefined ? (
    <CharacterNotFound />
  ) : (
    <section className={`section--${house.house}`}>
      <Link to="/" className={`section--${house.house}__link`}>
        <i className="fa fa-angle-left"></i>Volver Atrás
      </Link>
      <h2 className={`section--${house.house}__title`}>
        Detalle del personaje
      </h2>
      <img
        className={`section--${house.house}__image`}
        src={
          house.image === ""
            ? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.letribunaldunet.fr%2Fwp-content%2Fuploads%2F2020%2F06%2Fharry-potter-2.jpg&f=1&nofb=1"
            : house.image
        }
        alt={`Foto de ${house.name}`}
        title={`Foto de ${house.name}`}
      />
      <h3 className={`section--${house.house}__detail`}>{house.name}</h3>
      <h3 className={`section--${house.house}__detail`}>
        {`Status: ${house.alive === true ? "Viva" : "Muerta"}`}{" "}
        <small className="small">
          {house.alive === true ? (
            <img className="live" src={heart} alt="heart live" />
          ) : (
            <i className="fas fa-skull"></i>
          )}
        </small>
      </h3>

      <h3
        className={`section--${house.house}__detail`}
      >{`Especie: ${translateSpecies()}`}</h3>
      <h3 className={`section--${house.house}__detail`}>{`Género: ${
        house.gender === "male" ? "Hombre" : "Mujer"
      }`}</h3>
      <h3
        className={`section--${house.house}__detail`}
      >{`Casa: ${house.house}`}</h3>
      <img
        src={isImage()}
        alt="casa"
        className={`section--${house.house}__img_house`}
      />
    </section>
  );
};

export default CharacterDetail;
