import { useState } from "react";

import "./App.css";
import { TimeTrackingCard } from "./stories/TimeTrackingCard/TimeTrackingCard";

function App() {
  const [count, setCount] = useState(0);

  return <TimeTrackingCard />;
}

export default App;
