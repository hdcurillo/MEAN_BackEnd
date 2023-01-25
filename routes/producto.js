// TODO: RUTAS PARA PRODUCTO
const express = require('express');
const router = express.Router();

//todo: trae el controlador
const productoController = require('../controllers/productoController')

// * api/productos
router.post('/', productoController.createProducto);
router.get('/', productoController.getProductos);
router.put('/:id', productoController.updateProducto);
router.get('/:id', productoController.getProducto);
router.delete('/:id', productoController.deleteProducto);

// router.post('/', () => {
//     console.log('Creando el producto...');
// })

module.exports = router;