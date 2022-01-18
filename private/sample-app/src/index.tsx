import React from "react";
import ReactDOM from "react-dom";

import { Icon } from "@reactsmile/icons";

import "./index.scss";

const App = () => {
    return <div>
      <p>Hello!</p>
      <Icon name="home" />
    </div>
}

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById("app"));