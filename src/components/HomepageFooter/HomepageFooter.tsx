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
      <p className="text--grey">© Polkadot.com</p>
      <p>
        Polkadot.com is in no way affiliated with Web3 Foundation or Parity Technologies. It is a
        community-run knowledgebase and toolkit.
      </p>
    </div>
  );
};

const SocialList = [
  {
    linkTitle: "Github",
    link: "https://github.com/polkadotcom",
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
    linkTitle: "Mail",
    link: "mailto:contact@polkadot.com",
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
