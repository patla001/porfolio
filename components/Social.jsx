import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaDiscord } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/patla001'},
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/ezer-patlan/'},
    
];


const Social = ({containerSyles, iconStyles}) => {
  return (
    <div className={containerSyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            );
        })}
    </div>
    );
};

export default Social;
    