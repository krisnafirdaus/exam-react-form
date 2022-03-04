import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import NewPlayer from "./Component/NewPlayer";
import Navbar from "./Component/Navbar";

const Component1 = () => {
  return <h1>Component 1</h1>;
};

const Component2 = () => {
  return <h1>Component 2</h1>;
};

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Component1 /> },
    { path: "component2", element: <Component2 /> },
    { path: "newplayer", element: <NewPlayer /> },
    { path: "newplayer/:id", element: <NewPlayer /> },
    // ...
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <Navbar />
      <App />
    </Router>
  );
};

export default AppWrapper;
