import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import { getReviews } from 'service/api';
import { Loader } from '../index';
import {
  ReviewsStyled,
  ReviewsItem,
  ReviewsAuthor,
  NoReviews,
} from 'components/Reviews/Reviews.styled';
const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function findReviews() {
      try {
        const { data } = await getReviews(id);
        console.log(data);
        setReviews(data);
      } catch (error) {
        new Error(Notiflix.Notify.failure(`Request error`));
      } finally {
        setLoading(false);
      }
    }
    findReviews();
  }, [id]);
  console.log(reviews);
  return (
    <ReviewsStyled>
      {loading && <Loader />}
      {reviews?.results?.length > 0 ? (
        reviews?.results?.map(({ id, author, content }) => {
          return (
            <ReviewsItem key={id}>
              <ReviewsAuthor>{author}</ReviewsAuthor>
              <p>{content} </p>
            </ReviewsItem>
          );
        })
      ) : (
        <NoReviews>We don't have any reviews for this movie</NoReviews>
      )}
    </ReviewsStyled>
  );
};
export default Reviews;
