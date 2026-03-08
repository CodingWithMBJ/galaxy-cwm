import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const SiteLayout = ({ isDesktop }) => {
  return (
    <div className="wrapper">
      <Header isDesktop={isDesktop} />
      <Hero />
      <NavBar />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
