import { DataTypes } from "sequelize";
import { sequlizeInstace } from "../connection.js";
import User from "./user.model.js";
import Post from "./post.model.js";

const Comment = sequlizeInstace.define(
  "Comment",
  {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
User.hasMany(Comment, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Comment.belongsTo(User);

Post.hasMany(Comment, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Comment.belongsTo(Post);

console.log(sequlizeInstace.models.Comment);

export default Comment;
