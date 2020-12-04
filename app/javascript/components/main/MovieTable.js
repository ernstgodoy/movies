import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap'
//api
import { getRequest } from '../api/Api';

const MovieTable = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [movieList, setMovieList] = useState({})

  useEffect(() => {
    let mounted = true
    getRequest()
    .then(data => {
      if (mounted) {
        setMovieList(data)
        setIsLoaded(true)
      }
    })
    return () => mounted = false
  }, [])

  return (
    <>
      <Container>
        <h1> Movie Ratings</h1>
        { isLoaded &&
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Movie Title</th>
                <th>Thumbs Up</th>
                <th>Thumbs Down</th>
              </tr>
              { movieList.map((m, i) => {
                return (
                  <tr key={ i }>
                    <td><a href={ `/movie-details/${ m.movie_id }` }>{ m.title }</a></td>
                    <td>{ m.thumbs_up } </td>
                    <td>{ m.thumbs_down }</td>
                  </tr>
                )
              })}
            </thead>
          </Table>
        }
      </Container>
    </>
  );
};

export default MovieTable;