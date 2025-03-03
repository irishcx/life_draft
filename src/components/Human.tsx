
import React from "react";
import styles from "@/styles/Human.module.scss";


interface HumanProps {
  healthLevel: number;
  luckyLevel: number;
  socialLevel: number;
  specialLevel: number;
  // isIntuitive: boolean;
  // isThinking: boolean;
  // isJudge: boolean;

}

const Human: React.FC<HumanProps> = ({ healthLevel }) => {
  return (
    <div className={styles["human-container"]}>
      <p className={styles["probability-text"]}>Human (P: {healthLevel})</p>
    </div>
  );
};

export default Human;
