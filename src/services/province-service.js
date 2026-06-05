import { validarId, validarProvincia } from '../helpers/validaciones-helper.js'
import ProvinceRepository from '../repositories/province-repository.js';

export default class ProvinceService {
    getAllAsync = async () => {
        const repo = new ProvinceRepository();
        const returnArray = await repo.getAllAsync();
        return returnArray;
    }
    getByIdAsync = async (id) => {
        let returnArray = null
        if(validarId(id)){
            const repo = new ProvinceRepository();
            returnArray = await repo.getByIdAsync(id);
        }
        return returnArray;
    }
    createAsync = async (entity) => {
        let returnArray = null
        if(validarProvincia(entity)){
            const repo = new ProvinceRepository();
            returnArray = await repo.createAsync(entity);
        }
        return returnArray;
    }
    updateAsync = async (entity) => {
        let returnArray = null
        if(validarProvincia(entity)){
            const repo = new ProvinceRepository();
            returnArray = await repo.updateAsync(entity);
        }
        return returnArray;
    }
    deleteByIdAsync = async (id) => {
        let returnArray = null
        if(validarId(id)){
            const repo = new ProvinceRepository();
            returnArray = await repo.deleteByIdAsync(id);
        }
        return returnArray;
    }
}