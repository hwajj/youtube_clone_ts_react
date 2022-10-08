import styles from './search_header.module.css';
import React, { useRef } from 'react';

const SearchHeader: React.FC<{
  onSearch: (value: HTMLInputElement | null) => void;
  onMain: () => void;
}> = (props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleSearch = () => {
    const value = inputRef.current;
    props.onSearch(value);
  };
  const onClick = () => {
    handleSearch();
  };
  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const onMainPage = () => {
    props.onMain();
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={onMainPage}>
        <img className={styles.img} src='/images/logo.png' alt='logo' />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type='search'
        placeholder='Search..'
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type='submit' onClick={onClick}>
        <img
          className={styles.buttonImg}
          src='/images/search.png'
          alt='search'
        />
      </button>
    </header>
  );
};

export default SearchHeader;
