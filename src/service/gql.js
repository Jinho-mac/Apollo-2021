import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
{
  movies {
    id
    title
    medium_cover_image
    isLiked @client
  }
}
`;

export const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      description_intro
      medium_cover_image
      language
      rating
    }
    suggestions(id: $id) {
      id
      medium_cover_image
    }
  }
`;

export const TOGGLE_LIKE_MOVIE = gql`
  mutation toggleLikeMovie($id: Int!, $isLiked: Boolean!) {
    toggleLikeMovie(id: $id, isLiked: $isLiked) @client
  }
`;
