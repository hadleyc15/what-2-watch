const Post = require("./Post");
const User = require("./User");
const Vote = require("./Vote");

//User can post many movie suggestions
 User.hasMany(Post, {
     foreignKey: 'user_id'
 });

//Each movie suggestion post belongs to one user
 Post.belongsTo(User, {
     foreignKey: 'user_id',
 });
 
 //User can only have one vote
 User.hasOne(Vote, {
    foreignKey: 'user_id'
});

module.exports = {
    Post,
    User,
    Vote
};