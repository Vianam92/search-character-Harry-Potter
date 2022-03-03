import CharacterCard from "./CharacterCard";
//import CharacterNotFound from "./CharacterNotFound";
import "../styles/CharacterList.scss";

const CharacterList = ({ character , valueHouse}) => {
  const characters = character.map((house) => {
    return (
      <li key={house.id} id={house.id} className={`section-${valueHouse}__list`}>
        <CharacterCard house={house}/>
      </li>
    );
  });
  return characters.length === 0 ? <p className="message">No hay ningún personaje que coincida con la palabra introducida.</p> : (
    <section className="section-character">
        <ul className={`section-${valueHouse}`}>{characters}</ul>
    </section>
  );
};

export default CharacterList;
