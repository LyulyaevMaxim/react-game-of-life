import React, { Component } from "react";
import Board from "../containers/board";
import Control from "../containers/control";
import Counter from "../containers/counter";
import GitHubForkRibbon from "react-github-fork-ribbon";

export default () => (
  <div>
    <h1>Game of Life (React + Redux)</h1>
    <Board />
    <Control />
    <Counter />
  </div>
);
