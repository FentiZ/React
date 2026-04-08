import { useState } from "react";
import Sidebar from "./components/Sidebar.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./pages/Home.tsx";
import Courses from "./pages/Courses.tsx";
import Chat from "./pages/Chat.tsx";
import Login from "./components/Login";
import "./styles.css"

export default function App() {
  const [page, setPage] = useState("home");
  const [theme, setTheme] = useState("dark");
  const [lang, setLang] = useState("ua");

  const [isAuth, setIsAuth] = useState(
    !!localStorage.getItem("token")
  );

  if (!isAuth) {
    return <Login onLogin={() => setIsAuth(true)} lang={lang} />;
  }

  return (
    <div className={`app ${theme}`}>
      <Sidebar setPage={setPage} />
      <Header theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} />

      <main>
        {page === "home" && <Home />}
        {page === "courses" && <Courses />}
        {page === "chat" && <Chat />}
      </main>

      <Footer />
    </div>
  );
}