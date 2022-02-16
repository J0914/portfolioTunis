import React from "react";

const educationContent = [
  {
    year: "2021",
    degree: "Certificate of Completion",
    institute: "App Academy",
    details: `Over the course of 8 months, attended this bootcamp style software engineering course where I learned to code in Javascript and Python - created 4 projects during my time in this program (see portfolio tab)`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
