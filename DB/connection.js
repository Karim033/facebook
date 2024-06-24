import { Sequelize } from "sequelize";

export const sequlizeInstace = new Sequelize("beydwqxtgausbsylcthp", "utuww5azplgrwexq", "XaCGjEDFTlEsuu86pH2t", {
  host: "beydwqxtgausbsylcthp-mysql.services.clever-cloud.com",
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
