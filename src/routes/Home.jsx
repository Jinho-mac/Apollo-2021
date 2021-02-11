import { useQuery } from '@apollo/client';
import React from 'react';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import Movie from '../components/Movie/Movie';
import { GET_MOVIES } from '../service/gql';
import styles from './Home.module.css'

const Home = () => {
  const { loading, data } = useQuery(GET_MOVIES);
  const isLoading = loading && styles.loading;

  return (
    <div className={`${styles.wrapper} ${isLoading}`}>
      <div className={`${styles.container} ${isLoading}`}>
        <header className={styles.header}>
          <h1 className={styles.title}>Movie Review</h1>
          <h2 className={styles.subtitle}>Lovely Day with Lovely Movie</h2>
        </header>
        { loading && <LoadingSpinner /> }
        <ul className={styles.movieList}>
          { 
            data?.movies?.map(movie => {
              return <Movie key={movie.id} {...movie} />
            }) 
          }
        </ul>
      </div>
    </div>
  );
};

export default Home;