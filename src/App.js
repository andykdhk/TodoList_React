import "./App.css";
import Header from "./component/Header";
import DayList from "./component/DayList";
import AddDay from "./component/AddDay";
import Day from "./component/Day";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<DayList />}></Route>
          <Route path="/add_todo" element={[<AddDay />]}></Route>
          <Route path="/day/:day" element={[<Day />]}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
