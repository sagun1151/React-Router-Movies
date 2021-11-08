
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration: none;
  color:black;
`

export default function SavedList(props) {
  
  

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <StyledLink to ="/"  className="home-button" >Home</StyledLink>
    </div>
  );
}
