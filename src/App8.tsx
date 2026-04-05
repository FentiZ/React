import React from "react";
import "./App8.css";

const Header = () => (
    
  <header className="header">
    <div className="logo">+ LOGO</div>
    <nav className="nav">
      <a>Oil</a>
      <a>Cosmetics</a>
      <a>Dishes</a>
      <a>Competition</a>
      <a>News</a>
    </nav>
    <div className="actions">EN ▾</div>
  </header>
);

const Sidebar = () => (
  <aside className="sidebar">
    <h4>Filters</h4>
    {Array.from({ length: 6 }).map((_, i) => (
      <div className="filter-group" key={i}>
        <p>Category {i + 1}</p>
        {Array.from({ length: 4 }).map((_, j) => (
          <label key={j}>
            <input type="checkbox" /> Option {j + 1}
          </label>
        ))}
      </div>
    ))}
  </aside>
);

const ProductCard = () => (
  <div className="card">
    <div className="card-top">
      <div className="tags">
        <span>Design Shift</span>
        <span>Clear out noise</span>
        <span>LoI</span>
      </div>
      <div className="icons">♡ ⚖</div>
    </div>

    <div className="card-image" />

    <h3>Product 1</h3>
    <p>
      Step into the future with a platform engineered for speed, clarity, and
      innovation.
    </p>

    <button className="card-btn">Add to cart</button>
  </div>
);

const Banner = () => (
  <div className="banner">
    <div className="banner-left">
      <div className="tags">
        <span>Design Shift</span>
        <span>Clear out noise</span>
        <span>Text 3</span>
      </div>
      <h1>Advertisement</h1>
      <p>
        Step into the future with a platform engineered for speed, clarity, and
        creative power.
      </p>
    </div>
    <div className="banner-right">
      <div className="banner-img" />
      <div className="arrow">→</div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">

      <div className="footer-col">
        <h3>LOGO</h3>
        <p>(095) 101 11 11</p>
        <p>test@example.com</p>
      </div>

      <div className="footer-col">
        <h4>To the buyer</h4>
        <p>Site map</p>
        <p>User agreement</p>
        <p>Warranty and Product Return</p>
        <p>Delivery and Payment</p>
      </div>

      <div className="footer-col">
        <h4>We are waiting for you</h4>
        <p>Dnipr</p>
        <p>Nearby Area, 27, GEL MALL</p>
        <p>Mon–Fri: 10:00–21:00</p>
      </div>

      <div className="footer-col social">
        <h4>Follow us</h4>
        <div className="icons">
          <span>🌐</span>
          <span>📷</span>
          <span>▶</span>
        </div>
      </div>

    </div>
  </footer>
);

const ProductPage = () => {
  return (
    <div className="page">
      <Header />
      <div className="wrapper"></div>

      <div className="layout">
        <Sidebar />

        <main className="content">
          <Banner />

          <div className="grid">
            {Array.from({ length: 10 }).map((_, i) => (
              <ProductCard key={i} />
            ))}
          </div>

          <div className="bottom-banner">
            <button>Explore Now</button>
            <p>
              The flinderfox breezes through neon twilight with adjustable
              pancake logic
            </p>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};
export default ProductPage;