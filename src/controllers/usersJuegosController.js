import UserJuego from "../models/usersJuegosModel.js";

export const getUserJuegos = async (req, res) => {
    try {
        const userId = req.params.userId;
        const userJuegos = await UserJuego.findAll({
            where: { user_id: userId },
            include: ['juego', 'usuario']
        });
        res.json(userJuegos);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los juegos de mesa del usuario/a", error });
    }
};

export const addUserJuego = async (req, res) => {
    try {
        const { user_id, juego_id, estado, valoracion_juego, comentario } = req.body;
        const newUserJuego = await UserJuego.create({ user_id, juego_id, estado, valoracion_juego, comentario });
        res.status(201).json(newUserJuego);
    } catch (error) {
        res.status(500).json({ message: "Error al añadir el juego de mesa a la lista del usuario/a", error });
    }
};

export const updateUserJuego = async (req, res) => {
    try {
        const id = req.params.id;
        const { estado, valoracion_juego, comentario } = req.body;
        const userJuego = await UserJuego.findByPk(id);
        if (userJuego) {
            await userJuego.update({ estado, valoracion_juego, comentario });
            res.json({ message: "Juego de mesa actualizado con éxito", userJuego });
        } else {
            res.status(404).json({ message: "Juego de mesa no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el juego de mesa del usuario/a", error });
    }
};

export const deleteUserJuego = async (req, res) => {
    try {
        const id = req.params.id;
        const userJuego = await UserJuego.findByPk(id);
        if (userJuego) {
            await userJuego.destroy();
            res.json({ message: "Juego de mesa eliminado con éxito" });
        } else {
            res.status(404).json({ message: "Juego de mesa no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el juego de mesa del usuario/a", error });
    }
};