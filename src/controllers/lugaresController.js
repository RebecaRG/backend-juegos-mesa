import Lugar from '../models/lugarModel.js';
import LugarTipo from '../models/lugarTipoModel.js';

export const getLugaresConTipo = async (req, res) => {
    try {
        const lugares = await Lugar.findAll({
            include: [{
                model: LugarTipo,
                as: 'tipo',
                attributes: ['nombre']  
            }]
        });
        res.json(lugares);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al obtener los lugares');
    }
};
