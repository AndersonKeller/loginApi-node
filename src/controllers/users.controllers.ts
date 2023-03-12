import { Request, response, Response } from "express";
import { createUserService } from "../services/users/createUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";
import { listUsersService } from "../services/users/listUsers.service";
import { updateUserService } from "../services/users/updateUser.service";

export async function createUserController(
  req: Request,
  res: Response
): Promise<Response> {
  const userData = req.body;
  const user = await createUserService(userData);
  return res.status(201).json(user);
}
export async function listUsersController(
  req: Request,
  res: Response
): Promise<Response> {
  const allUsers = await listUsersService();
  return res.json(allUsers);
}
export async function updateUserController(
  req: Request,
  res: Response
): Promise<Response> {
  const userData = req.body;
  const userId = parseInt(req.params.id);
  const isAdmin = req.user.admin;
  const loggedUserId: number = req.user.id;
  const newUser = await updateUserService(
    userData,
    userId,
    isAdmin,
    loggedUserId
  );
  return res.status(200).json(newUser);
}
export async function deleteUserController(
  req: Request,
  res: Response
): Promise<Response> {
  const userId: number = parseInt(req.params.id);
  const adminId = req.user.id;
  const loggedId = req.user.id;
  const isAdmin = req.user.admin;
  await deleteUserService(userId, adminId, loggedId, isAdmin);
  return res.status(204).send();
}
