import Lugar from './models/lugarModel.js'
import LugarTipo from './models/lugarTipoModel.js';


Lugar.belongsTo(LugarTipo, {
    foreignKey: 'lugares_tipo_id', 
    as: 'tipo'
});


LugarTipo.hasMany(Lugar, {
    foreignKey: 'lugares_tipo_id', 
    as: 'lugares'
});
