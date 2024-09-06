import { Article } from "../../Types/types";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  src: string;
  desc: string | undefined;
  regular: string;
  openModal: (article: Article) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  src,
  desc,
  regular,
  openModal,
}) => {
  const handleOpenModal = () => {
    const article: Article = {
      id: "",
      description: desc,
      urls: { small: src, regular },
    };
    openModal(article);
  };
  return (
    <img
      className={css.modalImg}
      src={src}
      alt={desc}
      onClick={handleOpenModal}
    />
  );
};

export default ImageCard;
