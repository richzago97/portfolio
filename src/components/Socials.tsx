"use client";

import { RiLinkedinFill, RiGithubFill, RiInstagramFill } from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.linkedin.com/in/richzago/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/richzago97",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.instagram.com/richzago/",
    name: <RiInstagramFill />,
  },
];
const Socials = ({ containerStyles, iconsStyles }: any) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link  target="_blank" href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
