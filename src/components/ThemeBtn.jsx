import useTheme from "../hooks/useTheme";

const ThemeBtn = () => {
  const { toggleTheme, darkTheme } = useTheme();
  return (
    <button className="theme-btn" onClick={toggleTheme}>
      <ion-icon
        className={`theme-icon`}
        name={`${darkTheme ? "moon-outline" : "sunny-outline"}`}
      ></ion-icon>
    </button>
  );
};

export default ThemeBtn;
