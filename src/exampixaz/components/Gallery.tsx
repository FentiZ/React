import type { ImageType } from "../App.tsx";
import ImageCard from "./ImageCard";

type Props = {
  images: ImageType[];
  openImage: (img: ImageType) => void;
  liked: number[];
  toggleLike: (id: number) => void;
  localViews: any;
  setSelectedUser: (user: string) => void;
  selectedUser: string | null;
};

export default function Gallery(props: Props) {
  return (
    <div className="gallery">
      {props.images.map((img) => (
        <ImageCard key={img.id} {...props} img={img} />
      ))}
    </div>
  );
}