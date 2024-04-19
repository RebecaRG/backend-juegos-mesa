import Evento from '../models/eventoModel.js';


export const getEventos = async (req, res) => {
    const listaEventos = await Evento.findAll();

    res.json(listaEventos);
};

export const getEvento = async (req, res) => {
    const { id } = req.params;
    const evento = await Evento.findByPk(id);

    if (evento) {
        res.json(evento);
    } else {
        res.status(404).json({
            msg: `No existe el evento con el id ${id}`
        });
    }
};

export const deleteEvento = async (req, res) => {
    const { id } = req.params;
    const evento = await Evento.findByPk(id);

    if (evento) {
        await evento.destroy();
        res.json({
            msg: 'El evento ha sido eliminado'
        });
    } else {
        res.status(404).json({
            msg: `No existe el evento con el id ${id}`
        });
    }
};

export const postEvento = async (req, res) => {
    const { body } = req;

    try {
        const evento = await Evento.create(body);

        res.json({
            msg: 'El evento ha sido creado',
            evento
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al crear el evento'
        });
    }
};

export const updateEvento = async (req, res) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const evento = await Evento.findByPk(id);
        if (evento) {
            await evento.update(body);
            res.json({
                msg: 'El evento ha sido actualizado',
                evento
            });
        } else {
            res.status(404).json({
                msg: `No existe el evento con el id ${id}`
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al actualizar el evento'
        });
    }
};
