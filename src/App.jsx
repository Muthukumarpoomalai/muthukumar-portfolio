
import './App.css'

function App() {
  return (
    <div className="portfolio">

      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Portfolio<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HOME / HERO */}
      <section id="home" className="hero">
        <img
  src="/Prof_photo.jpeg"
  alt="Muthukumar"
  className="profile-photo"
/>
        <div className="hero-content">

          <p className="hero-greeting">HELLO, I'M</p>

          <h1>
            Muthukumar<span>.</span>
          </h1>

          <h2>AI & Machine Learning Engineer</h2>

          <p className="hero-description">
            A 2026 Information Technology graduate passionate about
            building intelligent applications using Artificial Intelligence,
            Machine Learning and Generative AI.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">

        <p className="section-label">01 — ABOUT ME</p>

        <h2>
          Turning ideas into <span>intelligent solutions.</span>
        </h2>

        <p className="about-description">
          I'm a 2026 B.Tech Information Technology graduate
          passionate about Artificial Intelligence and Machine Learning.
          I enjoy building practical applications using Python,
          Machine Learning, Deep Learning and Generative AI.
          My focus is on developing reliable AI solutions that
          solve real-world problems.
        </p>

        <div className="about-details">

          <div>
            <h3>Education</h3>
            <p>B.Tech – Information Technology</p>
            <span>Graduate · 2026</span>
          </div>

          <div>
            <h3>Certification</h3>
            <p>Cloud Computing</p>
            <span>IIT Madras</span>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section className="skills-section" id="skills">

        <p className="section-label">02 — TECHNICAL EXPERTISE</p>

        <h2>
          Technologies I <span>work with.</span>
        </h2>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Programming</h3>
            <p>Python · SQL</p>
          </div>

          <div className="skill-card">
            <h3>Machine Learning</h3>
            <p>Scikit-learn · Pandas · NumPy</p>
          </div>

          <div className="skill-card">
            <h3>Deep Learning</h3>
            <p>TensorFlow · Keras · CNN</p>
          </div>

          <div className="skill-card">
            <h3>Generative AI</h3>
            <p>LLMs · RAG · LangChain · LangGraph</p>
          </div>

          <div className="skill-card">
            <h3>Data Visualization</h3>
            <p>Power BI · Matplotlib · Plotly</p>
          </div>

          <div className="skill-card">
            <h3>Development Tools</h3>
            <p>FastAPI · Streamlit · Git · GitHub</p>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects-section" id="projects">

        <p className="section-label">03 — SELECTED WORK</p>

        <h2>
          Projects I've <span>built.</span>
        </h2>

        <p className="project-intro">
          Practical AI and Machine Learning applications
          focused on solving real-world problems.
        </p>

        <div className="projects-grid">

          {/* PROJECT 1 */}
          <div className="project-card">

            <span className="project-number">
              01 / COMPUTER VISION
            </span>

            <h3>AI Quality Inspector</h3>

            <p>
              Developed a CNN-based image classification system
              to identify magnetic tile defects across six categories:
              Blowhole, Break, Crack, Fray, Free and Uneven.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>TensorFlow</span>
              <span>Keras</span>
              <span>Streamlit</span>
            </div>

            <a
  href="https://github.com/Muthukumarpoomalai/AI_Quality_Inspector"
  target="_blank"
  rel="noreferrer"
>
  View on GitHub ↗
</a>

          </div>

          {/* PROJECT 2 */}
          <div className="project-card">

            <span className="project-number">
              02 / AI MONITORING
            </span>

            <h3>RootIQ</h3>

            <p>
              Built an AI/ML-based monitoring assistant designed
              to detect application problems and help developers
              investigate potential causes.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>Machine Learning</span>
              <span>Data Analysis</span>
            </div>

            <a href="#contact" className="project-link">
              Discuss this project ↗
            </a>

          </div>

          {/* PROJECT 3 */}
          <div className="project-card">

            <span className="project-number">
              03 / GENERATIVE AI
            </span>

            <h3>RAG Document Q&A</h3>

            <p>
              Developed a document question-answering application
              using Retrieval-Augmented Generation and vector search
              to retrieve relevant information.
            </p>

            <div className="project-tags">
              <span>LangChain</span>
              <span>FAISS</span>
              <span>Gemini Embeddings</span>
            </div>

            <a href="#contact" className="project-link">
              Discuss this project ↗
            </a>

          </div>

          {/* PROJECT 4 */}
          <div className="project-card">

            <span className="project-number">
              04 / NATURAL LANGUAGE PROCESSING
            </span>

            <h3>Sentiment Analysis</h3>

            <p>
              Built an Amazon review sentiment classification
              pipeline using TF-IDF and Logistic Regression,
              achieving 91.86% accuracy.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>NLTK</span>
              <span>TF-IDF</span>
              <span>Scikit-learn</span>
            </div>

            <a href="#contact" className="project-link">
              Discuss this project ↗
            </a>

          </div>

          {/* PROJECT 5 */}
          <div className="project-card">

            <span className="project-number">
              05 / MACHINE LEARNING
            </span>

            <h3>Real Estate Price Prediction</h3>

            <p>
              Developed a machine learning application to predict
              real estate prices using property-related features.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>Pandas</span>
              <span>Scikit-learn</span>
            </div>

            <a href="#contact" className="project-link">
              Discuss this project ↗
            </a>

          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">

        <p className="section-label">04 — MY JOURNEY</p>

        <h2>Experience</h2>

        <div className="experience-card">

          <div className="experience-header">

            <div>
              <h3>Python Fundamentals Internship</h3>
              <p className="company-name">
                Nexvia Technologies
              </p>
            </div>

            <span className="experience-date">
              Oct 2026 – Nov 2026
            </span>

          </div>

          <p>
            Participating in a one-month internship program
            focused on Python fundamentals and practical
            programming concepts.
          </p>

        </div>
      </section>

      {/* EDUCATION & CERTIFICATIONS */}
      <section id="certifications" className="section">

        <p className="section-label">
          05 — MY QUALIFICATIONS
        </p>

        <h2>Education & Certifications</h2>

        <div className="certifications-grid">

          <div className="certification-card">
            <span className="certification-type">
              DEGREE
            </span>

            <h3>B.Tech – Information Technology</h3>

            <p>2026 Graduate</p>
          </div>

          <div className="certification-card">
            <span className="certification-type">
              CERTIFICATION
            </span>

            <h3>Cloud Computing</h3>

            <p>IIT Madras</p>
          </div>

          <div className="certification-card">
            <span className="certification-type">
              CERTIFICATION
            </span>

            <h3>Python Programming</h3>

            <p>Python Programming Certificate</p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">

        <p className="section-label">06 — GET IN TOUCH</p>

        <h2>Let's Work Together</h2>

        <p className="contact-description">
          I'm actively looking for opportunities in AI,
          Machine Learning and Generative AI.
          Feel free to connect with me.
        </p>

        <div className="contact-links">

          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=muthukumarpoomalai2022@gmail.com"
  target="_blank"
  rel="noreferrer"
>
  Email Me ↗
</a>
<a
  href="/Muthukumar_Resume.pdf"
  download="Muthukumar_Resume.pdf"
  className="primary-btn"
>
  Download Resume ↓
</a>

          <a
  href="https://www.linkedin.com/in/muthu-kumarmia/"
  target="_blank"
  rel="noreferrer"
>
  LinkedIn ↗
</a>

     <a
  href="https://github.com/Muthukumarpoomalai"
  target="_blank"
  rel="noreferrer"
>
  GitHub ↗
</a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="hero-footer">

        <span>PORTFOLIO — 2026</span>

        <span>BUILT WITH PASSION.</span>

      </footer>

    </div>
  )
}

export default App
