import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap'
import { getRequest } from '../api/Api';

const MovieTable = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [movieList, setMovieList] = useState({})

  useEffect(() => {
    getRequest()
    .then(data => {
      setMovieList(data)
      setIsLoaded(true)
    })
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
                    <td>{ m.title }</td>
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