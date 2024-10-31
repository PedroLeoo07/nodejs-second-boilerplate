import { Router } from "express";
import UsersRepository from "../models/users/UsersRepository.js";

const usuariosRoutes = Router()
const usersList = new UsersRepository()


usuariosRoutes.get("/", (req, res) => {
    const usuarios = usersList.getAllUsers()
    return res.status(200).json({
        message: usuarios.length == 0 ? "Não há usuários cadastrados" : `Total
        de usuários: ${usuarios.length}`, usuarios
    })
})

export default usuariosRoutes;