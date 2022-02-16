import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-linkedin",
    link: "www.linkedin.com/in/jordyn-sechrist-87710b207",
  },
  { iconName: "fa fa-github", link: "https://github.com/J0914" },
  {
    iconName: "fa fa-angellist",
    link: "https://angel.co/u/jordyn-sechrist",
  },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
