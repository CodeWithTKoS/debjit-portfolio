import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:debjitdas50@gmail.com" data-cursor="disable">
                debjitdas50@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>+91 6289114793</p>
            <h4>Education</h4>
            <p>B.Tech - Information Technology, MSIT (2021-2025)</p>
            <p>CGPA: 8.45/10</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/debjit-arch"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github Work <MdArrowOutward />
            </a>
            <a
              href="https://github.com/CodeWithTKoS"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github Personal <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/tkos007"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Debjit Das</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
