import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Consultants Factory</h5>
              </div>
              <h3>Oct 2025 - Present</h3>
            </div>
            <p>
              Design and maintain CI/CD pipelines (Jenkins) to automate build, test, and deployment workflows. Develop and maintain Java Spring Boot microservices using Spring Data JPA and Spring Security. Provision and configure AWS EC2 instances for server setup, application deployment, and monitoring. Manage cloud deployments across AWS (EC2, VPC, DocumentDB, Amplify) and integrate microservices via Eureka Naming Server and API Gateway.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Software Development Intern</h4>
                <h5>Consultants Factory</h5>
              </div>
              <h3>Aug 2025 - Oct 2025</h3>
            </div>
            <p>
              Built a production-grade Governance, Risk, and Compliance (GRC) web application using React.js, Node.js (Express), and MongoDB, reducing manual compliance work by 80%. Implemented JWT-based authentication and role-based access control (RBAC); improved front-end performance by 30%. Developed REST APIs for data management, document verification, and auto-audit features with secure dashboards for policy management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
