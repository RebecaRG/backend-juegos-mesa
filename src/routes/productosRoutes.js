import { Router } from 'express';
import { getProducts, getProduct, deleteProduct, postProduct, updateProduct } from '../controllers/productosController.js';
import { validateProduct } from '../middlewares/validateProductos.js'; 
import { productValidation } from '../validations/productos.Validations.js'; 
const router = Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.delete('/:id', deleteProduct);
router.post('/', productValidation, validateProduct, postProduct);  
router.put('/:id', productValidation, validateProduct, updateProduct);  

export default router;
