import React, { useState } from 'react';
import { Form, Button, Container, Card, CardGroup, Spinner } from 'react-bootstrap'
//api
import { getMovies } from '../api/Api';

const Search = () => {
  const [error, setError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [search, setSearch] = useState("")
  const [movieList, setMovieList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setIsLoaded(false)
    getMovies(search)  
    .then(data => {
      const titles = data.titles
      setMovieList(titles)
      setSearch("")
      setIsLoading(false)
      setIsLoaded(true)
    })
    .catch(err => {
      setError(true)
      console.error(err);
    });
  }

  const handleChange = (e) => {
    e.persist();
    setSearch(e.target.value);
  }

  return (
    <>
      <Container>
        <h1>Enter A Movie Title</h1>
        <Form onSubmit={ handleSubmit } className="search-form" >
          <Form.Group controlId="title">
            <Form.Control type="text" name="title" value={ search }  onChange={ handleChange } placeholder="Enter Movie Title" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
        <CardGroup className="group">
          { isLoading && 
            <div className="loading">
              <Spinner animation="grow" />
            </div>
          }
          { (isLoaded && !error) && movieList.map((m, i) => {
            return (
              <Card key={ i } className="movie-card">
                <Card.Img variant="top" src={ m.image } className="card-image" />
                <Card.Body>
                  <a className="movie-title" href={ `/movie-details/${ m.id }` }>{ m.title }</a>
                </Card.Body>
              </Card>
              )
            })
          }
        </CardGroup>
      </Container>
    </>
  );
};

export default Search;