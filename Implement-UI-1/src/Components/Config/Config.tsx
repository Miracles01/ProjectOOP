import { FunctionComponent, useState, useCallback } from "react";
import styles from "./Config.module.css";
import React from "react";

const Config: FunctionComponent = () => {
  const [inputs, setInputs] = useState({
    interestRate: "",
    initialBudget: "",
    maximumBudget: "",
    budgetPerTurn: "",
    costToPurchaseHex: "",
    maxTurnsPerGame: "",
  });

  const handleChange = (field: string, event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [field]: event.target.value });
  };

  const onGroupContainerClick = useCallback(() => {
    console.log("Configuration Saved:", inputs);
  }, [inputs]);

  return (
    <div className={styles.config}>
      <img className={styles.config11} alt="" src="public\config-1-1@2x.png" />
      <div className={styles.configChild} />
      <div className={styles.scoreWrapper}>
        <div className={styles.score}>
          <div className={styles.configuration}>CONFIGURATION</div>
        </div>
      </div>
      <img className={styles.markedCitiesCollinaltaPre} alt="" src="src\public\START\Marked Cities - Collinalta_preview_rev_1 1.png" />

      <div className={styles.property1defaultParent}>
        {Object.entries(inputs).map(([key, value], index) => (
          <div key={key} className={styles[`property1variant${index + 1}`]}>
            <div className={styles.interestRateParent}>
              <div className={styles.interestRate}>{key.replace(/([A-Z])/g, " $1")}</div>
              <div className={styles.enterInputWrapper}>
                <input
                  type="text"
                  value={value}
                  onChange={(event) => handleChange(key, event)}
                  placeholder="Enter Input"
                  className={styles.enterInput}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <div className={styles.done}>DONE</div>
      </div>
    </div>
  );
};

export default Config;
