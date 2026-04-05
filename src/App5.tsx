import { useEffect, useState } from "react";
import "./App5.css";

interface ImageData {
  id: number;
  webformatURL: string;
  previewURL: string;
  user: string;
  likes: number;
}

const API_KEY = "54972016-5ebbf7ccedaa01bcdc38308ac";

function App5() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=nature&image_type=photo&per_page=12`
    )
      .then((res) => res.json())
      .then((data) => setImages(data.hits));
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images.length) return <div className="gallery">Loading...</div>;

  const current = images[index];

  return (
    <div className="gallery">

      <div className="viewer">

        <button className="arrow left" onClick={prev}>
          ←
        </button>

        <img src={current.webformatURL} className="main-image" />

        <button className="arrow right" onClick={next}>
          →
        </button>

      </div>

      <div className="info">
        <span>Author: {current.user}</span>
        <span>Likes: {current.likes}</span>
      </div>

      <div className="thumbnails">
        {images.map((img, i) => (
          <img
            key={img.id}
            src={img.previewURL}
            className={i === index ? "thumb active" : "thumb"}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

    </div>
  );
}

export default App5;