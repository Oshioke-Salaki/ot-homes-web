import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate replace to={"home"} />} />
          <Route path="home" element={<HomePage />} />
          {/* <Route /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
