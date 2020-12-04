import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Image, Button } from 'react-bootstrap';
import { getMovieInfo, getRequest, postRequest, updateRequest } from '../api/Api';
import { RiThumbUpFill, RiThumbDownFill } from 'react-icons/ri'
//components
import RateModal from './RateModal'

const MovieDetails = (props) => {
  const id = props.match.params.id
  const token = props.token
  const [movieDetails, setMovieDetails] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)
  const [btnDisable, setBtnDisable] = useState(false)
  const [exists, setExists] = useState(null)
  const [movie, setMovie] = useState(null)
  const [modalShow, setModalShow] = useState(false)

  useEffect(() => {
    let mounted = true

    getMovieInfo(id)
    .then(data => {
      if (mounted) {
        console.log(data)
        setMovieDetails(data)
        setIsLoaded(true)
      }
    })
    .catch(err => {
      if (err) {
        setError(true)
      }
    })

    getRequest()
    .then(res => {
      const movie = res.find(m => m.movie_id === id)
      if (movie) {
        if(mounted) {
          setMovie(movie)
          setExists(true)
        }
      } else {
        if (mounted) {
          setMovie({title: movieDetails.title , thumbs_up: 0, thumbs_down: 0, movie_id: id})
          setExists(false)
        }
      }
    })

    return () => mounted = false 
  }, [])

  const handleLike = (e) => {
    movie.thumbs_up++
    setModalShow(true)
    e.preventDefault()
    setBtnDisable(true)
    buttonClick(movie)
  }

  const handleDislike = (e) => {
    movie.thumbs_down++
    setModalShow(true)
    e.preventDefault()
    setBtnDisable(true)
    buttonClick(movie)
  }

  const buttonClick = (data ) => {
    if (exists) {
      updateRequest(data, token)
    } else {
      movie.title = movieDetails.title
      postRequest(data, token)
    }
  }

  const { 
    poster, 
    title, 
    plot, 
    year,
    length,
    rating
  } = movieDetails

  return (
    <>
      <RateModal show={ modalShow }/>
      {(isLoaded && !error) && 
        <Container className="details">
          <Row>
            <Col md={ 6 }>
              <Image src={ poster } fluid className="details-img"/>
            </Col>
            <Col md={ 6 }>
              <h1>
                { title }
              </h1>
              <p>
                { year } | { length } | Rating: { rating }
              </p>
              <hr/>
              <p>
                { plot }
              </p>
              <div className="buttons">
                <Button onClick={ handleLike } type="button" variant="link" disabled={ btnDisable }>
                  { movie.thumbs_up } <RiThumbUpFill />
                </Button>         
                <Button onClick={ handleDislike } type="button" variant="link" disabled={ btnDisable }>
                  { movie.thumbs_down } <RiThumbDownFill />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      }
    </>
  );
};

export default MovieDetails;