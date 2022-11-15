import React from "react";
import resumeImg from "../../../src/images/Img-Resume.001.jpeg";
import pdf from "../../../src/images/Resume.pdf";

const Resume = () => {
  return (
    <div className='resume-image-wrapper'>
      <a target='_blank' rel='noreferrer' href={pdf}>
        Download Resume
      </a>
      <img className='resume-image' src={resumeImg} />
    </div>
  );
};
export default Resume;
