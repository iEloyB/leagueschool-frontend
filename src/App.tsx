import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header/Header";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Analytics />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
