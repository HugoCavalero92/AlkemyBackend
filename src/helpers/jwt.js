import jwt from 'jsonwebtoken'

const generateJwt = (uid) => {

    return new Promise((resolve, reject) => {
        const payload = {
            uid
        };

        jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '12h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('It was not possible to generate the jwt');
            } else {
                resolve(token);
            }

        });
    })

}
export default generateJwt;