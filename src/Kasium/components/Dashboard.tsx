import React from "react";

const Dashboard = () => {
  return (
    <div className="layout">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2>KASium</h2>

        <nav>
          <button>🏠 Home</button>
          <button>📚 Courses</button>
          <button>💬 Chat</button>
          <button>📅 Calendar</button>
          <button>📝 Excuses</button>
        </nav>

        <div className="sidebar-bottom">
          <button>🌙 Theme</button>
          <button>🚪 Logout</button>
        </div>
      </aside>

      {/* MAIN */}
      <div className="main">
        {/* HEADER */}
        <header className="header">
          <div className="header-left">
            <h1>Головна</h1>
          </div>

          <div className="header-right">
            <button>UA</button>
            <button>EN</button>
          </div>
        </header>

        {/* CONTENT */}
        <div className="content">
          <div className="cards">
            <div className="card">
              <h3>Середній бал</h3>
              <p>10.5</p>
            </div>

            <div className="card">
              <h3>Відвідуваність</h3>
              <p>92%</p>
            </div>

            <div className="card large">
              <h3>Календар</h3>
              <p>📅 Тут буде календар</p>
            </div>

            <div className="card">
              <h3>Останні чати</h3>
              <p>💬 3 нових повідомлення</p>
            </div>

            <div className="card">
              <h3>Акаунти школи</h3>
              <p>📘 Moodle, Mail</p>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="footer">
          © 2026 KASium • School System
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;