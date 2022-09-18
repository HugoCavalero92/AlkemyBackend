import { User } from '../models/User.js'
import mailer from '../templates/signup-mail.js'

export const registerUser = async (req, res) => {

  const { fullName, email, password } = req.body;

  const alreadyExistsUser = await User.findOne({ where: { email } }).catch(
    (err) => {
      console.log("Error: ", err);
    }
  );

  if (alreadyExistsUser) return res.status(409).json({ message: "User with email already exists!" })


  const newUser = new User({ fullName, email, password });

  const savedUser = await newUser.save().catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ error: "Cannot register user at the moment!" });
  })
  mailer.enviar_mail(newUser.fullName);

  if (savedUser) res.json({ message: "Thanks for registering" });

};
