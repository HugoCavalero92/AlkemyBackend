import {Router} from 'express'
import {
 getCharacter,
 getCharacters,
 createCharacter,
 updateCharacter,
 deleteCharacter,
} from '../controllers/characters.controller.js'
import validateJwt from '../middleware/validate-jwt.js'

const router = Router()

router.get('/characters', getCharacters)
router.get('/characters/:id', getCharacter)
router.post('/characters', createCharacter)
router.put('/characters/:id', updateCharacter)
router.delete('/characters/:id', [validateJwt], deleteCharacter)


export default router