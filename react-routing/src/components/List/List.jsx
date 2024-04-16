/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
// * Base
import { useCallback, useState, useEffect } from 'react';
import axios from 'axios';

// * Components
import Button from '../Button/Button';

// * Styles
import styles from './List.module.css';

const Loading = () => {
  return <p>Завантаження...</p>;
};

const Error = ({ Retry }) => {
  return (
    <>
      <p>Помилка завантаження</p>
      <Button text="Повторіть спробу" onClick={Retry} />
    </>
  );
};

const EmptyList = () => {
  return <p>Помилка завантаження</p>;
};

const List = () => {
  const [state, setState] = useState({
    list: [],
    error: '',
    loading: true,
  });

  const getList = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      loading: true,
    }));

    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then(({ data }) => {
        setState((prevState) => ({
          ...prevState,
          error: '',
          list: data,
          loading: false,
        }));
      })
      .catch(() => {
        setState((prevState) => ({
          ...prevState,
          error: 'Помилка завантаження. Повторіть спробу',
          loading: false,
        }));
      });
  }, []);

  useEffect(() => {
    getList();
  }, [getList]);

  if (state.loading) {
    return <Loading />;
  }
  if (state.error) {
    return <Error Retry={getList} />;
  }
  if (!state.list.length) {
    return <EmptyList />;
  }

  return (
    <ul className={styles.list}>
      {state.list.map(({ body, title, id }) => (
        <Item title={title} body={body} key={`list item ${id}`} />
      ))}
    </ul>
  );
};

const Item = ({ title, body }) => {
  return (
    <li className={styles.item}>
      <h4>{title}</h4>
      <p>{body}</p>
    </li>
  );
};

export default List;
