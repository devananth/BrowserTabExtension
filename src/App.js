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

  const backgroundProperty = imageUrl
    ? `url(${imageUrl}) no-repeat center center/cover`
    : "black";

  return (
    <div className="App" style={{ background: backgroundProperty }}>
      {userName === null ? <Welcome /> : <UserPage />}
    </div>
  );
}

export default App;
