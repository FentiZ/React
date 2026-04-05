import React, { useEffect, useState } from "react";
import "./App.css";

const API_KEY = "54972016-5ebbf7ccedaa01bcdc38308ac";

type ImageType = {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  user: string;
  userImageURL: string;
  likes: number;
  views: number;
};

export default function App() {
  const [images, setImages] = useState<ImageType[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("nature");
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const [dark, setDark] = useState(false);

  // лайки пользователя
  const [liked, setLiked] = useState<number[]>(
    JSON.parse(localStorage.getItem("likes") || "[]")
  );

  // локальные просмотры
  const [localViews, setLocalViews] = useState<{ [key: number]: number }>(
    JSON.parse(localStorage.getItem("localViews") || "{}")
  );

  useEffect(() => {
    fetchImages();
  }, [page, search]);

  const fetchImages = async () => {
    const res = await fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${search}&image_type=photo&page=${page}&per_page=30`
    );
    const data = await res.json();
    setImages(data.hits);
  };

  const toggleLike = (id: number) => {
    let updated;
    if (liked.includes(id)) {
      updated = liked.filter((i) => i !== id);
    } else {
      updated = [...liked, id];
    }
    setLiked(updated);
    localStorage.setItem("likes", JSON.stringify(updated));
  };

  const openImage = (img: ImageType) => {
    setSelectedImage(img);

    const updated = {
      ...localViews,
      [img.id]: (localViews[img.id] || 0) + 1,
    };

    setLocalViews(updated);
    localStorage.setItem("localViews", JSON.stringify(updated));
  };

  const grouped = images.reduce((acc: any, img) => {
    if (!acc[img.user]) acc[img.user] = [];
    acc[img.user].push(img);
    return acc;
  }, {});

  const currentImages = selectedUser
    ? grouped[selectedUser] || []
    : images;

  return (
    <div className={dark ? "app dark" : "app"}>
      
      {/* NAVBAR */}
      <header className="navbar">
        <div
          className="logo"
          onClick={() => {
            setSelectedUser(null);
            setPage(1);
          }}
        >
          PixClone
        </div>

        <input
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />

        <button onClick={() => setDark(!dark)}>
          {dark ? "☀️" : "🌙"}
        </button>
      </header>

      {/* PROFILE */}
      {selectedUser && (
        <div className="profile-header">
          <h2>{selectedUser}</h2>
          <p>{currentImages.length} photos</p>
        </div>
      )}

      {/* GALLERY */}
      <div className="gallery">
        {currentImages.map((img) => (
          <div
            key={img.id}
            className="card"
            onClick={() => openImage(img)}
          >
            <img src={img.webformatURL} />

            <div className="overlay">
              <div className="top">
                <button
                  className={liked.includes(img.id) ? "like active" : "like"}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(img.id);
                  }}
                >
                  ❤️ {img.likes + (liked.includes(img.id) ? 1 : 0)}
                </button>
              </div>

              <div className="bottom">
                <span>
                  👁 {img.views + (localViews[img.id] || 0)}
                </span>

                {!selectedUser && (
                  <div
                    className="user"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedUser(img.user);
                    }}
                  >
                    <img src={img.userImageURL} />
                    <span>{img.user}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      {!selectedUser && (
        <div className="pagination">
          <button onClick={() => setPage((p) => Math.max(p - 1, 1))}>
            Prev
          </button>
          <span>{page}</span>
          <button onClick={() => setPage((p) => p + 1)}>
            Next
          </button>
        </div>
      )}

      {/* MODAL */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage.largeImageURL} />

            <div className="modal-info">
              <div
                className="user"
                onClick={() => {
                  setSelectedUser(selectedImage.user);
                  setSelectedImage(null);
                }}
              >
                <span>{selectedImage.user}</span>
              </div>

              <button
                className={
                  liked.includes(selectedImage.id)
                    ? "like active"
                    : "like"
                }
                onClick={() => toggleLike(selectedImage.id)}
              >
                ❤️ {selectedImage.likes + (liked.includes(selectedImage.id) ? 1 : 0)}
              </button>

              <span>
                👁 {selectedImage.views + (localViews[selectedImage.id] || 0)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}