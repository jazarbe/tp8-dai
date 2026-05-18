import config from './../configs/dbConfig.js';
import pkg from 'pg'
const { Client, Pool } = pkg;

export default class ProvinceRepository {
    getAllAsync = async () => {
        let returnArray = null;
        const client = new Client(config);
        try {
            await client.connect();
            const sql = `SELECT * FROM provinces`;
            const result = await client.query(sql);
            await client.end();
            returnArray = result.rows;
        } catch (error) {
            console.log(error);
        } return returnArray;
    }
    getByIdAsync = async (id) => {
        let returnArray = null;
        const client = new Client(config);
        try {
            await client.connect();
            const sql = `SELECT * FROM provinces WHERE id = $1`;
            const result = await client.query(sql, id);
            await client.end();
            returnArray = result.rows;
        } catch (error) {
            console.log(error);
        } return returnArray;
    }
    createAsync = async (entity) => {
        let returnArray = null;
        const client = new Client(config);
        try {
            await client.connect();
            const sql = `
            INSERT INTO provinces (name, full_name, latitude, longitude, display_order) 
            VALUES ($1, $2, $3, $4, $5)`;
        
            const values = [
                entity.name,
                entity.full_name,
                entity.latitude,
                entity.longitude,
                entity.display_order
            ];

            const result = await client.query(sql, values);
            await client.end();
        } catch (error) {
            console.log(error);
       } return returnArray;
    }
    updateAsync = async (entity) => {/* hacerlo */}
    deleteByIdAsync = async (id) => {/* hacerlo */}
}