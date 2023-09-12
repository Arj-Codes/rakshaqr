import Home from "./pages/Home";
import {Routes,Route, Navigate} from "react-router-dom"
function App() {
  return <div className="max-w-[100vw] min-h-[100vh] flex flex-col">
    <Routes>
      <Route path="/" element={<Navigate to="home"/>}/>
      <Route path = "/home" element={<Home />}/>
    </Routes>
  </div>;
}
export default App;
