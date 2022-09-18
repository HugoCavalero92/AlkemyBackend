import { User } from '../models/User.js'
import generateJwt from '../helpers/jwt.js'


export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const userWithEmail = await User.findOne({ where: { email } }).catch(
    (err) => {
      console.log("Error: ", err);
    }
  );

  if (!userWithEmail)
    return res
      .status(400)
      .json({ message: "Email or password does not match!" });

  if (userWithEmail.password !== password)
    return res
      .status(400)
      .json({ message: "Email or password does not match!" });

  const token = await generateJwt(userWithEmail.id);
  res.json({ message: "Welcome Back!", token: token });
};