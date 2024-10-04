// src/page/landing/page.tsx
import Eatzy from "@/assets/Eatzy.svg";
import Image from "next/image";
import * as styles from "./styles.css";

export const Landing = () => {
  return (
    <div className={styles.container}>
      <Image src={Eatzy} alt="" />
    </div>
  );
};
