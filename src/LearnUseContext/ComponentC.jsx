import styles from "./LearnUseContext.module.css";
import ComponentD from "./ComponentD";

import { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentC() {
  const user = useContext(UserContext);

  return (
    <div className={styles.box}>
      <h1>ComponentC</h1>
      <h2>{user}</h2>
      <ComponentD />
    </div>
  );
}

export default ComponentC;
