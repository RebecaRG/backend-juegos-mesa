import Producto from "../models/productoModel.js";
import Componente from "../models/componenteModel.js";
import ProductoComponente from "../models/productoComponenteModel.js";
import ProductoComplejidad from "../models/productoComplejidadModel.js";
import ProductoContexto from "../models/productoContextoModel.js";
import ProductoDinamica from "../models/productoDinamicaModel.js";
import ProductoParte from "../models/productoPartesModel.js";
import ProductoTematizacion from "../models/productoTematizacionModel.js";


const includeRelations = [
    {
        model: ProductoContexto,
        as: 'contexto',
        attributes: ['nombre']
    },
    {
        model: ProductoDinamica,
        as: 'dinamica',
        attributes: ['nombre']
    },
    {
        model: ProductoParte,
        as: 'parte',
        attributes: ['nombre']
    },
    {
        model: ProductoTematizacion,
        as: 'tematizacion',
        attributes: ['nombre']
    },
    {
        model: ProductoComplejidad,
        as: 'complejidad',
        attributes: ['nombre']
    },
    {
        model: Componente,
        as: 'componentes',
        attributes: ['nombre'],
        through: {
            attributes: []
        }
    }
];

function prepareProductData(body) {
    const {
        titulo,
        descripcion,
        contexto_id,
        dinamica_id,
        parte_id,
        tematizacion_id,
        complejidad_id,
        editorial,
        autoria,
        ilustracion,
        participantes_min,
        participantes_max,
        duracion_minutos,
        edad_min,
        ean,
        url,
        medidas_caja_cm,
        peso_gr,
        premios,
        ranking_global
    } = body;

    return {
        titulo,
        descripcion,
        contexto_id,
        dinamica_id,
        parte_id,
        tematizacion_id,
        complejidad_id,
        editorial,
        autoria,
        ilustracion,
        participantes_min,
        participantes_max,
        duracion_minutos,
        edad_min,
        ean,
        url,
        medidas_caja_cm,
        peso_gr,
        premios,
        ranking_global
    };
}



export const getProducts = async (req, res) => {
    try {
        const productos = await Producto.findAll({
            include: includeRelations});
        res.status(200).json({
            mensaje: "Lista de juegos de mesa obtenida con éxito",
            cantidad: productos.length,
            productos
        });
    } catch (error) {
        res.status(500).send({
            mensaje: "Error al obtener los juegos de mesa",
            error: error.message
        });
    }
};

export const getProduct = async (req, res) => {
    const id = req.params.id; 
    try {
        const producto = await Producto.findByPk(id, { include: includeRelations });
        if (producto) {
            res.json(producto);
        } else {
            res.status(404).send('Juego de mesa no encontrado');
        }
    } catch (error) {
        res.status(500).send({
            mensaje: "Error al obtener el juego de mesa",
            error: error.message
        });
    }
};

export const deleteProduct = async (req, res) => {
    const id = req.params.id; 
    try {
        const producto = await Producto.findByPk(id);
        if (!producto) {
            return res.status(404).send('Juego de mesa no encontrado');
        }
        await producto.destroy();
        res.send('Juego de mesa eliminado con éxito');
    } catch (error) {
        res.status(500).send({
            mensaje: "Error al eliminar el juego de mesa",
            error: error.message
        });
    }
};

export const postProduct = async (req, res) => {
    try {
        const newProductData = prepareProductData(req.body);
        const newProduct = await Producto.create(newProductData);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).send({
            mensaje: "Error al crear el juego de mesa",
            error: error.message
        });
    }
};


export const updateProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const producto = await Producto.findByPk(id);
        if (!producto) {
            return res.status(404).send('Juego de mesa no encontrado');
        }
        const updateData = prepareProductData(req.body);
        await producto.update(updateData);
        res.json({
            mensaje: 'Juego de mesa actualizado con éxito',
            producto
        });
    } catch (error) {
        res.status(500).send({
            mensaje: "Error al actualizar el juego de mesa",
            error: error.message
        });
    }
};