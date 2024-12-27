import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
