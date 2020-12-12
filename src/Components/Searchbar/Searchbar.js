import s from './Searchbar.module.css';

export default function Searchbar(params) {
  return (
    <header className={s.searchbar}>
      <form className={s.searchForm}>
        <button type="submit" className={s.searchFormButton}>
          <span className={s.searchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.searchFormInput}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
