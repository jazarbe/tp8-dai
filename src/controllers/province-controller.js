import { Router } from 'express';
import ProvinceService from './../services/province-service.js'
const router = Router();
const svc = new ProvinceService();  // Instanciación del Service.

router.get('', async (req, res) => {
    let respuesta;
    const returnArray = await svc.getAllAsync();
    if (returnArray != null){
        respuesta = res.status(200).json(returnArray);
    } else {
        respuesta = res.status(500).send(`Error interno.`);
    }
    return respuesta;
});
router.get('/:id', async (req, res) => {
    let respuesta;
    const id = req.params.id;
    const returnArray = await svc.getByIdAsync(id);
    if (returnArray != null){
        respuesta = res.status(200).json(returnArray);
    } else {
        respuesta = res.status(404).send(`No se encontró la provincia con id ${id}.`);
    }
    return respuesta;
})
router.post('/create', async (req, res) => {
    let respuesta;
    const entity = new Province(null, req.body.name, req.body.full_name, req.body.latitude, req.body.longitude, req.body.display_order);
    const returnArray = await svc.createAsync(entity);
    if (returnArray != null){
        respuesta = res.status(201).json(returnArray);
    } else {
        respuesta = res.status(400).send(`Bad request. Verifique los datos ingresados.`);
    }
    return respuesta;
})
router.put('/update', async (req, res) => {
    let respuesta;
    const entity = new Province(req.body.id, req.body.name, req.body.full_name, req.body.latitude, req.body.longitude, req.body.display_order);
    const returnArray = await svc.updateAsync(entity);
    if (returnArray != null){
        respuesta = res.status(201).json(returnArray);
    } else {
        respuesta = res.status(400).send(`Bad request. Verifique los datos ingresados.`);
        respuesta = res.status(404).send(`No se encontró la provincia con id ${entity.id}.`);
    }
    return respuesta;
})
router.delete('/delete', async (req, res) => {
    let respuesta;
    const id = req.body.id;
    const returnArray = await svc.deleteByIdAsync(id);
    if (returnArray != null){
        respuesta = res.status(200).json(returnArray);
    } else {
        respuesta = res.status(400).send(`Bad request. Verifique los datos ingresados.`);
        respuesta = res.status(404).send(`No se encontró la provincia con id ${id}.`);
    }
    return respuesta;
})

export default router;