"use client";

import * as styles from "./styles.css";
import { useEffect, useState } from "react";
import { Main } from "@/pages/main/page";

export const Landing = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return <Main />;

  return (
    <div className={styles.container}>
      <p className={styles.Logo}>Eatzy</p>
    </div>
  );
};
