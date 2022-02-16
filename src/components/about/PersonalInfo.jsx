import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Jordyn" },
  { meta: "last name", metaInfo: "Sechrist" },
  { meta: "Age", metaInfo: "34 Years" },
  { meta: "Location", metaInfo: "Oklahoma" },
  { meta: "phone", metaInfo: "(580)756-0376" },
  { meta: "Email", metaInfo: "jordynsechrist@gmail.com" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
