// useContext() = React Hook that allows you to share values
//                between multiple levels of components
//                without passing props through each level

import styles from "./LearnUseContext.module.css";
import { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentD() {
  const user = useContext(UserContext);

  return (
    <div className={styles.box}>
      <h1>ComponentD</h1>
      <h2>Bye {user}</h2>
    </div>
  );
}

export default ComponentD;
