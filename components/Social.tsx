import Link from "next/link";
import React from "react";

import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const socails = [
  {
    icon: <FiGithub />,
    path: "https://github.com/sachu0dev",
  },
  {
    icon: <FiLinkedin />,
    path: "https://www.linkedin.com/in/sachu0dev/",
  },
  {
    icon: <FiTwitter />,
    path: "https://x.com/sachu0dev",
  },
  {
    icon: <FiMail />,
    path: "mailto:sushil.dev.in@gmail.com",
  },
];
const Social = ({ containerStyles, iconStyles }: { containerStyles: string; iconStyles: string }) => {
  return (
    <div className={containerStyles}>
      {socails.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
