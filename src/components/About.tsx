import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Software Engineer at CalVant with production expertise in Java Spring
          Boot, AWS, and the MERN stack. I focus on the full deployment
          lifecycle—managing <strong>CI/CD pipelines</strong> while hardening
          backends against <strong>DDoS attacks</strong> and conducting
          deep-dive <strong>security audits</strong>. From improving software
          performance by 50% to co-authoring 4 IEEE research papers on
          Physics-Informed Neural Networks, I am dedicated to building secure,
          scalable, and academically-backed technical solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
