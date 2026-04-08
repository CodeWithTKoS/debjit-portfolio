import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const PROJECTS = [
  {
    title: "Automatic Number Plate Recognition (ANPR) System",
    category: "AI-Powered Real-Time License Plate Detection",
    tools: "Python, YOLOv8, EasyOCR, OpenCV, Pandas, NumPy",
    image: "/images/placeholder.webp",
  },
  {
    title: "Football Match Video Analytics",
    category: "End-to-End Video Analytics Pipeline",
    tools: "Python, YOLOv8, OpenCV, Scikit-learn, K-Means, Optical Flow",
    image: "/images/placeholder.webp",
  },
  {
    title: "Governance, Risk, and Compliance (GRC) Application",
    category: "Production-Grade Full-Stack Web Application",
    tools: "React.js, Node.js (Express), MongoDB, JWT, RBAC, Context API",
    image: "/images/placeholder.webp",
  },
  {
    title: "IEEE Research Publications (4)",
    category: "Physics-Informed Neural Networks Research",
    tools: "Time-Dependent Eikonal, Burgers' Equation, Allen-Cahn, IoT-based UAV",
    image: "/images/placeholder.webp",
  },
  {
    title: "Java Spring Boot Microservices",
    category: "Enterprise Backend Services with AWS Cloud",
    tools: "Java, Spring Boot, Spring Security, Spring Data JPA, AWS EC2, Jenkins",
    image: "/images/placeholder.webp",
  },
] as const;

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const goToPrev = useCallback(() => {
    goToSlide((currentIndex === 0 ? PROJECTS.length : currentIndex) - 1);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    goToSlide((currentIndex === PROJECTS.length - 1 ? 0 : currentIndex) + 1);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {PROJECTS.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {PROJECTS.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
