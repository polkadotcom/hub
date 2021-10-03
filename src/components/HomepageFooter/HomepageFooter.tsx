import * as React from "react";
import clsx from "clsx";

import styles from "./HomepageFooter.module.css";
import GitHubLogo from "../../../static/img/logo-github.svg";
import TwitterLogo from "../../../static/img/logo-twitter.svg";
import DiscordLogo from "../../../static/img/logo-discord.svg";
import InstagramLogo from "../../../static/img/logo-instagram.svg";
import MailLogo from "../../../static/img/mail-outline.svg";

export const HomepageFooter = () => {
  return (
    <div className={clsx("socials", styles.socials)}>
      {SocialList.map((props, idx) => (
        <Social key={idx} {...props} />
      ))}
      <p className="text--grey">
        © Polkadot.com · Privacy Policy · Terms and Conditions
      </p>
    </div>
  );
};

const SocialList = [
  {
    linkTitle: "Github",
    link: "/",
    Svg: GitHubLogo,
  },
  {
    linkTitle: "Twitter",
    link: "/",
    Svg: TwitterLogo,
  },
  {
    linkTitle: "Discord",
    link: "/",
    Svg: DiscordLogo,
  },
  {
    linkTitle: "instagram",
    link: "/",
    Svg: InstagramLogo,
  },
  {
    linkTitle: "Mail",
    link: "/",
    Svg: MailLogo,
  },
];

interface SocialProps {
  linkTitle: string;
  link: string;
  Svg: Svg;
}

const Social: React.FC<SocialProps> = ({ link, linkTitle, Svg }) => {
  return (
    <a className="social_link" href={link} title={linkTitle}>
      <Svg alt={linkTitle} />
    </a>
  );
};
