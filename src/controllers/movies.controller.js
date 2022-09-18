import { Movie } from '../models/Movie.js'
import { Character } from '../models/Character.js'

export const getMovies = async (req, res) => {
    try {
        const movies = await Movie.findAll({ attributes: ['image', 'title', 'dateCreation'] });
        res.json(movies);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

export const getMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findOne({
            where: {
                id,
            },
        });

        if (!movie) return res.status(404).json({ message: 'The movie  witch id ' + id + ' does not exist' })
        res.json(movie);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


export const createMovie = async (req, res) => {
    const { image, title, dateCreation, calification, idGender } = req.body

    try {
        const newMovie = await Movie.create({
            image,
            title,
            dateCreation,
            calification,
            idGender
        });
        res.json(newMovie);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


export const updateMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const { image, title, dateCreation, calification, idGender } = req.body

        const movie = await Movie.findByPk(id)
        movie.image = image
        movie.title = title
        movie.dateCreation = dateCreation
        movie.calification = calification
        movie.idGender = idGender
        await movie.save()
        res.json(movie);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


export const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        await Movie.destroy({
            where: {
                id,
            },
        });
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

export const getMovieCharacters = async (req, res) => {
    try {
        const { id } = req.params;
        const characters = await Character.findAll({
            where: { idMovie: id },
        });
        res.json(characters)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}