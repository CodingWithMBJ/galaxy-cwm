import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import SiteLayout from "./layouts/SiteLayout";
import WelcomeLayout from "./layouts/WelcomeLayout";
import WelcomeScreen from "./pages/WelcomeScreen";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blog";
import Contact from "./pages/Contact";
import { useBreakpoint } from "./hooks/useBreakPoint";

function App() {
  const { isDesktop } = useBreakpoint();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WelcomeLayout />}>
          <Route path="/" element={<WelcomeScreen />} />
        </Route>

        <Route element={<SiteLayout isDesktop={isDesktop} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
