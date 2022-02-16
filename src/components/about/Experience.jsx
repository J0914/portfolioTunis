import React from "react";

const experienceContent = [
  {
    year: "   2021 - Present",
    position: "Instructional Assistant",
    compnayName: "App Academy",
    details: `I'm currently working as part of a team teaching cohorts of 60+ students with a fullstack project created every 4 weeks using React/Redux for the frontend and Express.js/PostgreSQL for the backend and database. Heavy focus on Functional components and React hooks
    as well as transitioning from Class components over to functional. I've Gained valuable experience debugging and mentoring.`,
  },
  {
    year: "2019 - 2021",
    position: "Customer Service Representative",
    compnayName: "Vroom",
    details: `Utilizing SalesForce, Five9, Octa, and Zendesk software, professionally assisted inbound callers with their concerns,
    maintaining a 90% or higher quality score.`,
  },
  {
    year: "2018 - 2019",
    position: "Account Resolution Specialist",
    compnayName: "Intermedix",
    details: `Ensured payments were received within 60 days of initial submission of insurance claims and maintained a 95% success rate.
    Professionally and efficiently ensured accurate claim data by reaching out to patients directly and collaborating with
    insurance companies`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
