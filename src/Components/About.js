import React, { useState } from "react";
import pdf from "../resume.pdf";
function About(props) {
  if (props.data) {
    var {
      name,
      image,
      bio,
      street,
      city,
      state,
      zip,
      phone,
      email,
      resumeDownload,
    } = props.data;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={`images/${image}`}
            alt="Muazzam Nashat profile pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <a href={`tel:${phone}`}>Call me at {phone}</a>
                <br />
                <a href={`mailto:${email}`}>{email}</a>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={pdf} target="_blank" className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
