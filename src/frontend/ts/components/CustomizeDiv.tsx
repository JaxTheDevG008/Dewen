export default function CustomizeDiv() {
  const themes = [
    "red",
    "gold",
    "lightGreen",
    "green",
    "teal",
    "aqua",
    "blue",
    "violet",
    "purple",
    "pink",
    "white",
    "black",
  ];

  function changeTheme(theme: string) {
    document.documentElement.setAttribute("data-theme", theme);
  }

  return (
    <div className="customizeDiv">
      <div className="customizeHeader">
        <h1 className="customizeHeaderTitle">Customize</h1>
        <button className="closeCustomizeBtn">✕</button>
      </div>

      <div className="customizeBg">
        <div className="customizeBgHeader">
          <h1 className="customizeBgHeaderTitle">Background</h1>
        </div>
        <div className="customizeBgOptions">
          {themes.map((theme) => (
            <button
              type="button"
              key={theme}
              className={`${theme}BtnBg`}
              onClick={() => changeTheme(theme)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
