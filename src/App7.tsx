import React, { useState } from "react";
import "./App7.css";
import carsDataJson from "./cars_detailed.json";

interface Car {
  id: string;
  title: string;
  price: string;
  city: string;
  link: string;
}

// Функция для конвертации JSON в наш тип Car
const carsData: Car[] = carsDataJson.map((car) => ({
  id: car.markId.toString(),
  title: car.title,
  price: car.EUR.toString(), // можно заменить на car.USD или другой валюта
  city: car.cityLocative,
  link: car.linkToView,
}));

const parsePrice = (price: string) => parseInt(price.replace(/\s/g, "")) || 0;

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [brandFilter, setBrandFilter] = useState("");
  const [sortType, setSortType] = useState("");

  const carsPerPage = 10;

  // Фильтрация по бренду
  const filteredCars = carsData.filter((car) =>
    brandFilter ? car.title.toLowerCase().includes(brandFilter.toLowerCase()) : true
  );

  // Сортировка
  if (sortType === "price_asc") {
    filteredCars.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
  } else if (sortType === "price_desc") {
    filteredCars.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
  }

  // Пагинация
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);
  const displayedCars = filteredCars.slice(
    (currentPage - 1) * carsPerPage,
    currentPage * carsPerPage
  );

  return (
    <div className="app">
      <h1>Продажа автомобилей</h1>

      {/* Фильтры */}
      <div className="controls">
        <select onChange={(e) => setBrandFilter(e.target.value)}>
          <option value="">Все марки</option>
          <option value="BMW">BMW</option>
          <option value="Audi">Audi</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Toyota">Toyota</option>
        </select>

        <select onChange={(e) => setSortType(e.target.value)}>
          <option value="">Сортировка</option>
          <option value="price_asc">Цена ↑</option>
          <option value="price_desc">Цена ↓</option>
        </select>
      </div>

      {/* Список авто */}
      <ul className="cars-list">
        {displayedCars.map((car) => (
          <li key={car.id} className="car-item">
            <h3>{car.title}</h3>
            <p>Цена: {car.price} EUR</p>
            <p>Город: {car.city}</p>
            <a href={car.link} target="_blank" rel="noopener noreferrer">
              Подробнее
            </a>
          </li>
        ))}
      </ul>

      {/* Пагинация */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;