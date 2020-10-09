import React, { useEffect, useState } from "react";
import "./App.css";

import myData from "./data.json";
import Menu from "./components/Menu";
import styled from "@emotion/styled";

function App() {
  const Card = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    line-height: 50px;
    border: 3px solid #92a8d1;
    margin: 60px 60px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 15px;
    width: 50%;
    padding: 30px 30px;
  `;

  const Header = styled.h1`
    border-right: 1px solid black;
    height: 100%;
    padding-right: 20px;
    margin-right: 20px;
    width: 60%;
  `;
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu(myData.menus);
  }, []);

  return (
    <Card>
      <Header>Menu for the Day</Header>
      <Menu menus={menu} />
    </Card>
  );
}

export default App;
