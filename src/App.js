import "./App.css";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" />
          <Route>{/* <EmptyPage /> */}</Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
