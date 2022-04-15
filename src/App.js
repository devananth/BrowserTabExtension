import "./App.css";
import { useState, useEffect } from "react";
import { Welcome, UserPage } from "./pages";
import { useData } from "./context";

const UNSPLASH_API_URL = `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&&orientation=landscape&&query=mountains%20dark`;

function App() {
  const {
    dataState: { userName },
  } = useData();

  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch(UNSPLASH_API_URL)
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.urls.regular);
      });
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
