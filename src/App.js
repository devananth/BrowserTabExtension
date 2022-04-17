import "./App.css";
import { useState, useEffect } from "react";
import { Welcome, UserPage } from "./pages";
import { useData } from "./context";
import { getBackgroundImage } from "./utils";

function App() {
  const {
    dataState: { userName },
  } = useData();

  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    getBackgroundImage(setImageUrl);
  }, []);

  return (
    <div
      className="App"
      style={{ background: `url(${imageUrl}) no-repeat center center/cover` }}
    >
      {userName === null ? <Welcome /> : <UserPage />}
    </div>
  );
}

export default App;
