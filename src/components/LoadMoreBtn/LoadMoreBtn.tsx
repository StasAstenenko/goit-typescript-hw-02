interface LoadMoreBtnProp {
  loadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProp> = ({ loadMore }) => {
  return (
    <button type="button" onClick={loadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
