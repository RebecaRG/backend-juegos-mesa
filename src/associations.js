import Lugar from './models/lugarModel.js'
import LugarTipo from './models/lugarTipoModel.js';
import Producto from './models/productoModel.js';
import ProductoComplejidad from './models/productoComplejidadModel.js';
import ProductoContexto from './models/productoContextoModel.js';
import ProductoDinamica from './models/productoDinamicaModel.js';
import ProductoParte from './models/productoPartesModel.js';
import ProductoTematizacion from './models/productoTematizacionModel.js';
import Componente from './models/componenteModel.js';
import ProductoComponente from './models/productoComponenteModel.js';
import User from './models/userModel.js';
import UserJuego from './models/usersJuegosModel.js';


//LUGAR
Lugar.belongsTo(LugarTipo, {
    foreignKey: 'lugares_tipo_id', 
    as: 'tipo'
});


LugarTipo.hasMany(Lugar, {
    foreignKey: 'lugares_tipo_id', 
    as: 'lugares'
});

//PRODUCTO

//ProductoComplejidad
Producto.belongsTo(ProductoComplejidad, {
    foreignKey: 'complejidad_id', 
    as: 'complejidad'
});

ProductoComplejidad.hasMany(Producto, {
    foreignKey: 'complejidad_id', 
    as: 'productos'
});

//ProductoContexto
Producto.belongsTo(ProductoContexto, {
    foreignKey: 'contexto_id', 
    as: 'contexto'
});
ProductoContexto.hasMany(Producto, {
    foreignKey: 'contexto_id', 
    as: 'productos'
});

//ProductoDinamica
Producto.belongsTo(ProductoDinamica, {
    foreignKey: 'dinamica_id', 
    as: 'dinamica'
});
ProductoDinamica.hasMany(Producto, {
    foreignKey: 'dinamica_id', 
    as: 'productos'
});

//ProductoParte
Producto.belongsTo(ProductoParte, {
    foreignKey: 'parte_id', 
    as: 'parte'
});

ProductoParte.hasMany(Producto, {
    foreignKey: 'parte_id', 
    as: 'productos'
});

//ProductoTematizacion
Producto.belongsTo(ProductoTematizacion, {
    foreignKey: 'tematizacion_id', 
    as: 'tematizacion'
});

ProductoTematizacion.hasMany(Producto, {
    foreignKey: 'tematizacion_id', 
    as: 'productos'
});

//ProductoComponente
Producto.belongsToMany(Componente, {
    through: ProductoComponente,
    foreignKey: 'id_juego',
    otherKey: 'id_componente',
    as: 'componentes'
});

Componente.belongsToMany(Producto, {
    through: ProductoComponente,
    foreignKey: 'id_componente',
    otherKey: 'id_juego',
    as: 'productos'
});

//USERJUEGO
UserJuego.belongsTo(User, {
    foreignKey: 'user_id', 
    as: 'usuario'
});

UserJuego.belongsTo(Producto, {
    foreignKey: 'juego_id', 
    as: 'juego'
});









