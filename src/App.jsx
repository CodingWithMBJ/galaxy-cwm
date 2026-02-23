import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "./layouts/PageLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import { useBreakpoint } from "./hooks/useBreakPoint";
import ProfileCard from "./components/ProfileCard";

function App() {
  const { isDesktop } = useBreakpoint();
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout isDesktop={isDesktop} />}>
          <Route index element={<ProfileCard />} />
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
