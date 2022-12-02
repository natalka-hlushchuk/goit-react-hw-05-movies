import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import { getCast } from 'service/api';
import { Loader, CastItem } from '../index';

const Cast = () => {
  const { id } = useParams();
  const [castMenu, setCastMenu] = useState({});
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  console.log('🚀 ~ file: Cast.jsx:12 ~ Cast ~ location', location);

  useEffect(() => {
    setLoading(true);
    async function findActors() {
      try {
        const { data } = await getCast(id);
        setCastMenu(data);
      } catch (error) {
        new Error(Notiflix.Notify.failure(`Request error`));
      } finally {
        setLoading(false);
      }
    }
    findActors();
  }, [id]);

  return (
    <>
      {loading && <Loader />}
      {castMenu?.cast && <CastItem cast={castMenu} />}
    </>
  );
};
export default Cast;
