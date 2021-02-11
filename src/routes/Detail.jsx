import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import { GET_MOVIE } from '../service/gql';
import styles from './Detail.module.css';

const Detail = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: Number(id) }
  });
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          { loading && <h1>Loading...</h1> }
          { !loading && <h1>{data?.movie?.title}</h1> }
        </header>
        { !loading && <div className={styles.bigContainer}>
            <div className={styles.dataContainer}>
              <h2>📍 Title: {data?.movie?.title}</h2>
              <h2>📍 Language: {data?.movie?.language}</h2>
              <h2>📍 Rating: {data?.movie?.rating}</h2>
              <p className={styles.intro}>{data?.movie?.description_intro}</p>
            </div>
            <div className={styles.imgContainer}>
              <img className={styles.img} src={data?.movie?.medium_cover_image} alt={data?.movie?.title}/>
            </div>
          </div>  
        }
      </div>
    </div>
  );
};

export default Detail;