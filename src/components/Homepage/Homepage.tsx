import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "./Homepage.module.css";
import Logo from "../../../static/img/logo.svg";
import { HomepageButtons } from "../HomepageButtons/HomepageButtons";
import { HomepageFooter } from "../HomepageFooter/HomepageFooter";

export function Homepage() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <section className={clsx("hero hero--dark", styles.heroBanner)}>
      <div className={clsx("container", styles.heroContainer)}>
        <Logo />
        <h1 className="hero__title text--white">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          The <span>unofficial</span> hub of a unified Dotsama experience
        </p>
        <HomepageButtons />
      </div>
      <HomepageFooter />
    </section>
  );
}
