import { response, Router } from 'express';
import ProvinceService from './../services/province-service.js'
const router = Router();
const svc = new ProvinceService();
import Province from '../entities/province.js';

router.get('', async (req, res) => {
    let respuesta;
    try{
        const returnArray = await svc.getAllAsync();
        if (returnArray != null){
            respuesta = res.status(200).json(returnArray);
        }
    }catch(error){
        respuesta = res.status(500).send(`Error interno.`);
    }
    return respuesta;
});
router.get('/:id', async (req, res) => {
    let respuesta;
    try{
        const id = parseInt(req.params.id, 10)
        const returnArray = await svc.getByIdAsync(id);
        if (returnArray === null){
            respuesta = res.status(404).send(`No se encontró la provincia con id ${id}.`);
        } else{
            respuesta = res.status(200).json(returnArray);
        }
    }catch(error){
        respuesta = res.status(500).send(`Error interno del servidor.`)
    }
    return respuesta;
})
router.post('', async (req, res) => {
    let respuesta; 
    try{
        const entity = new Province(null, req.body.name, req.body.full_name, req.body.latitude, req.body.longitude, req.body.display_order);
        const returnArray = await svc.createAsync(entity);

        if (returnArray === null){
            respuesta = res.status(400).send(`Bad request. Verifique los datos ingresados.`);
        } else {
            respuesta = res.status(201).json(returnArray)
        }
    }catch(error){
        respuesta = res.status(500).send(`Error interno del servidor.`)
    }
    return respuesta;
})
router.put('', async (req, res) => {
    let respuesta;
    try{
        const entity = new Province(req.body.id, req.body.name, req.body.full_name, req.body.latitude, req.body.longitude, req.body.display_order);
        const returnArray = await svc.updateAsync(entity);
        if (returnArray === null){
            respuesta = res.status(400).send(`Bad request. Verifique los datos ingresados.`);
            respuesta = res.status(404).send(`No se encontró la provincia con id ${entity.id}.`);
        } else {
            respuesta = res.status(201).json(returnArray);
        }
    }catch(error){
        respuesta = res.status(500).send(`Error interno del servidor.`)
    }
    return respuesta;
})
router.delete('/:id', async (req, res) => {
    let respuesta;
    try{
        const id = parseInt(req.params.id, 10);
        const returnArray = await svc.deleteByIdAsync(id);
        if (returnArray === null){
            respuesta = res.status(400).send(`Bad request. Verifique los datos ingresados.`);
            respuesta = res.status(404).send(`No se encontró la provincia con id ${id}.`);
        }
        else {
            respuesta = res.status(200).json(returnArray);
        }
    }catch(error){
        respuesta = res.status(500).send(`Error interno del servidor`)
    }
    return respuesta;
})

export default router;