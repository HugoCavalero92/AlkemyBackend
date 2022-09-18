import { Gender } from '../models/Gender.js'
import { Movie } from '../models/Movie.js'

export const getGenders = async (req, res) => {
    try {
        const genders = await Gender.findAll();
        res.json(genders);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

export const getGender = async (req, res) => {
    try {
        const { id } = req.params;
        const gender = await Gender.findOne({
            where: {
                id,
            },
        });

        if (!gender) return res.status(404).json({ message: 'The gender  witch id ' + id + ' does not exist' })
        res.json(gender);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

export const createGender = async (req, res) => {
    const { name, image } = req.body
    try {
        const newGender = await Gender.create({
            name,
            image
        });
        res.json(newGender);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

export const updateGender = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, image } = req.body

        const gender = await Gender.findByPk(id)
        gender.name = name
        gender.image = image
        await gender.save()
        res.json(gender);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


export const deleteGender = async (req, res) => {
    try {
        const { id } = req.params;
        const gender = await Gender.destroy({
            where: {
                id,
            },
        });

        if (!gender) return res.status(404).json({ message: 'The gender  witch id ' + id + ' does not exist' })

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

export const getGenderMovies = async (req, res) => {
    try {
        const { id } = req.params;
        const movies = await Movie.findAll({
            where: { idGender: id },
        });
        res.json(movies)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}