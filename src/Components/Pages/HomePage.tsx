import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import CircleArrowIcon, { ArrowDirecton } from "../CircleArrowIcon";

const HomePage = (): JSX.Element => {
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      const layouts = document.querySelectorAll("div.layout");
      const currentLayout = [...layouts]
        .filter((layout) => layout.getBoundingClientRect().top <= 0)
        .pop();

      const currentSectionIndex = currentLayout
        ? [...layouts].indexOf(currentLayout)
        : 0;

      switch (currentSectionIndex) {
        case 0:
          document.body.style.backgroundColor = "#ffffff";
          break;
        case 1:
          document.body.style.backgroundColor = "#c3f0c8";
          break;
        case 2:
          document.body.style.backgroundColor = "#ffffff";
          break;
        case 3:
          document.body.style.backgroundColor = "#cccccc";
          break;
        default:
          document.body.style.backgroundColor = "#f4f4f4";
          break;
      }
    });
  }, []);

  return (
    <main>
      <div className="layout">
        <div className="intro">
          <section className="intro-section">
            <h1>Naveen Kumar</h1>
            <h3>Software Engineer</h3>
            <img
              src={require("../../Assets/Images/gojo-gif-2.gif")}
              alt="Broken"
              className="image--cover--mobile"
            />
            <RoughNotationGroup show={true}>
              <p>
                Hi there!, I'm Naveen, a{" "}
                <RoughNotation type="highlight" show={true} color="#fff176">
                  software engineer
                </RoughNotation>{" "}
                based in India, and a CS grad from IIIT Vadodara.
              </p>
              <p>
                I am currently working as a Software Engineer, with a knack of
                problem solving and building solutions that create real-world
                impact. I have an interest in competitve programming,{" "}
                <RoughNotation type="box" show={true} color="#4a148c">
                  distributed systems
                </RoughNotation>{" "}
                , and exploring some interesting domains like web3.0, computer
                networking.
              </p>
              <p>
                While I am not coding, you can find me{" "}
                <RoughNotation type="circle" show={true} color="#f57f17">
                  binge-watching anime
                </RoughNotation>
                , finding my next travel destination. Also did I tell you that I
                am a foodie, and we can catch anytime if you want to explore
                different food and desserts along with me.
              </p>
            </RoughNotationGroup>
          </section>
          <section className="profile-pic-section">
            <img
              src={require("../../Assets/Images/kaisen.jpg")}
              alt="Broken"
              className="image--cover"
            />
          </section>
        </div>
        <span>
          <a
            className="status"
            href="/Naveen_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="status__flex">
              <div className="status__light">
                <div className="status__light__ring"></div>
                <div className="status__light__led"></div>{" "}
              </div>
              <div className="status__message underline-link">
                <p>Hire me. My resume!</p>
              </div>
            </div>
          </a>
        </span>
      </div>
      <div className="layout">
        <div className="experience">
          <section className="experience-section">
            <h1>Experience</h1>
            <section className="experience-section-element">
              <div className="company-experience-section">
                <img
                  src={require("../../Assets/Images/Amazon.jpg")}
                  alt="Broken"
                  className="image--logo"
                />
                <div className="company-info">
                  <h2>Amazon</h2>
                  <div className="company-info-subheading">
                    <h3>Software Development Engineer - 1</h3>
                    <div className="year-info">
                      <h3>July 2022 - Mar 2023</h3>
                    </div>
                  </div>
                  <div className="company-experience">
                    <p>
                      Part of ADFS(Amazon Distribution and Fulfilment Solutions)
                      team, where I built a tool that provides the warehouse
                      managers with a heat map visualisation of the warehouse
                      space consumption and get detailed data of available and
                      occupied space in real time for different storage
                      containers.
                    </p>
                    <p>
                      Built the design and tech strategy for Feature Gating and
                      Experimentation(A/B Testing), that allows teams to
                      independently develop, experiment on a set of defined
                      metrics and release new features to customers.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="experience-section-element">
              <div className="company-experience-section">
                <img
                  src={require("../../Assets/Images/Amazon.jpg")}
                  alt="Broken"
                  className="image--logo"
                />
                <div className="company-info">
                  <h2>Amazon</h2>
                  <div className="company-info-subheading">
                    <h3>Software Development Engineer Intern</h3>
                    <div className="year-info">
                      <h3>Jan 2022 - June 2022</h3>
                    </div>
                  </div>
                  <div className="company-experience">
                    <p>
                      Part of ADFS(Amazon Distribution and Fulfilment Solutions)
                      team, where I built and delivered the frontend of the
                      product, based on a micro-frontend architecture and
                      perform API integrations that helps associates at
                      distribution centers to easily research, update and delete
                      the items from inventories.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="experience-section-element">
              <div className="company-experience-section">
                <img
                  src={require("../../Assets/Images/MathWorks.jpg")}
                  alt="Broken"
                  className="image--logo"
                />
                <div className="company-info">
                  <h2>MathWorks</h2>
                  <div className="company-info-subheading">
                    <h3>Software Development Engineer Intern</h3>
                    <div className="year-info">
                      <h3>May 2021 - July 2021</h3>
                    </div>
                  </div>
                  <div className="company-experience">
                    <p>
                      Part of Platform Solutions team, where I worked upon
                      creating a Platform Testing App for Windows OS responsible
                      for running tests of all the MathWorks products(used by
                      5,000,000+ users) and generating reports of crash logs
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="experience-section-element">
              <div className="company-experience-section">
                <img
                  src={require("../../Assets/Images/CodingNinjas.jpg")}
                  alt="Broken"
                  className="image--logo"
                />
                <div className="company-info">
                  <h2>Coding Ninjas</h2>
                  <div className="company-info-subheading">
                    <h3>Problem Setter Intern</h3>
                    <div className="year-info">
                      <h3>May 2021 - July 2021</h3>
                    </div>
                  </div>
                  <div className="company-experience">
                    <p>
                      Worked as a problem setter intern and developed content
                      and problems for 2 courses based on Data Structures and
                      Algorithms. Later worked as blog manager, led a team of 15
                      folks to create blogs on CS fundamentals.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
      <div className="layout">
        <div className="achievements">
          <section className="achievements-section">
            <h1>Achievements</h1>
            <section className="achievements-section-element">
              <div className="achievements-section-heading">
                <img
                  src={require("../../Assets/Images/ICPC.jpg")}
                  alt="Broken"
                  className="image--logo"
                />
                <div className="organisation-info">
                  <h2>ICPC Regionalist</h2>
                  <a
                    href="https://icpc.global/ICPCID/SI6B8VKKJS8D"
                    className="credential-info-mobile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3>View credential</h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      id="open-in-new"
                      className="open-in-new-svg"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                    </svg>
                  </a>
                  <p>
                    Qualified for Asia-Amritapuri Regionals 2020 with an AIR of
                    <b> 145</b> out of 3505 teams.
                  </p>
                </div>
                <a
                  href="https://icpc.global/ICPCID/SI6B8VKKJS8D"
                  className="credential-info"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>View credential</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    id="open-in-new"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                  </svg>
                </a>
              </div>
            </section>
            <section className="achievements-section-element">
              <div className="achievements-section-heading">
                <img
                  src={require("../../Assets/Images/Google.jpg")}
                  alt="Broken"
                  className="image--logo"
                />
                <div className="organisation-info">
                  <h2>Google Coding Competitions</h2>
                  <a
                    href="https://drive.google.com/file/d/1nDykwmcR7lOsQGtPOtJe-LTfJhXZSEx2/view?usp=share_link"
                    className="credential-info-mobile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3>View credential</h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      id="open-in-new"
                      className="open-in-new-svg"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                    </svg>
                  </a>
                  <p>
                    Secured AIR of <b>281</b> with 9,335,469 points in Google
                    Hash Code.
                  </p>
                  <p>
                    Secured Global ranks of <b>189</b> and <b>435</b> in Round
                    F(2021) and D(2021).
                  </p>
                </div>
                <a
                  href="https://drive.google.com/file/d/1nDykwmcR7lOsQGtPOtJe-LTfJhXZSEx2/view?usp=share_link"
                  className="credential-info"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>View credential</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    id="open-in-new"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                  </svg>
                </a>
              </div>
            </section>
            <section className="achievements-section-element">
              <div className="achievements-section-heading">
                <img
                  src={require("../../Assets/Images/Facebook.jpg")}
                  alt="Broken"
                  className="image--logo"
                />
                <div className="organisation-info">
                  <h2>Facebook Hacker Cup</h2>
                  <a
                    href="https://drive.google.com/file/d/1HdJoPMXbCTUiUobthaHYqJyWaK0E0Lvm/view?usp=sharing"
                    className="credential-info-mobile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3>View credential</h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      id="open-in-new"
                      className="open-in-new-svg"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                    </svg>
                  </a>
                  <p>
                    Qualified till Round 2 and secured a Global rank of
                    <b> 943</b>(India Rank: <b>69</b>) among 34,585
                    participants.
                  </p>
                </div>
                <a
                  href="https://drive.google.com/file/d/1HdJoPMXbCTUiUobthaHYqJyWaK0E0Lvm/view?usp=sharing"
                  className="credential-info"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>View credential</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    id="open-in-new"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                  </svg>
                </a>
              </div>
            </section>
          </section>
        </div>
      </div>
      <div className="layout">
        <div className="projects">
          <section className="projects-section">
            <h1>Projects</h1>
            <section className="projects-section-element">
              <div className="project-card">
                {/* <div className="project-top"> */}
                {/* <div className="project-links">
                    <a
                      href="https://github.com/naveen19991124"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="github"
                    >
                      <img
                        src={require("../../Assets/Images/Social/github.png")}
                        alt="github"
                        width={36}
                        height={36}
                      />
                    </a>
                    <a href="#">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        // size="30"
                        aria-hidden="true"
                        focusable="false"
                        height="32"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                        className="project-link-demo"
                      >
                        <path d="M405.34 405.332H106.66V106.668H240V64H106.66C83.191 64 64 83.197 64 106.668v298.664C64 428.803 83.191 448 106.66 448h298.68c23.469 0 42.66-19.197 42.66-42.668V272h-42.66v133.332zM288 64v42.668h87.474L159.999 322.133l29.866 29.866 215.476-215.47V224H448V64H288z"></path>
                      </svg>
                    </a>
                  </div> */}
                {/* <div className="project-img">
                    <img
                      src={require("../../Assets/Images/Icons/shop.png")}
                      alt="shop-broken"
                      width={36}
                      height={36}
                    />
                  </div> */}
                {/* </div> */}
                <div className="project-desc">
                  <h2>E-Commerce Web App</h2>
                  <div className="project-stack">
                    <p>React.js | Node.js | Sequelize</p>
                  </div>
                  <p>
                    Features of selecting products in different categories and
                    placing orders and offered a virtual payment system (Using
                    STRIPE)
                  </p>
                </div>
                <div className="project-links">
                  <div>
                    <a
                      href="https://github.com/only-2/Ecommerce-app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="redirect-project-link"
                    >
                      <p>Github Link</p>
                      <CircleArrowIcon arrowDirection={ArrowDirecton.RIGHT} />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://my-flipkart.surge.sh/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="redirect-project-link"
                    >
                      <p>Demo Link</p>
                      <CircleArrowIcon arrowDirection={ArrowDirecton.RIGHT} />
                    </a>
                  </div>
                </div>
                {/* <div className="project-link-button">
                  <div className="project-link-button-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                  </div>
                  <div className="project-link-label-github">
                    Open in Studio
                  </div> */}
                {/* <div className="project-link-label-demo">Show demo</div> */}
                {/* </div> */}
              </div>
            </section>
          </section>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
