import type { ImageType } from "../App.tsx";

type Props = {
  image: ImageType;
  onClose: () => void;
  liked: number[];
  toggleLike: (id: number) => void;
  localViews: any;
  setSelectedUser: (user: string) => void;
};

export default function Modal({
  image,
  onClose,
  liked,
  toggleLike,
  localViews,
  setSelectedUser,
}: Props) {
  return (
    <div className="modal" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={image.largeImageURL} />

        <div className="modal-info">
          <div
            className="user"
            onClick={() => {
              setSelectedUser(image.user);
              onClose();
            }}
          >
            <span>{image.user}</span>
          </div>

          <button
            className={liked.includes(image.id) ? "like active" : "like"}
            onClick={() => toggleLike(image.id)}
          >
            ❤️ {image.likes + (liked.includes(image.id) ? 1 : 0)}
          </button>

          <span>
            👁 {image.views + (localViews[image.id] || 0)}
          </span>
        </div>
      </div>
    </div>
  );
}