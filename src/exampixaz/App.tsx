import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Gallery from "./components/Gallery";
import Modal from "./components/Modal";

export type ImageType = {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  user: string;
  userImageURL: string;
  likes: number;
  views: number;
};

export type SortType =
  | "likes_desc"
  | "likes_asc"
  | "views_desc"
  | "views_asc";

const API_KEY = "54972016-5ebbf7ccedaa01bcdc38308ac";

export default function App() {
  const [images, setImages] = useState<ImageType[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("nature");
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const [dark, setDark] = useState(false);
  const [sort, setSort] = useState<SortType>("likes_desc");

  const [liked, setLiked] = useState<number[]>(
    JSON.parse(localStorage.getItem("likes") || "[]")
  );

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
    const updated = liked.includes(id)
      ? liked.filter((i) => i !== id)
      : [...liked, id];

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

  const baseImages = selectedUser
    ? grouped[selectedUser] || []
    : images;

  const sortedImages = [...baseImages].sort((a, b) => {
    const likesA = a.likes + (liked.includes(a.id) ? 1 : 0);
    const likesB = b.likes + (liked.includes(b.id) ? 1 : 0);

    const viewsA = a.views + (localViews[a.id] || 0);
    const viewsB = b.views + (localViews[b.id] || 0);

    switch (sort) {
      case "likes_desc":
        return likesB - likesA;
      case "likes_asc":
        return likesA - likesB;
      case "views_desc":
        return viewsB - viewsA;
      case "views_asc":
        return viewsA - viewsB;
      default:
        return 0;
    }
  });

  return (
    <div className={dark ? "app dark" : "app"}>
      <Navbar
        search={search}
        setSearch={setSearch}
        setSelectedUser={setSelectedUser}
        setPage={setPage}
        dark={dark}
        setDark={setDark}
      />

      {selectedUser && (
        <div className="profile-header">
          <h2>{selectedUser}</h2>
          <p>{baseImages.length} photos</p>
        </div>
      )}

      <div className="layout">
        <Sidebar sort={sort} setSort={setSort} />

        <Gallery
          images={sortedImages}
          openImage={openImage}
          liked={liked}
          toggleLike={toggleLike}
          localViews={localViews}
          setSelectedUser={setSelectedUser}
          selectedUser={selectedUser}
        />
      </div>

      {selectedImage && (
        <Modal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          liked={liked}
          toggleLike={toggleLike}
          localViews={localViews}
          setSelectedUser={setSelectedUser}
        />
      )}
    </div>
  );
}