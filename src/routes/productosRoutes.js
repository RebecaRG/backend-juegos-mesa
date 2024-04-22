import { Router } from 'express';
import { getProducts, getProduct, deleteProduct, postProduct, updateProduct } from '../controllers/productosController.js';
import { validateProduct } from '../middlewares/validateProductos.js'; 
import { productValidationRules } from '../validations/productos.Validations.js'; 
const router = Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.delete('/:id', deleteProduct);
router.post('/', productValidationRules, validateProduct, postProduct);  
router.put('/:id', productValidationRules, validateProduct, updateProduct);  

export default router;
