import { Outlet } from "react-router-dom";

const WelcomeLayout = () => {
  return (
    <main className="main">
      <Outlet />
    </main>
  );
};

export default WelcomeLayout;
