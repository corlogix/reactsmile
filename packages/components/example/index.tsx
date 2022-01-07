import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const App = () => {
    return <div>
      <p>Hello!</p>
    </div>
}

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById("app"));