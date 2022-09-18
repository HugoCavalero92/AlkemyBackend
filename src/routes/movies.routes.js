import {Router} from 'express'
import {
    createMovie,
    getMovies,
    getMovie, 
    updateMovie, 
    deleteMovie,
    getMovieCharacters,
} from '../controllers/movies.controller.js'
import validateJwt from '../middleware/validate-jwt.js'

const router = Router()

router.get('/movies', getMovies)
router.get('/movies/:id', getMovie)
router.post('/movies', createMovie)
router.put('/movies/:id', [validateJwt], updateMovie)
router.delete('/movies/:id', [validateJwt], deleteMovie)
router.get('/movies/:id/characters', getMovieCharacters)


export default router