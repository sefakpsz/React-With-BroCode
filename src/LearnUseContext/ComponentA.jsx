// useContext() = React Hook that allows you to share values
//                between multiple levels of components
//                without passing props through each level

// PROVIDER COMPONENT
// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext. Provider value={value}>
//        <Child />
//      </MyContext.Provider>

// CONSUMER COMPONENTS
// 1. import React, { useContext } from 'react';
//    import { MyContext } from './ComponentA';
// 2. const value = useContext (MyContext);

import styles from "./LearnUseContext.module.css";
import ComponentB from "./ComponentB";
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("BroCode");

  return (
    <div className={styles.box}>
      <h1>ComponentA</h1>
      <h2>{`Hello ${user}`}</h2>
      <UserContext.Provider value={user}>
        <ComponentB user={user} />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
