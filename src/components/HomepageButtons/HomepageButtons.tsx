import * as React from "react";
import clsx from "clsx";

import styles from "./HomepageButtons.module.css";

export const HomepageButtons = () => {
  return (
    <div className={clsx("hero--button-wrapper", styles.heroButtonWrapper)}>
      {ButtonList.map((props, idx) => (
        <Button key={idx} {...props} />
      ))}
    </div>
  );
};

const ButtonList: ButtonProps[] = [
  {
    linkTitle: "LEARN",
    link: "/docs/intro",
  },
  {
    linkTitle: "NEWSLETTER",
    link: "https://newsletter.dotleap.com",
  },
  {
    linkTitle: "VIDEOS",
    link: "javascript:alert('Coming soon')",
  },
  {
    linkTitle: "STAKING",
    link: "javascript:alert('Coming soon')",
  },
  {
    linkTitle: "LAUNCHPAD",
    link: "javascript:alert('Coming soon')",
  },
  {
    linkTitle: "PODCAST",
    link: "javascript:alert('Coming soon')",
  },
];

interface ButtonProps {
  link: string;
  linkTitle: string;
}

const Button: React.FC<ButtonProps> = ({ linkTitle, link }) => {
  return (
    <div className={styles.buttons}>
      <a
        className="button button--primary button--outline button--lg"
        href={link}>
        {linkTitle}
      </a>
    </div>
  );
};
