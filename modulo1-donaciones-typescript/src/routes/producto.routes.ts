import { Router, Request, Response } from 'express';
import { registrarProducto, listarProductos, borrarProducto, actualizarProducto } from '../services/producto.service';

const router = Router();

// Obtener todos los productos
router.get('/', async (_req: Request, res: Response) => {
  try {
    const productos = await listarProductos();
    res.json(productos);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Registrar producto
router.post('/', async (req: Request, res: Response) => {
  try {
    const { id_donacion, nombre, cantidad, unidad, tipo } = req.body;

    if (!id_donacion || !nombre || !cantidad || !unidad || !tipo) {
      res.status(400).json({ error: 'Faltan campos requeridos' });
      return;
    }

    const nuevo = await registrarProducto({ id_donacion, nombre, cantidad, unidad, tipo });
    res.status(201).json(nuevo);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar producto
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { id_donacion, nombre, cantidad, unidad, tipo } = req.body;

    if (isNaN(id)) {
      res.status(400).json({ error: 'ID inválido' });
      return;
    }

    const actualizado = await actualizarProducto(id, { id_donacion, nombre, cantidad, unidad, tipo });

    if (!actualizado) {
      res.status(404).json({ error: 'Producto no encontrado' });
    } else {
      res.status(200).json(actualizado);
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar producto
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ error: 'ID inválido' });
      return;
    }

    await borrarProducto(id);
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
