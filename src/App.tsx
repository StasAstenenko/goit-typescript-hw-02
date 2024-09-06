import { useState, useEffect } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import Error from "./components/ErrorMessage/ErrorMessage";
import getImages from "./Api/image-api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { Article } from "./Types/types";

function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalArticles, setModalArticles] = useState<Pick<
    Article,
    "urls"
  > | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    async function getImage() {
      setLoading(true);
      try {
        const data = await getImages(query, page);
        setHasMore(data.results.length > 0);
        setArticles((pervImg) => [...pervImg, ...data.results]);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    if (query) getImage();
  }, [query, page]);

  const handleSubmit = (value: string): void => {
    setQuery(value);
    setPage(1);
    setArticles([]);
    setHasMore(true);
  };

  function isOpenModal(article: Article): void {
    setOpenModal(true);
    setModalArticles(article);
  }

  function closeModal(): void {
    setOpenModal(false);
    setModalArticles(null);
  }

  function loadMore(): void {
    setPage(page + 1);
  }

  return (
    <>
      <SearchBar onSearch={handleSubmit} />
      {error && <Error />}
      {articles.length > 0 && (
        <ImageGallery articles={articles} openModal={isOpenModal} />
      )}
      {articles.length > 0 && hasMore && <LoadMoreBtn loadMore={loadMore} />}
      {loading && <Loader />}
      {modalArticles !== null && (
        <ImageModal
          image={modalArticles}
          isOpen={openModal}
          closeModal={closeModal}
        />
      )}
    </>
  );
}

export default App;
