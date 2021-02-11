import { useMutation } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import { TOGGLE_LIKE_MOVIE } from '../../service/gql';
import styles from './Movie.module.css';

const Movie = ({ id, title, medium_cover_image, isLiked }) => {
  const [toggleLikeMovie] = useMutation(TOGGLE_LIKE_MOVIE, {
    variables: {
      id,
      isLiked
    }
  });
  
  const linkStyle = { textDecoration: 'none', color: 'black' };

  return (
    <li className={styles.movieItem}>
      <Link to={`/${id}`} style={linkStyle}>
        <div className={styles.bigContainer}>
          <div className={styles.imgContainer}>
            <img className={styles.img} src={medium_cover_image} alt={`poster`}/>
          </div>
          <div className={styles.titleContainer}>
            <span className={styles.title}>
              { title }
            </span>
          </div>
        </div>
      </Link>
      <button className={styles.likeBtn} onClick={toggleLikeMovie}>
        { !isLiked ? '🤍' : '❤️' }
      </button>
    </li>
  );
};

export default Movie;