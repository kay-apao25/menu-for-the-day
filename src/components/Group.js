import React, { useEffect, useState } from "react";

import RadioInput from "./RadioInput";
import myData from "../data.json";

const Group = ({ buttons, name, handleOnChange, group, input }) => {
  const [disable, setDisable] = useState([]);
  const rules = myData.rules;

  useEffect(() => {
    if (input && input in rules) {
      setDisable(rules[input]);
    }
  }, [input, rules]);

  return (
    <div
      style={
        name > group + 1
          ? { pointerEvents: "none", opacity: "0.4" }
          : { borderBottom: "1px solid black" }
      }
    >
      {buttons.map((button, key) => (
        <RadioInput
          value={button.value}
          id={button.id}
          key={key}
          disable={disable}
          input={input}
          handleOnChange={handleOnChange}
          className={name}
        />
      ))}
    </div>
  );
};

export default Group;
