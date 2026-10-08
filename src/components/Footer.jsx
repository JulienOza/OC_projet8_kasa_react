import kasaLogo from "../assets/kasa-svg-2.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <img src={kasaLogo} alt="Kasa" className="site-footer__logo" />
      <p className="site-footer__copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
