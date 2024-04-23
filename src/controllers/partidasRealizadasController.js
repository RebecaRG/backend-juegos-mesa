import PartidaRealizada from "../models/partidaRealizadaModel.js";


export const createPartidaRealizada = async (req, res) => {
    try {
        const partida = await PartidaRealizada.create(req.body);
        res.status(201).send(partida);
    } catch (error) {
        res.status(400).send(error);
    }
};


export const getAllPartidasRealizadas = async (req, res) => {
    try {
        const partidas = await PartidaRealizada.findAll();
        res.send(partidas);
    } catch (error) {
        res.status(400).send(error);
    }
};


export const getPartidaRealizadaById = async (req, res) => {
    try {
        const partida = await PartidaRealizada.findByPk(req.params.id);
        if (!partida) {
            return res.status(404).send({ message: 'Partida no encontrada' });
        }
        res.send(partida);
    } catch (error) {
        res.status(400).send(error);
    }
};


export const updatePartidaRealizada = async (req, res) => {
    try {
        const updated = await PartidaRealizada.update(req.body, {
            where: { id_partidas_realizadas: req.params.id }
        });
        if (updated) {
            const updatedPartida = await PartidaRealizada.findByPk(req.params.id);
            res.send(updatedPartida);
        } else {
            res.status(404).send({ message: 'Partida no encontrada' });
        }
    } catch (error) {
        res.status(400).send(error);
    }
};


export const deletePartidaRealizada = async (req, res) => {
    try {
        const deleted = await PartidaRealizada.destroy({
            where: { id_partidas_realizadas: req.params.id }
        });
        if (deleted) {
            res.send({ message: 'Partida eliminada' });
        } else {
            res.status(404).send({ message: 'Partida no encontrada' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};
