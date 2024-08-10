import React from "react";
import { SOCIAL_MEDIA_LINKS } from "../constants";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="mb-8 mt-20">
      <div className="flex items-center justify-center">
        <img src={logo} alt={logo} width={200} className="my-20" />
      </div>
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a
            href={link.href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
        &copy;Arman. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
