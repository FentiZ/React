export default function ImageCard({
  img,
  openImage,
  liked,
  toggleLike,
  localViews,
  setSelectedUser,
  selectedUser,
}: any) {
  return (
    <div className="card" onClick={() => openImage(img)}>
      <img src={img.webformatURL} />

      <div className="overlay">
        <div className="top">
          <button
            color="black"
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
  );
}