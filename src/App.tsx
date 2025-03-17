import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app/routes/Route";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
