import React from "react";

const skillsContent = [
  { skillClass: "p50", skillPercent: "50", skillName: "HTML" },
  { skillClass: "p75", skillPercent: "75", skillName: "JAVASCRIPT" },
  { skillClass: "p40", skillPercent: "40", skillName: "CSS" },
  { skillClass: "p50", skillPercent: "50", skillName: "PYTHON" },
  { skillClass: "p70", skillPercent: "70", skillName: "REDUX" },
  { skillClass: "p60", skillPercent: "60", skillName: "SEQUELIZE" },
  { skillClass: "p65", skillPercent: "65", skillName: "EXPRESS.JS" },
  { skillClass: "p70", skillPercent: "70", skillName: "REACT" },
  { skillClass: "p50", skillPercent: "50", skillName: "SQLAlchemy" },
  { skillClass: "p60", skillPercent: "60", skillName: "NODE.JS" },
  { skillClass: "p40", skillPercent: "40", skillName: "FLASK" },
  { skillClass: "p75", skillPercent: "75", skillName: "POSTGRESQL" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
