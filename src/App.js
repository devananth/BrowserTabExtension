import "./App.css";
import { Welcome, UserPage } from "./pages";
import { useData } from "./context";

function App() {
  const {
    dataState: { userName },
  } = useData();

  return (
    <div className="App">{userName === null ? <Welcome /> : <UserPage />}</div>
  );
}

export default App;
