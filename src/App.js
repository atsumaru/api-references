import "ress/ress.css";
import "github-markdown-css/github-markdown.css";

import React from "react";
import { Router } from "react-static";
import { hot } from "react-hot-loader";
import Routes from "react-static-routes";

import MainLayout from "./MainLayout";

import "./app.scss";

const App = () => (
  <Router>
    <MainLayout>
      <Routes />
    </MainLayout>
  </Router>
);

export default hot(module)(App);
