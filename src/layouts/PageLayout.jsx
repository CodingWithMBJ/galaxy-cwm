import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <div className="wrapper">
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default PageLayout;
