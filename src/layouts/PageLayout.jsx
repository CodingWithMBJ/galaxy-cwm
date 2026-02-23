import { Outlet, useLocation, useNavigate } from "react-router-dom";
import ActionMenu from "../components/ActionMenu";

import Header from "../components/Header";

const PageLayout = ({ isDesktop }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const chosenPath = location.pathname === "/";
  const showMenu = isDesktop || chosenPath;

  return (
    <div className="min-h-screen w-screen flex flex-col">
      {!isDesktop && !showMenu && <Header onBack={() => navigate("/")} />}

      <main className={`main flex-1 ${showMenu ? "pb-24" : ""}`}>
        <div className="mx-auto w-full h-full px-4 py-8">
          <Outlet />
        </div>
      </main>

      {showMenu && <ActionMenu />}
    </div>
  );
};

export default PageLayout;
