import "./App.css";
import Header from "./component/Header";
import DayList from "./component/DayList";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateDay from "./component/CreateDay";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<DayList />}></Route>
          <Route path="/add_todo" element={[<CreateDay />]}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
