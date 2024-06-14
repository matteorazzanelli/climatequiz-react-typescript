import { Routes, Route } from "react-router-dom";
import './App.css';
import Start from "./pages/Start";
import Test from "./pages/Test";
import Result from "./pages/Result";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="/test" element={<Test/>} />
        <Route path="/result" element={<Result/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </>
  );
}

export default App;
