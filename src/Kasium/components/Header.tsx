export default function Header({ theme, setTheme }: any) {
  return (
    <div className="header">
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Theme
      </button>

      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.reload();
        }}
      >
        Logout
      </button>
    </div>
  );
}