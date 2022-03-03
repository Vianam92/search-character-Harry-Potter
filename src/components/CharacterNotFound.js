import { Link } from "react-router-dom";
import "../styles/CharacterNotFound.scss";

const CharacterNotFound = () =>{
return (
    <section className="section-found">
        <Link to="/" className="section-found__link">Volver Atrás</Link>
        <h3 className="section-found__title">Personaje no encontrado</h3>
    </section>
)
};

export default CharacterNotFound;