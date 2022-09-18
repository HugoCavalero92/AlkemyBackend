import { Character } from '../models/Character.js'

export const getCharacters = async (req, res) => {
    try {
        const characters = await Character.findAll({ attributes: ['image', 'name'] });
        res.json(characters);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

export const getCharacter = async (req, res) => {
    try {
        const { id } = req.params;
        const character = await Character.findOne({
            where: {
                id,
            },
        });

        if (!character) return res.status(404).json({ message: 'The character  witch id ' + id + ' does not exist' })
        res.json(character);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

export const createCharacter = async (req, res) => {
    const { image, name, age, weight, history, idMovie } = req.body

    try {
        const newCharacter = await Character.create({
            image,
            name,
            age,
            weight,
            history,
            idMovie
        });
        res.json(newCharacter);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

export const updateCharacter = async (req, res) => {
    try {
        const { id } = req.params;
        const { image, name, age, weight, history, idMovie } = req.body

        const character = await Character.findByPk(id)
        character.image = image
        character.name = name
        character.age = age
        character.weight = weight
        character.history = history
        character.idMovie = idMovie
        await character.save()
        res.json(character);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


export const deleteCharacter = async (req, res) => {
    try {
        const { id } = req.params;
        const character = await Character.destroy({
            where: {
                id,
            },
        });

        if (!character) return res.status(404).json({ message: 'The character  witch id ' + id + ' does not exist' })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};   
