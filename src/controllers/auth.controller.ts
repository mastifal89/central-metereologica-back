import { Request, Response } from "express";
const AuthService = require("./../services/auth.service");

/**
 * Login user.
 * @param req
 * @param res
 */
async function login(req: Request, res: Response) {
  const { username, password } = req.body;

  const user = await AuthService.validateUser();
}
