import PartidaParticipante from "../models/partidaParticipanteModel.js";
import PartidaRealizada from "../models/partidaRealizadaModel.js";


export const addParticipante = async (req, res) => {
    try {
        const participante = await PartidaParticipante.create(req.body);
        res.status(201).send(participante);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getPartidasByUserId = async (req, res) => {
    const userId = req.params.id;  // ID del usuario proporcionado en la URL
    try {
        console.log('userId:', userId);
        const partidas = await PartidaParticipante.findAll({
            include: [{
                model: PartidaRealizada,
                as: 'partida',
                required: true
            }],
            where: { user_id: userId }
        });

        if (partidas.length > 0) {
            res.status(200).json(partidas);
        } else {
            res.status(404).send('No se encontraron partidas para el usuario especificado.');
        }
    } catch (error) {
        res.status(500).send(`Error al obtener las partidas: ${error.message}`);
    }
};

export const getParticipantesByPartidaId = async (req, res) => {
    try {
        const participantes = await PartidaParticipante.findAll({
            where: { partidas_realizadas_id: req.params.partidaId }
        });
        res.status(200).send(participantes);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateParticipante = async (req, res) => {
    try {
        const updated = await PartidaParticipante.update(req.body, {
            where: { id_participacion: req.params.id }
        });
        if (updated) {
            const updatedParticipante = await PartidaParticipante.findByPk(req.params.id);
            res.status(200).send(updatedParticipante);
        } else {
            res.status(404).send({ message: 'Participante not found' });
        }
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteParticipante = async (req, res) => {
    try {
        const deleted = await PartidaParticipante.destroy({
            where: { id_participacion: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).send({ message: 'Participante not found' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};
