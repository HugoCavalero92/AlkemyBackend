export const getUsers = async (req, res) => {

try {
    const users = await User.findAll();
    res.json(users);
}  catch (error) {
        return res.status(500).json({message: error.message})
    }
};


export const getUser = async (req, res) => {
try {
    const { id } = req.params;
    const user = await User.findOne({
        where: {
            id,
        },
    });

    if(!user) return res.status(404).json({message: 'The user  witch id ' + id + ' does not exist'}) 

    res.json(user);
}   catch (error) {
    return res.status(500).json({message: error.message})
}
};


export const createUser = async (req, res) => {
    const {name, surname, email, password} = req.body

try {
    const newUser = await User.create({
        name, 
        surname, 
        email, 
        password
    });
    res.json(newUser);
}   catch (error) {
    return res.status(500).json({message: error.message})
}
};


export const updateUser = async (req, res) => {
try {
    const { id } = req.params;
    const {name, surname, email, password} = req.body

    const user = await User.findByPk(id)
    user.name = name
    user.surname = surname
    user.email = email
    user.password = password
    await user.save()
    res.json(user);
}   catch (error) {
    return res.status(500).json({message: error.message})
}
};


export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await User.destroy({
            where: {
                id,
            },
        });
        res.sendStatus(204)
    }   catch (error) {
        return res.status(500).json({message: error.message})
    }
};   

