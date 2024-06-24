import { Sequelize } from "sequelize";

export const sequlizeInstace = new Sequelize("facebook_c42", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const db_connection = async () => {
  try {
    await sequlizeInstace.sync({ alter: true });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default db_connection;
