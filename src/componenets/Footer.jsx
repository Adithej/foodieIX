import "./Footer.css";
import Ix from "../assets/ix.png";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-col">
        <h4>credits</h4>
        <img src={Ix} alt="syndiogo logo" width="250px" height="100px" />
        <ul>
          <li>
            <a target="#" href="https://docx.syndigo.com/">
              syndiogo
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>products</h4>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Analytics</a>
          </li>
          <li>
            <a href="#">features</a>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>company</h4>
        <ul>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">legal</a>
          </li>
          <li>
            <a href="#">contact us</a>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>folow us</h4>
        <div className="links">
          <a href="#">
            <FaGithub />
          </a>
          <a href="#">
            <FaXTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
