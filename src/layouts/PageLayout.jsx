const PageLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex flex-1">
        <main className="flex-1 p-6 pb-24 md:pb-6">{children}</main>
      </div>
    </div>
  );
};

export default PageLayout;
