import {Router} from 'express'
import {
 getGender,
 getGenders,
 createGender,
 updateGender,
 deleteGender,
 getGenderMovies
} from '../controllers/genders.controller.js'

const router = Router()

router.get('/genders', getGenders)
router.get('/genders/:id', getGender)
router.post('/genders', createGender)
router.put('/genders/:id', updateGender)
router.delete('/genders/:id', deleteGender)
router.get('/genders/:id/movies', getGenderMovies)


export default router