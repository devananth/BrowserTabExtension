import "./App.css";
import { useState, useEffect } from "react";
import { Welcome, UserPage } from "./pages";
import { useData } from "./context";

function App() {
  const {
    dataState: { userName },
  } = useData();

  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos/random/?client_id=XqByhaz8qx069KZ_7Kk528zhO_02RDftaH3ioB8y1No&&orientation=landscape&&query=mountains%20dark`
    )
      .then((res) => res.json())
      .then((x) => {
        console.log(x);
        setImageUrl(x.urls.regular);
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
