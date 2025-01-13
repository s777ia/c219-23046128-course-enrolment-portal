import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Diplomas from "./Diplomas";
import Diploma from "./Diploma";
import Modules from "./Modules";
import Register from "./Register";
import Confirmation from "./Confirmation"
import Header from "./Header";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home title="Home" />} />
        <Route path="diplomas" element={<Diplomas />}>
          <Route path=":diplomaId" element={<Diploma />} >
            <Route path=":moduleId" element={<Modules />} />
          </Route>
          <Route index element={<h3>Select a diploma from above</h3>}/>
        </Route>
        <Route path="register" element={<Register />}/>
        <Route path="confirmed" element={<Confirmation />}/>
        <Route
          path="*"
          element={<h1 className="not-found">Page Not Found</h1>}
        />
      </Routes>

      <footer className="container">
        &copy;2024 | <a href="https://www.rp.edu.sg/schools-courses">Republic Polytechnic</a>
      </footer>
    </div>
  );
}

export default App;
