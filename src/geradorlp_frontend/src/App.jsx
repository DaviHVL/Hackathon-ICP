import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/home";
import T1Pageconfig from "./pages/t1pageconfig";
import T2Pageconfig from "./pages/t2pageconfig";
import T3Pageconfig from "./pages/t3pageconfig";
import T4Pageconfig from "./pages/t4pageconfig";
import Page from "./pages/page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/t1pageconfig/:nome" element={<T1Pageconfig />} />
        <Route path="/t2pageconfig/:nome" element={<T2Pageconfig />} />
        <Route path="/t3pageconfig/:nome" element={<T3Pageconfig />} />
        <Route path="/t4pageconfig/:nome" element={<T4Pageconfig />} />
        <Route path="/page/:nome" element={<Page />} />
      </Routes>
    </Router>
  );
}

export default App;
