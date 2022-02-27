import "./App.css";
import Header from "./component/Header";
import DayList from "./component/DayList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <DayList />
        <Routes>
          <Route path="/" />
          <Route>{/* <EmptyPage /> */}</Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
