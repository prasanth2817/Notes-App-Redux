import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Edit from "./DashBoardcomponents/Edit";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <div id="Wrapper" className="Wrapper">
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
