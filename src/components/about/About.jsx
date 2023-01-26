import React from "react";
import "./about.css";
import ME from "../../assets/sandeep.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>10+ in India</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
          </div>

          <p className="">
            I am a highly skilled and versatile software engineer who has
            expertise in both front-end and back-end development. strong
            understanding of web development technologies such as HTML, CSS,
            JavaScript, BootStrap, Tailwind CSS and frameworks like ReactJs, and NodeJs. With
            their ability to work on both the client and server side of an
            application, I am able to design, develop and maintain complete web
            applications.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
