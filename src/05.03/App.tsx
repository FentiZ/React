import "./App.css";

const products = [
  {
    id: 1,
    title: "Ноутбук DURABOOK Z14 Basic Black (Z14I40D3BX0)",
    price: "287 999 ₴",
    oldPrice: "273 589 ₴",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Ноутбук DURABOOK Z14 Basic Black (Z14I40D3BX0)",
    price: "305 999 ₴",
    oldPrice: "290 689 ₴",
    rating: 4.8,
  },
  {
    id: 3,
    title: "Ноутбук DURABOOK Z14 Basic Black",
    price: "316 751 ₴",
    oldPrice: null,
    rating: 4.7,
  },
  {
    id: 4,
    title: "Ноутбук DURABOOK S15 Standard Black",
    price: "191 640 ₴",
    oldPrice: "182 058 ₴",
    rating: 4.7,
  },
];

export default function App() {
  return (
    <div className="app">
      {/* TOP BAR */}
      <div className="topbar">
        <div className="container">
          <span>Киев</span>
          <div className="top-links">
            <span>Акции</span>
            <span>Магазины</span>
            <span>Помощь</span>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="header">
        <div className="container header-row">
          <div className="logo">Фокстрот</div>

          <button className="catalog-btn">
            <span className="burger"></span>
            Каталог товаров
          </button>

          <input className="search" placeholder="Найти товар..." />

          <div className="header-icons">
            <div className="icon" />
            <div className="icon" />
            <div className="icon" />
            <div className="icon cart" />
          </div>
        </div>
      </header>

      {/* MAIN */}
      <div className="container main">
        {/* SIDEBAR */}
        <aside className="sidebar">
  {/* PRICE */}
  <div className="filter">
    <h4>Цена, ₴</h4>

    <div className="price-inputs">
      <input defaultValue="191640" />
      <input defaultValue="316751" />
    </div>

    <button className="apply-btn">Применить</button>
  </div>

  {/* POPULAR */}
  <div className="filter">
    <h4>Популярные фильтры</h4>
  </div>

  {/* BRAND */}
  <div className="filter">
    <h4>Торговая марка</h4>
    <input className="search-filter" placeholder="Искать" />
    <div className="alphabet">Алфавитный указатель</div>
    <div className="show-more">Показать еще</div>
  </div>

  {/* FULL FILTER LIST */}
  {[
    "Модельный ряд",
    "Модель видеокарты",
    "Тип",
    "Тип видеокарты",
    "Диагональ дисплея",
    "Разрешение дисплея",
    "Тип матрицы",
    "Частота обновления экрана",
    "Покрытие дисплея",
    "Серия процессора",
    "Поколение Intel Core",
    "Количество ядер",
    "Тип памяти",
    "Объем ОЗУ",
    "Количество слотов оперативной памяти",
    "Тип накопителя",
    "Объем SSD диска",
    "Оптический привод",
    "Операционная система",
    "Версия Windows",
    "Беспроводные коммуникации",
    "Порты и разъемы",
    "Конструкция",
    "Вес",
    "Цвет крышки",
    "Материал корпуса",
    "Количество отделений аккумулятора",
    "Особенности",
    "Класс",
    "Яркость экрана"
  ].map((item, i) => (
    <div key={i} className="filter collapse">
      <div className="collapse-header">
        {item}
        <span>+</span>
      </div>
    </div>
  ))}

  {/* SUGGEST */}
  <div className="suggest">
    Не хватает фильтров?
    <span> Предложи!</span>
  </div>
</aside>

        {/* PRODUCTS */}
        <div className="products">
          {products.map((p) => (
            <div key={p} className="card">
              <div className="card-top">
                <span className="badge">ХИТ</span>
                <div className="fav"></div>
              </div>

              <div className="image" />

              <h4>
                Ноутбук DURABOOK Z14 Basic Black
              </h4>

              <div className="rating">
                <div className="stars" />
                <span>(15)</span>
              </div>

              <div className="price-block">
                <span className="old">273 589 ₴</span>
                <span className="price">287 999 ₴</span>
              </div>

              <button className="buy-btn"></button>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
  {/* APP + SUBSCRIBE */}
  <div className="footer-app">
    <div className="container footer-app-inner">
      <div className="app-block">
        <h3>Фокстрот в приложении</h3>
        <p>Загружай наше приложение и отслеживай статус заказа</p>
        <div className="stores">
          <div className="store-btn"></div>
          <div className="store-btn"></div>
        </div>
      </div>

      <div className="subscribe">
        <h3>Будь первым и узнавай о наших акциях и новостях</h3>
        <div className="subscribe-row">
          <input placeholder="Ваш email" />
          <button>ПОДПИСАТЬСЯ</button>
        </div>
      </div>
    </div>
  </div>

  {/* MAIN LINKS */}
  <div className="footer-main">
    <div className="container footer-grid">
      <div>
        <h4>Покупателям</h4>
        <p>Адреса магазинов «Фокстрот»</p>
        <p>Оплата</p>
        <p>Возврат товара</p>
        <p>Доставка</p>
        <p>Акции</p>
      </div>

      <div>
        <h4>Компания</h4>
        <p>О компании</p>
        <p>Вакансии</p>
        <p>Новости</p>
        <p>Контакты</p>
      </div>

      <div>
        <h4>Помощь</h4>
        <p>Сервисная сеть</p>
        <p>FAQ</p>
        <p>Гарантия</p>
      </div>

      <div>
        <h4>Контакты</h4>
        <p>Email: info@foxtrot.com.ua</p>
        <button className="contact-btn">НАПИСАТЬ НАМ</button>
      </div>
    </div>
  </div>

  {/* CATEGORIES */}
  <div className="footer-categories">
    <div className="container categories">
      <span>Смартфоны</span>
      <span>Ноутбуки</span>
      <span>Телевизоры</span>
      <span>Смарт-часы</span>
      <span>Наушники</span>
      <span>Планшеты</span>
      <span>Холодильники</span>
      <span>Стиральные машины</span>
      <span>Пылесосы</span>
      <span>Кофемашины</span>
      <span>Apple</span>
      <span>Lego</span>
    </div>
  </div>

  {/* BOTTOM */}
  <div className="footer-bottom">
    <div className="container bottom-inner">
      <span>© Фокстрот 2026</span>
      <div className="payments">
        <div className="pay"></div>
        <div className="pay"></div>
        <div className="pay"></div>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}