import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { routes } from "./routes.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={routes.home.element} />
          <Route path="/x" element={routes.x.element} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
