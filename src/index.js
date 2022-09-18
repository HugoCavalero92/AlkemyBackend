import app from "./app.js";
import { sequelize } from "./database/database.js";
import "./models/Character.js"
import "./models/Movie.js"
import "./models/Gender.js"
import "./models/User.js"

async function main() {
  try {
  await sequelize.sync({force: false})
  app.listen(3000);
  console.log("Server running on port 3000");
} catch (error) {
    console.error("Error at execute", error);
}
} 
main();
