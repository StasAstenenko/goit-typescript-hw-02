import { Article } from "../../Types/types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImageGalleryProps {
  articles: Article[];
  openModal: (article: Article) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ articles, openModal }) => {
  return (
    <ul className={css.modalGalleryList}>
      {articles.map(({ id, urls: { small, regular }, description }, index) => (
        <li key={`${id}-${index}`} className={css.modalGalleryItem}>
          <ImageCard
            src={small}
            desc={description}
            openModal={openModal}
            regular={regular}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
