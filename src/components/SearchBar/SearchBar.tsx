import { FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.search.value;
    if (input.trim() === "") {
      toast("Enter text to search for images", {
        icon: "❌",
        style: {
          borderRadius: "5px",
          background: "black",
          color: "#fff",
        },
      });

      return;
    }
    onSearch(value);
    setValue("");
  };

  const changeValue = (e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <header className={css.header}>
      <form className={css.headerForm} onSubmit={handleSubmit}>
        <input
          className={css.headerInput}
          type="text"
          name="search"
          placeholder="Search images and photos"
          onChange={changeValue}
        />
        <button className={css.headerBtn} type="submit">
          Search
        </button>
        <Toaster position="top-right" reverseOrder={false} />
      </form>
    </header>
  );
};

export default SearchBar;
