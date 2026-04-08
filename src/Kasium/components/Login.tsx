import { useState } from "react";

export default function Login({ onLogin }: any) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch("https://localhost:44332/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ login, password })
    });

    if (!res.ok) return alert("Error");

    const data = await res.json();
    localStorage.setItem("token", data.token);
    onLogin();
  };

  return (
    <div className="login">
      <div className="card">
        <h1>KASium</h1>

        <input onChange={(e) => setLogin(e.target.value)} placeholder="Login" />
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}