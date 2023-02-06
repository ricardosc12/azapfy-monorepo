import { JsonDB, Config } from 'node-json-db';

export default async function handler(req, res) {
    try {
        var db = new JsonDB(new Config("database", true, false, '/'));

        let users = await db.getData('/users')

        res.status(200).json({
            users
        })
        
    }catch {
        res.status(200).json({
            users:[]
        })
    }
}