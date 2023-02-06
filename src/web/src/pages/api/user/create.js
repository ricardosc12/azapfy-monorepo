import { JsonDB, Config } from 'node-json-db';

export default async function handler(req, res) {
    try {
        var db = new JsonDB(new Config("database", true, false, '/'));

        await db.push("/users",{ricardo:{
            nome:"Ricardo Spínola",
            email:"ricardo.spinola9@gmail.com",
            pass:'987918273'
        }});
    
        await db.save();

        res.status(200).json({
            sucess:true
        })
    }catch{
        res.status(200).json({
            sucess:false
        })
    }



}