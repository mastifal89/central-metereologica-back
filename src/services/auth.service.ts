import jwt from "jsonwebtoken";

interface User {
  id: number;
  username: string;
}

interface UserAuth {
  username: string;
  password: string;
}

/**
 * Generate token for user
 * @param user
 * @returns token string
 */
function generateToken(user: User) {
  const secretToken = process.env.JWT_SECRET_TOKEN
    ? process.env.JWT_SECRET_TOKEN
    : "";
  // implementar el token de jwt desde .env para testarlo
  return jwt.sign({ user }, secretToken, { expiresIn: "24h" });
}

/**
 * Validate auth user in BD
 * @param userData
 * @returns user object with data
 */
function validateUser(userData: UserAuth) {
  const { password, username } = userData;

  // llamar a la bd para ver q onda de ese user
  // el if solo es para testing -> usuario por default.,
  if (password === "iorio123" && username === "ricado") {
    return { id: 1, username: "Ricardo Iorio" } as User;
  }

  return null;
}

module.exports = {
  generateToken,
  validateUser,
};
