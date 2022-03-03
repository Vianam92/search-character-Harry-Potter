import "../styles/Footer.scss";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
      const handleClick = () => {
        scrollToTop();
      };
 return(<footer className="footer">
    <small className="footer__copy">&copy; 2022 Vianam92 </small>
    <i className="fas fa-arrow-up footer__icon" onClick={handleClick}></i>
  </footer>) ;
};

export default Footer;
