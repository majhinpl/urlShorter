const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      role: user.role,
    },
    secret
  );
}

function getUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
}

function getUser(id) {
  return sessionIdToUserMap.get(id, user);
}

module.exports = {
  setUser,
  getUser,
};
