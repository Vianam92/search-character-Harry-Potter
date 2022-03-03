import logo from "../images/title-logo.png";
import useSound from "use-sound";
import music from "../music/Harry Potter Theme Song (FULLBULLA.ORG).mp3";

const Header = () => {
  const BoopButton = () => {
    const [play ,{stop}] = useSound(music);
    return (
      <>
      <div className="header__btn"><button onClick={()=> play()} className="header__btn--boton">ON</button>
        <button onClick={()=>stop()} className="header__btn--boton">OFF</button></div>
        
      </>
    );
  };
  return (
    <header className="header">
      {BoopButton()}
      <div className="header__image">
        <img src={logo} className="header__image--logo" alt="Harry Potter" />
      </div>
    </header>
  );
};

export default Header;
