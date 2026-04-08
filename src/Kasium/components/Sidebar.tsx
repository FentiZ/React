import { useState } from "react";

export default function Sidebar({ setPage }: any) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="burger" onClick={() => setOpen(!open)}>☰</div>

      <div className={`sidebar ${open ? "open" : ""}`}>
        <button onClick={() => setPage("home")}>🏠 Home</button>
        <button onClick={() => setPage("courses")}>📚 Courses</button>
        <button onClick={() => setPage("chat")}>💬 Chat</button>
      </div>
    </>
  );
}