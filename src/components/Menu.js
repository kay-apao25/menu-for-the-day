import React, { useState } from "react";
import Group from "./Group";

const Menu = ({ menus }) => {
  const [group, setGroup] = useState(-1);
  const [input, setInput] = useState();
  const [button, setButton] = useState(true);

  const handleOnChange = (e) => {
    const value = e.target.id;
    if (value) {
      const key = parseInt(e.target.className);
      setInput(value);
      setGroup(key);
    }

    // When user have selected an item from all menu groups
    // enable Submit button
    if (group === menus.length - 2) {
      setButton(false);
    }
  };

  return (
    <form>
      {menus.map((menu, key) => {
        return (
          <Group
            buttons={menu}
            key={key}
            name={key}
            handleOnChange={handleOnChange}
            group={group}
            input={input}
          />
        );
      })}
      <button type="submit" disabled={button}>
        Submit
      </button>
    </form>
  );
};

export default Menu;
