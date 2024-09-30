import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<p> home page</p>} />
          <Route path="/x" element={<p> x </p>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
