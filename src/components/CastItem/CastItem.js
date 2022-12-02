import React from 'react';
import {
  CastItemStyled,
  CastPhotoStyled,
  CastNameStyled,
  CastListStyled,
  CharacterStyled,
} from 'components/CastItem/CastItem.styled';
export const CastItem = ({ cast }) => {
  return (
    <CastListStyled>
      {cast.cast.map(({ id, profile_path, name, character }) => {
        return (
          <CastItemStyled key={id}>
            <CastPhotoStyled
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={`There should have been a photo ${name}`}
              width="170px"
              height="250px"
            />
            <CastNameStyled>{name}</CastNameStyled>
            <p>
              <CharacterStyled>Character: </CharacterStyled>
              {character}{' '}
            </p>
          </CastItemStyled>
        );
      })}
    </CastListStyled>
  );
};
